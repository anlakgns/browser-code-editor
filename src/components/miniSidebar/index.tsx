import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import IconButton from '@mui/material/IconButton';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import {useActions} from '../../hooks/use-actions'

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark1,
  width: '3.5rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 0rem',
}));

const IconFolderAdd = styled(CreateNewFolderOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.orange,
  fontSize: '1.8rem',
}));

const IconMenu = styled(MenuOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.orange,
  fontSize: '1.4rem',
}));

const IconFileAdd = styled(InsertDriveFileOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.orange,
  fontSize: '1.8rem',
}));

const MiniSidebar: React.FC = () => {
  const {createNodeAttempt} = useActions();

  const folderHandler = () => {
    createNodeAttempt("folder", true, "workspace")
  }

  const fileHandler = () => {
    createNodeAttempt("file", true, "workspace")
  }


  return (
    <MainGrid>
      <IconButton>
        <IconMenu />
      </IconButton>
      <IconButton onClick={folderHandler}>
        <IconFolderAdd  />
      </IconButton>
      <IconButton onClick={fileHandler}>
        <IconFileAdd />
      </IconButton>
    </MainGrid>
  );
};

export default MiniSidebar;
