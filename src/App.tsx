import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ColoModeContext } from './theme';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { Box, Icon, IconButton } from '@mui/material';
import Btn from './test';

const App: React.FC = () => {
  const { mode, toggleColorMode } = useContext(ColoModeContext);
  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{bgcolor: theme.palette.primary.main}} >
      
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Icon>star</Icon> : <Icon>add_circle</Icon>}
      </IconButton>
        <p>Conteúdo da aplicação</p>
      </Box>
      <Btn/>
    </ThemeProvider>
  );
};

export default App;



