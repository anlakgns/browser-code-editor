export type CellTypes = 'code' | 'text';
export type NodeTypes = 'file' | 'folder';
export type FileParents = 'workspace' | FolderId;

type FolderId = string;

export interface File {
  name: string;
  nodeId: string;
  nodeType: 'file';
  code: string;
  text: string;
  parent: FileParents;
}

export interface Folder {
  name: string;
  nodeId: string;
  nodeType: 'folder';
  files: File[] | null;
}
