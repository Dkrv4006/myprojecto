import { yellow } from '@mui/material/colors';
import { createTheme, PaletteOptions } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#F3F8FF' ,
      ma: '#F3F8FF' ,
      
    },
    secondary: {
      main: '#ffffff',
     
    },
    contrast: {
      main: yellow,
  },
  } as PaletteOptions
});
