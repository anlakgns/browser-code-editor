import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Folder } from '../../state/cellNodeTypes';

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

const RightLineGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.4rem',
}));

const FolderIconStyled = styled(FolderIcon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: '1.2rem',
  marginRight: '0.4rem',
}));

const IconArrowDown = styled(KeyboardArrowDownIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  padding: 0,
  margin: 0,
  fontSize: '1.2rem',
}));

const IconButtonArrow = styled(IconButton)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.custom.textGrey,
}));

const NodeName = styled(Typography)(({ theme }) => ({
  color: '#dddddd',
  fontWeight: 'bold',
  fontSize: '0.8rem',
}));

const IconArrow = styled(KeyboardArrowRightOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  padding: 0,
  margin: 0,
  fontSize: '1.2rem',
}));

const IconButtonAddFile = styled(IconButton)(({ theme }) => ({
  padding: 0,
  margin: 0,
  color: theme.palette.custom.textGrey,
}));

const IconFileAdd = styled(InsertDriveFileOutlinedIcon)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1.2rem',
}));

interface NodeFolderProps {
  node: Folder;
  index: number;
}

const NodeFolder: React.FC<NodeFolderProps> = ({ node, index }) => {
  const [folderArrowState, setFolderArrowState] = useState<number | null>(null);

  const arrowIconHandler = (index: number) => {
    setFolderArrowState(index);
    if (folderArrowState === index) {
      setFolderArrowState(null);
    }
  };

  return (
    <MainGrid>
      <LineGrid key={node.nodeId}>
        <LeftLineGrid>
          <IconButtonArrow onClick={() => arrowIconHandler(index)}>
            {folderArrowState === index ? <IconArrowDown /> : <IconArrow />}
          </IconButtonArrow>
          <FolderIconStyled />
          <NodeName>{node.name}</NodeName>
        </LeftLineGrid>

        <RightLineGrid>
          <IconButtonAddFile>
            <IconFileAdd />
          </IconButtonAddFile>
        </RightLineGrid>
      </LineGrid>
    </MainGrid>
  );
};

export default NodeFolder;
