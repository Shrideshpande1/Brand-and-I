import React from 'react'
import { Box} from '@chakra-ui/react'
import First_Product_Slier from '../Components/First_Product_Slier'
import Product from '../../BackEnd/Product'
import Footer from '../Components/Footer'
import Slider1 from '../Components/Popular_Brands'
import Best_Seller from '../../BackEnd/Best_Seller'
import Collection from '../Components/Collection'
const Home = () => {
  return (
   <Box>

<First_Product_Slier/>
{/* <Collection/> */}
<Best_Seller/>
<Slider1/>
<Product/>
      <Footer/>

   </Box>
  )
}

export default Home
