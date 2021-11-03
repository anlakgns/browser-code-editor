import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import FileArea from './file'


const MainGrid = styled(Grid)(({ theme }) => ({}));

const Main: React.FC = () => {

  return (
    <MainGrid>
      <FileArea />
    </MainGrid>
  );
};

export default Main;
