import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Folder } from '../../state/cellNodeTypes';
import NodeFile from './nodeFile';
import NodeAddForm from './nodeAddForm';
import useTypedSelector from '../../hooks/use-typed-selector';
import { useActions } from '../../hooks/use-actions';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const MainGrid = styled(Grid)(({ theme }) => ({}));
const SubFilesGrid = styled(Grid)(({ theme }) => ({
  marginLeft: '1rem',
}));
const LineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0.1rem 1.5rem',
  justifyContent: 'space-between',
}));
const LeftLineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));
const RightLineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.4rem',
}));
const FolderIconStyled = styled(FolderIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.2rem',
  marginRight: '0.4rem',
}));
const IconArrowDown = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  padding: 0,
  margin: 0,
  fontSize: '1.2rem',
}));
const IconButtonArrow = styled(IconButton)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.custom.textGrey,
}));
const NodeName = styled(Typography)(({ theme }) => ({
  color: '#dddddd',
  fontWeight: 'bold',
  fontSize: '0.8rem',
}));
const IconArrow = styled(KeyboardArrowRightOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  padding: 0,
  margin: 0,
  fontSize: '1.2rem',
}));
const IconButtonAddFile = styled(IconButton)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.custom.textGrey,
}));
const IconButtonDeleteFolder = styled(IconButton)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.custom.textGrey,
}));
const IconFolderDelete = styled(HighlightOffIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.2rem',
}));
const IconFileAdd = styled(InsertDriveFileOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.2rem',
}));

interface NodeFolderProps {
  node: Folder;
}

const NodeFolder: React.FC<NodeFolderProps> = ({ node }) => {
  const [isFolderOpen, setIsFolderOpen] = useState<Boolean>(false);
  const nodeAttempt = useTypedSelector((state) => state.nodes.attemptToCreate);
  const { createNodeAttempt, deleteFolder } = useActions();

  const subFiles = node.files;

  const folderOpenHandler = () => {
    setIsFolderOpen(!isFolderOpen);
  };

  const addFileInFolderHandler = () => {
    createNodeAttempt('file', true, node.nodeId);
    setIsFolderOpen(true);
  };

  const deleteFolderHandler = () => {
    deleteFolder(node.nodeId);
  };

  return (
    <MainGrid>
      <LineGrid key={node.nodeId}>
        <LeftLineGrid>
          <IconButtonArrow onClick={folderOpenHandler}>
            {isFolderOpen ? <IconArrowDown /> : <IconArrow />}
          </IconButtonArrow>
          <FolderIconStyled />
          <NodeName>{node.name}</NodeName>
        </LeftLineGrid>

        <RightLineGrid>
          <IconButtonAddFile onClick={addFileInFolderHandler}>
            <IconFileAdd />
          </IconButtonAddFile>
          <IconButtonDeleteFolder onClick={deleteFolderHandler}>
            <IconFolderDelete />
          </IconButtonDeleteFolder>
        </RightLineGrid>
      </LineGrid>
      {nodeAttempt.status === true &&
      nodeAttempt.parentNodeId === node.nodeId ? (
        <NodeAddForm parentNodeId={node.nodeId} />
      ) : (
        ''
      )}
      <SubFilesGrid>
        {isFolderOpen ? subFiles.map((file) => <NodeFile node={file} />) : ''}
      </SubFilesGrid>
    </MainGrid>
  );
};

export default NodeFolder;
