import { createTheme, PaletteOptions } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#dd2cbb' ,
    },
    secondary: {
      main: '#00b',
    },
  } as PaletteOptions
});
