import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import useTypedSelector from '../../hooks/use-typed-selector';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useActions } from '../../hooks/use-actions';

const MainGrid = styled(Grid)(({ theme }) => ({}));

const LineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0.1rem 1.5rem',
  justifyContent: 'space-between',
}));

const FolderIconStyled = styled(FolderIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.2rem',
  marginRight: '0.4rem',
}));

const FileIconStyled = styled(InsertDriveFileOutlinedIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.2rem',
  marginRight: '0.4rem',
  marginLeft: '1.1rem',
}));

interface NodeAddFormProps {
  parentNodeId: string | 'workspace' | null;
}

const NodeAddForm: React.FC<NodeAddFormProps> = ({ parentNodeId }) => {
  const nodeAttempt = useTypedSelector((state) => state.nodes.attemptToCreate);
  const [nodeNameInput, setNodeNameInput] = useState<string>();
  const { createFolder, createFile, createNodeAttempt, createFileInFolder } = useActions();

  const formOnBlurHandler = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nodeNameInput === '') {
      createNodeAttempt(null, false, null);
      return;
    }

    if (nodeAttempt.nodeType === 'folder') {
      createFolder(nodeNameInput);
      createNodeAttempt(null, false, null);
      setNodeNameInput('');
    }

    if (nodeAttempt.nodeType === 'file') {
      parentNodeId === 'workspace'
        ? createFile(nodeNameInput)
        : createFileInFolder(parentNodeId, nodeNameInput);
      createNodeAttempt(null, false, null);
      setNodeNameInput('');
    }
  };

  return (
    <MainGrid>
      <LineGrid>
        {nodeAttempt.nodeType === 'folder' ? (
          <FolderIconStyled />
        ) : (
          <FileIconStyled />
        )}
        <form onBlur={formOnBlurHandler}>
          <TextField
            value={nodeNameInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setNodeNameInput(e.target.value)
            }
            autoFocus={true}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </form>
      </LineGrid>
    </MainGrid>
  );
};

export default NodeAddForm;
