export type CellTypes = 'code' | 'text';
export type NodeTypes = 'file' | 'folder';

export interface Cell {
  type: CellTypes;
  content: string;
}

export interface File {
  name: string
  nodeId: string;
  nodeType: 'file';
  code: Cell;
  text: Cell;
}

export interface Folder {
  name: string
  nodeId: string;
  nodeType: 'folder';
  files: File[] | null;
}
