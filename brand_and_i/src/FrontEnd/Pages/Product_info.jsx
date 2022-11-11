
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Flex, Heading, Image, Stack, Tag, TagLabel, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";

// const GetMedProbyId=(id)=>{
//     return axios(`https://warm-garden-46246.herokuapp.com/medical_products/${id}`);

// }
const MakeupProduct=(id)=>{
  return axios(`https://636b5abead62451f9faf3ad2.mockapi.io/products?id=${id}`)
  }
//https://636b5abead62451f9faf3ad2.mockapi.io/products/${id}

//   const AllProductApi=()=>{
//     return axios(`https://makeup-api.herokuapp.com/api/v1/products.json?product_category=powder`)
//     }
function Product_info(){
    const [mdata,setMdata]=useState([]);
    const [makeup,setMakeup]=useState([]);
    const { id } = useParams();
    // useEffect(() => {
        
    //     GetMedProbyId(id).then(res=>{
    //        setMdata(res.data)
    //         console.log("ss",res.data)
      
    //     }).catch(err=>{
    //         console.log(err)
    //     })
         
    //   }, [id]);
      useEffect(() => {
        
        MakeupProduct(id).then(res=>{
           setMakeup(res.data)
            console.log("ss",res.data)
            console.log(res.data)
      
        }).catch(err=>{
            console.log(err)
        })
         
      }, [id]);
//map
      
    //   console.log(makeup.title)
    return (
<>{
makeup.map((makeup)=>(
    <Box key={makeup.id} border="2px solid gray"
    w="90%" margin="auto" marginTop="20px" padding="20px">
   

   <Flex>
         
         <Box w="40%" >
         <Tag size="lg" w="10%" colorScheme="red" >
               <Center>
               <TagLabel>New</TagLabel>
               </Center>
               </Tag>
           <Image w="70%" h="70%" src={makeup.image} />

         </Box>
         <Box w="40%">
           <Stack>
             <Heading as="h2" size="md">
               {makeup.name}
             </Heading>

             <Tag size="lg" w="20%" colorScheme="red" >
               <Center>
               <TagLabel>New Arrival</TagLabel>
               </Center>
              
             </Tag>
             <Heading as="h2" size="lg">
               ${makeup.price}
             </Heading>
           <Text >
{makeup.description}
           </Text>
           <br/>
           <Link  to={`/Buy_now`}>
           <Button variant='outline' colorScheme='red' w="50%">Buy Now</Button>
           </Link>
           <br />
           
           </Stack>
         </Box>
       </Flex>



       
    </Box>
   
))

}
<Footer/>

</>

    )
}

export default Product_info;
// key={item.id} main_image={item.main_image} title={item.title}
// price={item.price} desc={item.desc} back_side_img={item.back_side_img} side_img={item.side_img} />