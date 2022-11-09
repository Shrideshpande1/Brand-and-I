import React from "react";
import { useEffect, useState } from "react";
import { GetData ,DeleteData,PutData} from "./Product_API";
import { Box, Image ,Grid,GridItem,Text} from "@chakra-ui/react";
import PutTodo from "./AddProduct";
const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const[loading,setLoading]=useState(false)

  const fetchData = (page) => {
    setLoading(true)
    GetData({  page, limit: 5, order: "desc",sort:"name" })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false)
      })
      .catch((err) => console.log(err))
      setLoading(false)
     
  };

  useEffect(() => {
   
    fetchData(page);
    setLoading(false)
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  
  const handlereplacedata=(data)=>{
    PutData(data).then(()=>{
    fetchData(page)
        alert("Added succesfully")
    })
}

  const handledelete=(id)=>{
    DeleteData(id).then(()=>fetchData(page))
  }




  
  return (<>
    
      <div>
    <PutTodo putrequest={handlereplacedata}/>
</div>

      <div>
<button disabled={page === 1} onClick={() => setPage(page - 1)}>
        PREV
      </button>
      <button>{page}</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>



    <Grid templateColumns={{base:"repeat(5,1fr)"}} gap={10}>
    {data.map((ele)=><GridItem key={ele.id}>
      <Box
     bg="gray.50"
   
     spacing="20"
     p={2}
     textAlign="center"
     
     color="gray.400"
     boxShadow='lg'
     margin={"10px"}
      >
        <Image style={{width:"170px",height:"170px"}} boxsize="ls" src={ele.image}/>
        <Box noOfLines={2}>Name:{ele.title}</Box>
        {/* <Image style={{width:"170px",height:"50px"}} boxsize="ls" src={ele.rating.start}/> */}
        <Text>Price:{ele.price}$</Text>
        <button onClick={()=>handledelete(ele.id)}>Delete</button>
      </Box>
      
</GridItem>)}
  </Grid>




    </>


  );
};

export default Product;
