import React from 'react'
import { Box} from '@chakra-ui/react'
import Slider from './Slider'
import Collection from './Collection'
import Play_Together from './play_Together'
import Solutions from './Solutions'
import Productivity from './Productivity'
const First_Product_Slier = () => {
  return (
 <Box >
<Box style={{display:"flex",marginTop:"20px" } }>
    <Box style={{padding:"30px"}}><Slider/></Box>
    <Box>
        <Box><Collection/></Box>
        <Box><Solutions/></Box>
    </Box>
    <Box style={{marginLeft:"20px"}}>
        <Box><Productivity/></Box>
        <Box><Play_Together/></Box>
    </Box>
</Box>

 </Box>
  )
}

export default First_Product_Slier
