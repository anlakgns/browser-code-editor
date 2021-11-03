import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import { File } from '../../state/cellNodeTypes';

const MainGrid = styled(Grid)(({ theme }) => ({}));

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

interface NodeFileProps {
  node: File;
}

const NodeFile: React.FC<NodeFileProps> = ({ node }) => {
  return (
    <MainGrid>
      <LineGrid key={node.nodeId}>
        <LeftLineGrid>
          <FileIconStyled />
          <NodeName>{node.name}</NodeName>
        </LeftLineGrid>
      </LineGrid>
    </MainGrid>
  );
};

export default NodeFile;
