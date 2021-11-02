import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import IconButton from '@mui/material/IconButton';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark2,
  width: '18rem',
  resize: 'horizontal',
  overflow: 'auto',
}));

const LineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}));

const Headline = styled(Typography)(({ theme }) => ({
  color: '#dddddd',
  fontWeight: 'bold',
  padding: '1.5rem 0rem',
}));

const IconArrow = styled(KeyboardArrowRightOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
}));

const Sidebar: React.FC = () => {
  return (
    <MainGrid>
      <LineGrid>
        <IconButton>
          <IconArrow />
        </IconButton>
        <Headline variant="subtitle2">Default Workspace</Headline>
      </LineGrid>
    </MainGrid>
  );
};

export default Sidebar;
