import { createTheme, PaletteOptions } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#dd2c00',
    },
    secondary: {
      main: '#00b0ff',
    },
  } as PaletteOptions
});
