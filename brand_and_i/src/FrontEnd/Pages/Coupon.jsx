
import React from 'react'

import Product from '../../BackEnd/Product'
import Footer from '../Components/Footer'
import {Box} from "@chakra-ui/react"
import Coupone_Slider from '../Components/Coupone_Slider'

const Coupon = () => {
  return (
    <Box>
    <Coupone_Slider/>

<Product/>
      <Footer/>
    </Box>
  )
}

export default Coupon