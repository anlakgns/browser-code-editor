import { Dispatch } from 'redux';
import { ActionType } from './actionTypes';
import { CellTypes, NodeTypes } from '../cellNodeTypes';
import {
  CreateFileAction,
  UpdateFileAction,
  DeleteFileAction,
  CreateFolderAction,
  DeleteFolderAction,
  CreateFileInFolderAction,
  DeleteFileInFolderAction,
  CreationNoteAttempt,
  SelectFileForView,
  Action,
} from './actionCreatorTypes';
import bundle from '../../bundler';

export const createFile = (name: string): CreateFileAction => {
  return {
    type: ActionType.CREATE_FILE,
    payload: {
      name,
    },
  };
};

export const updateFile = (
  nodeId: string,
  cellType: CellTypes,
  newContent: string
): UpdateFileAction => {
  return {
    type: ActionType.UPDATE_FILE,
    payload: {
      nodeId,
      cellType,
      newContent,
    },
  };
};

export const deleteFile = (nodeId: string): DeleteFileAction => {
  return {
    type: ActionType.DELETE_FILE,
    payload: {
      nodeId,
    },
  };
};

export const createFolder = (name: string): CreateFolderAction => {
  return {
    type: ActionType.CREATE_FOLDER,
    payload: {
      name,
    },
  };
};

export const deleteFolder = (nodeId: string): DeleteFolderAction => {
  return {
    type: ActionType.DELETE_FOLDER,
    payload: {
      nodeId,
    },
  };
};

export const createFileInFolder = (
  folderNodeId: string,
  name: string
): CreateFileInFolderAction => {
  return {
    type: ActionType.CREATE_FILE_IN_FOLDER,
    payload: {
      folderNodeId,
      name,
    },
  };
};

export const deleteFileInFolder = (
  folderNodeId: string,
  fileNodeId: string
): DeleteFileInFolderAction => {
  return {
    type: ActionType.DELETE_FILE_IN_FOLDER,
    payload: {
      folderNodeId,
      fileNodeId,
    },
  };
};

export const createNodeAttempt = (
  nodeType: NodeTypes,
  status: boolean,
  parentNodeId: string
): CreationNoteAttempt => {
  return {
    type: ActionType.CREATE_NODE_ATTEMPT,
    payload: {
      nodeType,
      status,
      parentNodeId,
    },
  };
};

export const selectFileForView = (nodeId: string): SelectFileForView => {
  return {
    type: ActionType.SELECT_FILE_FOR_VIEW,
    payload: {
      nodeId,
    },
  };
};

export const createBundle = (nodeId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
      payload: {
        nodeId,
      },
    });

    const result = await bundle(input);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: {
        nodeId,
        bundle: result.code,
        err: result.err,
      },
    });
  };
};
