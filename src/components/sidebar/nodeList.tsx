import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import useTypedSelector from '../../hooks/use-typed-selector';
import NodeItem from './nodeItem';
import { File, Folder } from '../../state/cellNodeTypes';

const MainGrid = styled(Grid)(({ theme }) => ({}));

const NodeList: React.FC = () => {
  const nodeListArray = useTypedSelector((state) => state.nodes.allNodes);

  return (
    <MainGrid>
      {nodeListArray.map((node: File | Folder, index: number) => {
        return <NodeItem key={node.nodeId} node={node} index={index} />;
      })}
    </MainGrid>
  );
};

export default NodeList;
