import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";





const Solutions = () => {
 


const solution=[{
    
        "id": 1,
        "img": "https://img.gkbcdn.com/bn/2209/210x2102-633270c32b40c9222cacb307._p1_.jpg",
        "title": "Smart tech for cleaning"
       },
       {
        "id": 2,
        "img": "https://img.gkbcdn.com/bn/2209/210-633271172b40c9222cacb308._p1_.jpg",
        "title": "Easy pet cleaning"
   
}]


 
  return <>
  <p style={{textAlign:"left", fontSize:"19px"}}> Unleash maximum productivity</p>
  <Grid templateColumns={{base:"repeat(2,1fr)"}} Gap={10}>
    {solution.map((item)=><GridItem key={item.id}>
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

export default Solutions;
