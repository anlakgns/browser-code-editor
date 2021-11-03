import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './state';
import Sidebar from './components/sidebar';
import MiniSidebar from './components/miniSidebar';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Main from './components/mainSections';

const MainGrid = styled(Grid)(({ theme }) => ({
  background: theme.palette.custom.dark3,
  minHeight: '100vh',
  width: '100vw',
}));

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainGrid container direction="row">
          <MiniSidebar />
          <Sidebar />
          <Main />
        </MainGrid>
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
