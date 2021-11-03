import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import NodeList from './nodeList';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark2,
  width: '18rem',
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
  color: '#dddddd',
  fontWeight: 'bold',
  paddingTop: '1.5rem 0rem',
}));

const Sidebar: React.FC = () => {
  return (
    <MainGrid>
      <HeadlineGrid>
        <Headline variant="subtitle2">Workspace</Headline>
      </HeadlineGrid>
      <NodeList />
    </MainGrid>
  );
};

export default Sidebar;
