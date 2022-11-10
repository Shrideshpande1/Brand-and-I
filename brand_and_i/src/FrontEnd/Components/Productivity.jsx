import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";





const Productivity = () => {
 


const productive=[{
    
        "id": 1,
        "img": "https://img.gkbcdn.com/bn/2209/210x2106-633270272b40c9222cacb305._p1_.jpg",
        "title": "Get the laptop you need"
       },
       {
        "id": 2,
        "img": "https://img.gkbcdn.com/bn/2209/210x2101-6332707e2b40c9222cacb306._p1_.jpg",
        "title": "Create your workspace"
   
}]


 
  return <>
  <p style={{textAlign:"left", fontSize:"19px"}}> Unleash maximum productivity</p>
  <Grid templateColumns={{base:"repeat(2,1fr)"}} Gap={5}>
    {productive.map((item)=><GridItem key={item.id}>
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
        <Box noOfLines={1} textAlign="left">{item.title}</Box>
       
    
      </Box>
      
</GridItem>)}
  </Grid>
  </>;
};

export default Productivity;
