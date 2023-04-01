import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2'
    },
    secondary: {
      main: '#dc004e'
    },
    background: {
      default: '#F2F2F2'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#BDBDBD',
    }
  }
});
