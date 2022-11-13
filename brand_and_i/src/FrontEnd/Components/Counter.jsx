// import "./styles.css";
import React, { useState } from "react";
import { Grid,Box,GridItem,Image,Text, Button, } from "@chakra-ui/react";

export default function Counter() {
  const [count, setCount] = useState(1);

 

 

  return (<>
 
    
     <Box style={{display:'flex'}}>
       
     <Button disabled={count===1} style={{height:"30px"}} onClick={() => setCount(count - 1)}>-</Button>
     
      <h1  style={{marginLeft:"20px",marginRight:"20px"}}>{count}</h1>
   
      <Button  style={{height:"30px"}} onClick={() => setCount(count + 1)}>+</Button>
      </Box>
      </>
   
  );
}


