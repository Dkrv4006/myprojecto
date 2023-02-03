import React, { useContext } from 'react';
import { ColoModeContext } from './theme';

import { Box } from '@mui/material';

const Btn: React.FC = () => {
  const {  toggleColorMode } = useContext(ColoModeContext);

  return (

      <Box sx={{bgcolor:'red'}} >
      
      
      </Box>

  );
};

export default Btn;
