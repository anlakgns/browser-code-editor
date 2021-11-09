import { Dispatch } from 'redux';
import { ActionType } from './actionTypes';
import { CellTypes, NodeTypes, FileParents, File, Folder } from '../cellNodeTypes';
import {
  CreateFileAction,
  UpdateFileAction,
  DeleteFileAction,
  CreateFolderAction,
  DeleteFolderAction,
  CreateFileInFolderAction,
  DeleteFileInFolderAction,
  CreationNoteAttempt,
  SelectFileInfoForView,
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
  newContent: string,
  parent: FileParents
): UpdateFileAction => {
  return {
    type: ActionType.UPDATE_FILE,
    payload: {
      nodeId,
      cellType,
      newContent,
      parent,
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

export const selectFileForView = (
  nodeId: string,
  parent: FileParents
): SelectFileInfoForView => {
  return {
    type: ActionType.SELECT_FILE_INFO_FOR_VIEW,
    payload: {
      nodeId,
      parent,
    },
  };
};

export const createBundle = (entry: string, allNodes: (File | Folder)[]) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BUNDLE_START,
    });

    const result = await bundle(entry, allNodes);

    dispatch({
      type: ActionType.BUNDLE_COMPLETE,
      payload: {
        bundle: result.code,
        err: result.err,
      },
    });
  };
};
