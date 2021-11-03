import { ActionType } from '../action-creators/actionTypes';
import { Action } from '../action-creators/actionCreatorTypes';
import { NodeTypes, File, Folder } from '../cellNodeTypes';
import { produce } from 'immer';

// Here we use immer. Immer basically simplifies handling immutable data structure. In react and redux, we need to be aware of that we should use immutable objects, so it means we need to create a new object/array and should return it everytime.  The structure doesn't force us to keep that mentality so it means we are prone to make error. The immer makes this process easier and satifies these immutable restriction by itself. Also in nested objects, making immutable condition is a bit hard so immer helps us in this condition very efficiently.

// All types return state, it is meanningles with immer but we do it because of typescript. It thinks the reducers may return undefined if we dont do that.

interface NodeState {
  allNodes: (File | Folder)[];
  attemptToCreate: {
    status: boolean;
    nodeType: NodeTypes | null;
  };
}

const initialState: NodeState = {
  allNodes: [],
  attemptToCreate: {
    status: false,
    nodeType: null,
  },
};

const reducer = produce(
  (state: NodeState = initialState, action: Action): NodeState => {
    switch (action.type) {
      case ActionType.CREATE_FILE:
        const newFile: File = {
          name: action.payload.name,
          nodeId: randomId(),
          nodeType: 'file',
          code: {
            type: 'code',
            content: '',
          },
          text: {
            type: 'text',
            content: '',
          },
        };
        state.allNodes.push(newFile);

        return state;

      case ActionType.UPDATE_FILE:
        const { nodeId, cellType, newContent } = action.payload;
        const nodeUpdateIndex = state.allNodes.findIndex(
          (n) => n.nodeId === nodeId
        );

        state.allNodes[nodeUpdateIndex][cellType].content = newContent;

        return state;

      case ActionType.DELETE_FILE:
        state.allNodes = state.allNodes.filter(
          (n) => n.nodeId !== action.payload.nodeId
        );

        return state;

      case ActionType.CREATE_FOLDER:
        const newFolder: Folder = {
          name: action.payload.name,
          nodeId: randomId(),
          nodeType: 'folder',
          files: [],
        };
        state.allNodes.push(newFolder);
        return state;

      case ActionType.DELETE_FOLDER:
        state.allNodes = state.allNodes.filter(
          (n) => n.nodeId !== action.payload.nodeId
        );
        return state;

      case ActionType.CREATE_FILE_IN_FOLDER:
        let file: File = {
          name: action.payload.name,
          nodeId: randomId(),
          nodeType: 'file',
          code: {
            type: 'code',
            content: '',
          },
          text: {
            type: 'text',
            content: '',
          },
        };

        const nodeFolderIndex = state.allNodes.findIndex(
          (n) => n.nodeId === action.payload.folderNodeId
        );

        const folderNode = state.allNodes[nodeFolderIndex];

        if ('files' in folderNode) {
          folderNode.files.push(file);
        }

        return state;

      case ActionType.DELETE_FILE_IN_FOLDER: {
        const nodeFolderIndex = state.allNodes.findIndex(
          (n) => n.nodeId === action.payload.folderNodeId
        );

        const folderNode = state.allNodes[nodeFolderIndex];

        if ('files' in folderNode) {
          folderNode.files.filter(
            (n) => n.nodeId !== action.payload.fileNodeId
          );
        }

        return state;
      }

      case ActionType.CREATE_NODE_ATTEMPT: {
        const { nodeType, status } = action.payload;

        state.attemptToCreate = {
          status,
          nodeType,
        };
        return state;
      }

      default:
        return state;
    }
  }
);

const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;

/*

const reducer = produce((
  state: CellState = initialState,
  action: Action
): CellState => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      state.data[id].content = content;
      return state;

    case ActionType.DELETE_CELL:
      delete state.data[action.payload.id]; // delete from data
      state.order = state.order.filter((id) => id !== action.payload.id); // delete from order array.
      return state;

    case ActionType.ADD_CELL:
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: randomId(),
      };
      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex(
        (id) => id === action.payload.id
      );

      if (foundIndex < 0) {
        state.order.push(cell.id);
      } else {
        state.order.splice(foundIndex, 0, cell.id);
      }
      return state;

    default:
      return state;
  }
})

*/
