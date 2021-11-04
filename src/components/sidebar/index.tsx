import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import NodeList from './nodeList';
import useTypedSelector from '../../hooks/use-typed-selector';
import NodeAddForm from './nodeAddForm';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark2,
  width: '18rem',
  minWidth: "15rem",
  resize: 'horizontal',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
}));

const HeadlineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0rem 1rem',
  gap: '0.5rem',
  marginTop: '1.5rem',
  marginBottom: '1rem',
}));

const Headline = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.orange,
  fontWeight: 'bold',
  paddingTop: '1.5rem 0rem',
}));

const Sidebar: React.FC = () => {
  const nodeAttempt = useTypedSelector((state) => state.nodes.attemptToCreate);

  return (
    <MainGrid>
      <HeadlineGrid>
        <Headline variant="subtitle2">Workspace</Headline>
      </HeadlineGrid>
      {nodeAttempt.status === true &&
      nodeAttempt.parentNodeId === 'workspace' ? (
        <NodeAddForm parentNodeId="workspace" />
      ) : (
        ''
      )}
      <NodeList />
    </MainGrid>
  );
};

export default Sidebar;
