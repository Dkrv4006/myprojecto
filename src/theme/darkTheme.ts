import { Color } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { createTheme, Palette, PaletteColor, PaletteOptions } from '@mui/material/styles';

type PaletteType = PaletteOptions
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutralShade: {main: String, dark: String};
  }

  interface PaletteOptions {
    neutralShade?: {main: String,
    dark: String;
  }
}

}
export const darkTheme  = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1B2028' ,
      ma: '#1B2028' ,
    },
    secondary: {
      main: '#3F434E',
    },
    contrast: {
        main: yellow,
    },
  } as PaletteOptions
})
