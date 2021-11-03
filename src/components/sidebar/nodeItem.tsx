import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { File, Folder } from '../../state/cellNodeTypes';
import NodeFolder from './nodeFolder';
import NodeFile from './nodeFile';

const MainGrid = styled(Grid)(({ theme }) => ({}));

interface NodeItemProps {
  node: File | Folder;
  index: number;
}

const NodeItem: React.FC<NodeItemProps> = ({ node, index }) => {
  return (
    <MainGrid>
      {node.nodeType === 'folder' ? (
        <NodeFolder node={node} index={index} />
      ) : (
        <NodeFile node={node} />
      )}
    </MainGrid>
  );
};

export default NodeItem;
