import { grey, yellow } from '@mui/material/colors';
import { createTheme, PaletteOptions } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#F3F8FF' ,
      contrastText: grey,
      
    },
    secondary: {
      main: '#ffffff',
     
    },

  } as PaletteOptions
});
