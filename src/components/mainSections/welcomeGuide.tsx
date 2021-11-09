import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const MainGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3rem',
}));

const Headline = styled(Typography)(({ theme }) => ({
  color: 'orange',
  fontSize: '2rem',
}));

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1rem',
  marginTop: '2rem',
  width: '70%',
}));

const List = styled('ul')(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1rem',
  marginTop: '1rem',
  width: '70%',
}));

const ListItem = styled('li')(({ theme }) => ({
  color: theme.palette.custom.textGrey,
  fontSize: '1rem',
  marginTop: '1rem',
}));

const WelcomeGuide: React.FC = () => {
  return (
    <MainGrid>
      <Headline>Welcome to Nix Browser Editor</Headline>
      <Text>
        Nix editor is a react browser editor. Nix editor is not stable yet
        that's why we would like to follow the guide we provide.
      </Text>
      <List>
        <ListItem>
          Please do not delete default folders which are "main" and "public".
          There are entry points for bundler.
        </ListItem>
        <ListItem>
          Please starts with "browser" to import a local files. such as "import
          Navbar from "browser/src/navbar"
        </ListItem>
        <ListItem>
          Please do not use relative path for local file. Use always absolute
          path.
        </ListItem>
        <ListItem>
          Nested folder structure is not supported yet. You can only have files
          in your folders.
        </ListItem>
        <ListItem>
          Please use inline styles for components. Individual css files are not
          supported yet. However you can import bulma or tailwind libraries and
          can use with classname attributes.
        </ListItem>
        <ListItem>
          The html file in public folder is your default preview html file. It
          is not recommended to change it unless you are aware of exactly how
          the editor works.
        </ListItem>
        <ListItem>
          You can't rename folders or files. You need to delete and recreate
          them. Also you can't move them as well.
        </ListItem>
      </List>
    </MainGrid>
  );
};

export default WelcomeGuide;
