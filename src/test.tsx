import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ColoModeContext } from './theme';

import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';
import { Box, Icon, IconButton } from '@mui/material';

const Btn: React.FC = () => {
  const {  toggleColorMode } = useContext(ColoModeContext);

  return (

      <Box sx={{bgcolor:'red'}} >
      
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        'daniel'
      </IconButton>
        <p>Conteúdo da aplicação</p>
      </Box>

  );
};

export default Btn;
