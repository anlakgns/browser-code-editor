import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark1,
  width: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0rem',
}));

const IconFolder = styled(CreateNewFolderOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.8rem',
}));

const IconMenu = styled(MenuOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.4rem',
}));

const IconFile = styled(InsertDriveFileOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.8rem',
}));

const MiniSidebar: React.FC = () => {
  return (
    <MainGrid>
      <IconButton>
        <IconMenu />
      </IconButton>
      <IconButton>
        <IconFolder />
      </IconButton>
      <IconButton>
        <IconFile />
      </IconButton>
    </MainGrid>
  );
};

export default MiniSidebar;
