import { ActionType } from './actionTypes';
import { NodeTypes, CellTypes } from '../cellNodeTypes';

// Action Creator : File
export interface CreateFileAction {
  type: ActionType.CREATE_FILE;
  payload: {
    name: string;
  };
}

export interface DeleteFileAction {
  type: ActionType.DELETE_FILE;
  payload: {
    nodeId: string;
  };
}
export interface UpdateFileAction {
  type: ActionType.UPDATE_FILE;
  payload: {
    nodeId: string;
    cellType: CellTypes;
    newContent: string;
  };
}

// Action Creator : Folder
export interface CreateFolderAction {
  type: ActionType.CREATE_FOLDER;
  payload: {
    name: string;
  };
}

export interface DeleteFolderAction {
  type: ActionType.DELETE_FOLDER;
  payload: {
    nodeId: string;
  };
}

export interface CreateFileInFolderAction {
  type: ActionType.CREATE_FILE_IN_FOLDER;
  payload: {
    folderNodeId: string;
    name: string;
  };
}

export interface DeleteFileInFolderAction {
  type: ActionType.DELETE_FILE_IN_FOLDER;
  payload: {
    folderNodeId: string;
    fileNodeId: string;
  };
}

export interface CreationNoteAttempt {
  type: ActionType.CREATE_NODE_ATTEMPT;
  payload: {
    nodeType: NodeTypes;
    status: boolean;
    parentNodeId: string;
  };
}

export interface SelectFileForView {
  type: ActionType.SELECT_FILE_FOR_VIEW;
  payload: {
    nodeId: string;
  };
}

// Action Creator : Bundle
export interface BundleStartAction {
  type: ActionType.BUNDLE_START;
  payload: {
    nodeId: string;
  };
}

export interface BundleCompleteAction {
  type: ActionType.BUNDLE_COMPLETE;
  payload: {
    nodeId: string;
    bundle: string;
    err: string;
  };
}

export type Action =
  | CreateFileAction
  | UpdateFileAction
  | DeleteFileAction
  | CreateFolderAction
  | CreationNoteAttempt
  | DeleteFolderAction
  | CreateFileInFolderAction
  | DeleteFileInFolderAction
  | BundleStartAction
  | BundleCompleteAction
  | SelectFileForView;
