import React, { useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ColoModeContext } from './theme/theme';

import { darkTheme } from './theme/darkTheme';
import { lightTheme } from './theme/lightTheme';

import { Layout } from './components/Layout';

const App: React.FC = () => {
  const { mode } = useContext(ColoModeContext);
  const theme = createTheme(mode === 'light' ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <Layout/>
    </ThemeProvider>
  );
};

export default App;



