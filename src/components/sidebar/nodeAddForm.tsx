import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useTypedSelector from '../../hooks/use-typed-selector';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { useActions } from '../../hooks/use-actions';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1.2rem',
  marginBottom: '1rem',
}));

const LineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0.1rem 1.5rem',
  justifyContent: 'space-between',
  width: "100%"
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
}));

const InputStyled = styled('input')(({ theme }) => ({
  lineHeight: '0.8rem',
  outline: 'none',
  borderColor: theme.palette.custom.orange,
  backgroundColor: 'transparent',
  borderRadius: '0.2rem',
  color: theme.palette.custom.orange,
  width: "100%"
}));

const FormStyled = styled('form')(({ theme }) => ({
  width: "100%"
}));

interface NodeAddFormProps {
  parentNodeId: string | 'workspace' | null;
}

const NodeAddForm: React.FC<NodeAddFormProps> = ({ parentNodeId }) => {
  const nodeAttempt = useTypedSelector((state) => state.nodes.attemptToCreate);
  const [nodeNameInput, setNodeNameInput] = useState<string>();
  const { createFolder, createFile, createNodeAttempt, createFileInFolder } =
    useActions();

  const formHandler = (
    e: React.FocusEvent<HTMLFormElement> | React.KeyboardEvent<HTMLFormElement>
  ) => {
    if ('charCode' in e && e.key !== 'Enter') {
      return;
    }

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
        <FormStyled onBlur={formHandler} onKeyPress={formHandler}>
          <InputStyled
            value={nodeNameInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setNodeNameInput(e.target.value)
            }
            autoFocus
            id="standard-basic"
          />
        </FormStyled>
      </LineGrid>
    </MainGrid>
  );
};

export default NodeAddForm;
