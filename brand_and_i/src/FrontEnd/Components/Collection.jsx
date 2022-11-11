import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";





const Collection = () => {
 


const health=[{
    
        "id": 1,
        "img": "https://img.gkbcdn.com/bn/2209/210x2107-63326fb32b40c9222cacb304._p1_.jpg",
        "title": "Premium e-mobility"
       },
       {
        "id": 2,
        "img": "https://img.gkbcdn.com/bn/2205/210x2104-62902c152b40c91cb09e7ada._p1_.jpg",
        "title": "Cost-effective commuting"
   
}]


 
  return <>
  <p style={{textAlign:"left", fontSize:"19px"}}> Go outside for fun and health</p>
  <Grid templateColumns={{base:"repeat(2,1fr)"}} gap={10}>
    {health.map((item)=><GridItem key={item.id}>
      <Box
    bg="gray.50"
   
    spacing="20"
    p={2}
    textAlign="center"
    
    color="gray.400"
    boxShadow='lg'
    margin={"10px"}
      >
        <Image style={{width:"150px",height:"150px"}} boxsize="ls" src={item.img}/>
        <Box noOfLines={2} textAlign="left">{item.title}</Box>
       
    
      </Box>
      
</GridItem>)}
  </Grid>
  </>;
};

export default Collection;
