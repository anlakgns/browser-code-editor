import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import CodeCell from './code/code-cell';
import useTypedSelector from '../../hooks/use-typed-selector';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
}));

const WelcomeGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  color: "orange"
}));

const Main: React.FC = () => {
  const selectedFile = useTypedSelector(
    (state) => state.nodes.selectedFileToView
  );

  console.log(selectedFile)

  return (
    <MainGrid>
      {selectedFile ? (
        <CodeCell file={selectedFile} />
      ) : (
        <WelcomeGrid>Welcome to Nix Browser Editor</WelcomeGrid>
      )}
    </MainGrid>
  );
};

export default Main;
