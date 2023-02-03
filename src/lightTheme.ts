import { createTheme, PaletteOptions } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  } as PaletteOptions
});
