import { ActionType } from '../action-creators/actionTypes';
import { Action } from '../action-creators/actionCreatorTypes';
import { NodeTypes, File, Folder, FileParents } from '../cellNodeTypes';
import { produce } from 'immer';

// Here we use immer. Immer basically simplifies handling immutable data structure. In react and redux, we need to be aware of that we should use immutable objects, so it means we need to create a new object/array and should return it everytime.  The structure doesn't force us to keep that mentality so it means we are prone to make error. The immer makes this process easier and satifies these immutable restriction by itself. Also in nested objects, making immutable condition is a bit hard so immer helps us in this condition very efficiently.

// All types return state, it is meanningles with immer but we do it because of typescript. It thinks the reducers may return undefined if we dont do that.

const html = `
  <html>
    <head>
      <style> html {background-color: white;} </style>
    </head>
    <body>
      <div id="root"></div>
      <script>

        const handleError = (err) => {
          const root = document.querySelector('#root')
          root.innerHTML = '<div style="color: red"><h4>Runtime Error</h4>' + err + '</div>'
          console.error(err)
        }

        window.addEventListener('error', (event)=> {
          event.preventDefault()
          handleError(event.error)
        })

        window.addEventListener('message', (event) => {
          try {
            eval(event.data)
          } catch(err) {
            handleError(err)
          }
        });
      </script>
    </body>
  </html>
  `;

interface NodeState {
  allNodes: (File | Folder)[];
  attemptToCreate: {
    status: boolean;
    nodeType: NodeTypes | null;
    parentNodeId: string | 'workspace' | null;
  };
  selectedFileInfoToView: {
    nodeId: string;
    index: number;
    parent: FileParents;
    subIndex: number;
  } | null;
}

const initialState: NodeState = {
  allNodes: [
    {
      name: 'src',
      nodeId: 'src',
      nodeType: 'folder',
      files: [
        {
          name: 'index.js',
          nodeId: 'entryPoint',
          nodeType: 'file',
          code: '',
          text: '',
          parent: 'src',
        },
      ],
    },
    {
      name: 'public',
      nodeId: 'public',
      nodeType: 'folder',
      files: [
        {
          name: 'index.html',
          nodeId: 'html',
          nodeType: 'file',
          code: html,
          text: '',
          parent: 'public',
        },
      ],
    },
  ],
  attemptToCreate: {
    status: false,
    nodeType: null,
    parentNodeId: null,
  },
  selectedFileInfoToView: null,
};

const reducer = produce(
  (state: NodeState = initialState, action: Action): NodeState => {
    switch (action.type) {
      case ActionType.CREATE_FILE:
        const newFile: File = {
          name: action.payload.name,
          nodeId: randomId(),
          nodeType: 'file',
          code: '',
          text: '',
          parent: 'workspace',
        };
        state.allNodes.push(newFile);

        return state;

      case ActionType.UPDATE_FILE: {
        const { nodeId, cellType, newContent, parent } = action.payload;
        let file: File | Folder;

        if (parent === 'workspace') {
          const nodeUpdateIndex = state.allNodes.findIndex(
            (n) => n.nodeId === nodeId
          );
          file = state.allNodes[nodeUpdateIndex];
        }

        // this means it is a subfolder
        if (parent !== 'workspace') {
          // don't use find method returns new array, causes issues with immer.
          const parentIndex = state.allNodes.findIndex(
            (n) => n.nodeId === parent
          );
          const parentFolder = state.allNodes[parentIndex];

          if (parentFolder.nodeType === 'folder') {
            const subFileIndex = parentFolder.files?.findIndex(
              (n) => n.nodeId === nodeId
            );

            file = parentFolder.files[subFileIndex];
          }
        }

        if (file.nodeType === 'file') {
          file[cellType] = newContent;
        }

        return state;
      }

      case ActionType.DELETE_FILE:
        state.allNodes = state.allNodes.filter(
          (n) => n.nodeId !== action.payload.nodeId
        );

        const isSelectedFile =
          state.selectedFileInfoToView.nodeId === action.payload.nodeId;

        if (isSelectedFile) {
          state.selectedFileInfoToView = null;
        }

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
          code: '',
          text: '',
          parent: action.payload.folderNodeId,
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
          folderNode.files = folderNode.files.filter(
            (n) => n.nodeId !== action.payload.fileNodeId
          );
        }

        const isSelectedFile =
          state.selectedFileInfoToView?.nodeId === action.payload.fileNodeId;

        if (isSelectedFile) {
          state.selectedFileInfoToView = null;
        }

        return state;
      }

      case ActionType.CREATE_NODE_ATTEMPT: {
        const { nodeType, status, parentNodeId } = action.payload;

        state.attemptToCreate = {
          status,
          nodeType,
          parentNodeId,
        };
        return state;
      }

      case ActionType.SELECT_FILE_INFO_FOR_VIEW: {
        let nodeSelectedIndex: number;
        let parentIndex: number;

        if (action.payload.parent === 'workspace') {
          nodeSelectedIndex = state.allNodes.findIndex(
            (n) => n.nodeId === action.payload.nodeId
          );
        }

        // this means it is a subfile.
        if (action.payload.parent !== 'workspace') {
          const parentFolder = state.allNodes.find(
            (n) => n.nodeId === action.payload.parent
          );
          parentIndex = state.allNodes.findIndex(
            (n) => n.nodeId === action.payload.parent
          );

          // type guard
          if (parentFolder.nodeType === 'folder') {
            nodeSelectedIndex = parentFolder.files.findIndex(
              (n) => n.nodeId === action.payload.nodeId
            );
          }
        }

        state.selectedFileInfoToView = {
          nodeId: action.payload.nodeId,
          parent: action.payload.parent,
          index: parentIndex,
          subIndex: nodeSelectedIndex,
        };

        // Because of immutability feature of immer, i can't referance a node in all nodes, so this code doesn't work. I need to work around it
        // ******
        // const selectedFile = state.allNodes.find(
        //   (node) => node.nodeId === action.payload.nodeId
        // );

        // // type guard
        // if (selectedFile.nodeType === 'file') {
        //   state.selectedFileToView = selectedFile;
        // }

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
