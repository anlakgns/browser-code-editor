export enum ActionType {
  CREATE_NODE_ATTEMPT = 'attempt_to_create_node',
  SELECT_FILE_INFO_FOR_VIEW = 'select_file_info_for_view',

  // file actions
  DELETE_FILE = 'delete_file',
  CREATE_FILE = 'add_file',
  UPDATE_FILE = 'update_file',

  // folder actions
  DELETE_FOLDER = 'delete_folder',
  CREATE_FOLDER = 'create_folder',
  CREATE_FILE_IN_FOLDER = 'add_file_in_folder',
  DELETE_FILE_IN_FOLDER = 'delete_file_in_folder',
  // move actions are missed. later they will be handled.

  // bundle actions
  BUNDLE_START = 'bundle_start',
  BUNDLE_COMPLETE = 'bundle_complete',
}
