

import React from 'react'

import Product from '../../BackEnd/Product'
import Footer from '../Components/Footer'
import {Box} from "@chakra-ui/react"

const Brand = () => {
  return (
    <Box>
 
      
      
     
     
      <Box style={{fontSize:"50px",fontWeight:"bold",padding:"30px"}}>
      <h1>Brand</h1>
      </Box>

<Product/>
      <Footer/>
    </Box>
  )
}

export default Brand