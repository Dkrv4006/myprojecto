import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ColoModeContext } from './theme/theme1';

import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';
import { Box, Icon, IconButton } from '@mui/material';
import Btn from './theme/test';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  const { mode, toggleColorMode } = useContext(ColoModeContext);
  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Layout/>
       
      
      {/* <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Icon>star</Icon> : <Icon>add_circle</Icon>}
      </IconButton>
        <p>Conteúdo da aplicação</p>
      
      <Btn/> */}


    </ThemeProvider>
  );
};

export default App;



