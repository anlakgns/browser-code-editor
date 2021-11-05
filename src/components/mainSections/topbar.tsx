import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const MainGrid = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  height: '1.5rem',
}));
const CodeTab = styled(Grid)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  fontSize: '0.9rem',
  fontWeight: 'bold',
}));
const PreviewTab = styled(Grid)(({ theme }) => ({
  flex: 1,
  color: theme.palette.custom.dark2,
  opacity: 0.9,
  fontWeight: 'bold',
  fontSize: '0.9rem',
  display: 'flex',
  justifyContent: 'center',
}));

interface TopbarProps {
  fileName: string;
  viewState: ViewStateEnum;
  setViewState: (arg: ViewStateEnum) => void;
}

enum ViewStateEnum {
  'code',
  'preview',
  'default',
}

const Topbar: React.FC<TopbarProps> = ({
  fileName,
  viewState,
  setViewState,
}) => {
  const theme = useTheme();

  const codeTabHandler = () => {
    setViewState(ViewStateEnum.code);
  };

  const previewTabHandler = () => {
    setViewState(ViewStateEnum.preview);
  };

  return (
    <MainGrid>
      <CodeTab
        onClick={codeTabHandler}
        sx={{
          backgroundColor:
            viewState === ViewStateEnum.code
              ? theme.palette.custom.orange
              : theme.palette.custom.dark2,
          color:
            viewState === ViewStateEnum.code
              ? theme.palette.custom.dark2
              : theme.palette.custom.orange,
        }}
      >
        {fileName}
      </CodeTab>
      <PreviewTab
        sx={{
          backgroundColor:
            viewState === ViewStateEnum.preview
              ? theme.palette.custom.orange
              : theme.palette.custom.dark2,
          color:
            viewState === ViewStateEnum.preview
              ? theme.palette.custom.dark2
              : theme.palette.custom.orange,
        }}
        onClick={previewTabHandler}
      >
        preview
      </PreviewTab>
    </MainGrid>
  );
};

export default Topbar;
