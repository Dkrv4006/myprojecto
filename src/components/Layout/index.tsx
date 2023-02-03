
import { Box, Card, colors, Grid, IconButton, useTheme} from "@mui/material"
import { useContext } from 'react'
import { ColoModeContext } from '../../theme/theme1'

export const Layout: React.FC = () => {

  const theme = useTheme()
  const { toggleColorMode } = useContext(ColoModeContext)


  return (
   
      <Grid container >
        <Grid  xs={2} >
          
          <Box 
          height={"100vh"}
          bgcolor={theme.palette.primary.main}
          >
            xs=4
            xs=4
            xs=4
            xs=4
            xs=4
          </Box>
        </Grid>
        <Grid  xs={10}>
          <Box 
          height={"100vh"}
          bgcolor={'blue'}
          ><IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          'daniel'
        </IconButton>
          <p>Conteúdo da aplicação</p></Box>
          
        </Grid>
       
      </Grid>
   
  )
}