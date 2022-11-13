import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";





const Play_Together = () => {
 


const play=[{
    
        "id": 1,
        "img": "https://img.gkbcdn.com/bn/2209/210x2105-633272852b40c9222cacb30a._p1_.jpg",
        "title": "Game consoles"
       },
       {
        "id": 2,
        "img": "https://img.gkbcdn.com/bn/2209/210x2104-633272352b40c9222cacb309._p1_.jpg",
        "title": "Portable outdoor speakers"
   
}]


 
  return <>
  <p style={{textAlign:"left", fontSize:"19px", fontSize:"22px",fontWeight:"bold"}}> 

Let's play together</p>
  <Grid templateColumns={{base:"repeat(2,1fr)"}} gap={10}>
    {play.map((item)=><GridItem key={item.id}>
      <Box
    bg="gray.50"
   
    spacing="20"
    p={2}
    textAlign="center"
    
    color="gray.400"
    boxShadow='lg'
    margin={"10px"}
      >
        <Image style={{width:"150px",height:"150px",margin:"auto"}} boxsize="ls" src={item.img}/>
        <Box noOfLines={2} textAlign="left">{item.title}</Box>
       
    
      </Box>
      
</GridItem>)}
  </Grid>
  </>;
};

export default Play_Together;
