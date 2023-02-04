import { Box } from "@mui/material"
import  Icon  from "@mui/material/Icon"
import { data } from './Data'
import { useTheme } from "@mui/material"


export const Sidebar: React.FC = () => {

 const theme = useTheme()

  return (
    <Box sx={{padding:3}}>
      {data.map(item => {
        return(
          <Box color={theme.palette.primary.contrast}>
          <item.icon  />
          <div>{item.name}</div>
          </Box>
        )
      })}
    </Box>
  )
}