import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { File } from '../../state/cellNodeTypes';
import { useActions } from '../../hooks/use-actions';
import useTypedSelector from '../../hooks/use-typed-selector';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import IconButton from '@mui/material/IconButton';

const MainGrid = styled(Grid)(({ theme }) => ({
  cursor: 'pointer',
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

const FileIconStyled = styled(InsertDriveFileOutlinedIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.2rem',
  marginRight: '0.4rem',
  marginLeft: '1.1rem',
}));

const NodeName = styled(Typography)(({ theme }) => ({
  color: '#dddddd',
  fontWeight: 'bold',
  fontSize: '0.8rem',
}));

const RightLineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.4rem',
}));

const IconButtonDeleteFile = styled(IconButton)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.custom.textGrey,
}));
const IconFileDelete = styled(HighlightOffIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.2rem',
}));

interface NodeFileProps {
  node: File;
}

const NodeFile: React.FC<NodeFileProps> = ({ node }) => {
  const { selectFileForView, deleteFile, deleteFileInFolder } = useActions();
  const selectedFileInfo = useTypedSelector(
    (state) => state.nodes.selectedFileInfoToView
  );

  const selectFileToViewHandler = () => {
    selectFileForView(node.nodeId, node.parent);
  };

  const deleteFileHandler = () => {
    if (node.parent !== 'workspace') {
      deleteFileInFolder(node.parent, node.nodeId);
    }
    if (node.parent === 'workspace') {
      deleteFile(node.nodeId);
    }
  };

  return (
    <MainGrid
      sx={{
        background:
          node.nodeId === selectedFileInfo?.nodeId
            ? 'linear-gradient(to right, transparent 10%, orange )'
            : 'transparent',
      }}
    >
      <LineGrid key={node.nodeId}>
        <LeftLineGrid onClick={selectFileToViewHandler}>
          <FileIconStyled />
          <NodeName>{node.name}</NodeName>
        </LeftLineGrid>
        <RightLineGrid>
          <IconButtonDeleteFile onClick={deleteFileHandler}>
            <IconFileDelete />
          </IconButtonDeleteFile>
        </RightLineGrid>
      </LineGrid>
    </MainGrid>
  );
};

export default NodeFile;
