import { Box } from "@mui/material"
import  Icon  from "@mui/material/Icon"
import { data } from './Data'
import { useTheme } from "@mui/material"
import Tab from '@mui/material/Tab';

export const Sidebar = () => {

 const theme = useTheme()

  return (
    <Box 
    sx={{
      height: '100%',
      padding:2,
      //------------- 
      display: "flex",
      // justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column', }}>

        <Box width="100%"  height="15%">
          DANIEL
        </Box>
      {data.map(item => {
        return(
          <Box 
          sx={{
            width: '100%',
            
          }}
          color={theme.palette.primary.contrastText}
          >
          
          <Box  
          sx={{ 
            width: '100%',
            textAlign: 'center',
            //-----------
            display:'flex', 
            alignItems: 'center',
            justifyContent:'center',
            }}><span><item.icon  /></span>{item.name}</Box>
          </Box>
        )
      })}
    </Box>
  )
}