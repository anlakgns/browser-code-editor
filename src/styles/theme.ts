import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: {
      [color: string]: string;
    };
  }

  export interface Palette {
    custom: {
      [color: string]: string;
    };
  }
}

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#242424',
    },
    secondary: {
      main: '#007fd4',
    },
    custom: {
      dark1: '#333333',
      dark2: '#242424',
      dark3: '#1A1A1A',
      textGrey: '#aaaaaa',
      textWhite: '#ffffff',
      editorColor: "#202124",
      orange: "#fca500",
      orangeLight: "#33fca500"
    },
  },
  
});

theme = responsiveFontSizes(theme);

export default theme;
