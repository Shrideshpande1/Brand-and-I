import React from "react";
import { useEffect, useState } from "react";
import { GetData, DeleteData, PutData } from "./Product_API";
import { Link } from "react-router-dom";
import { Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";

const Product = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = (page) => {
    setLoading(true);
    GetData({ page, limit: 24, order: "desc", sort: "name" })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };
  useEffect(() => {
    fetchData(page);
    setLoading(false);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handledelete = (id) => {
    DeleteData(id).then(() => fetchData(page));
  };

  return (
    <>
      <Grid templateColumns={{ base: "repeat(4,1fr)" }} gap={10}>
        {data.map((ele) => (
          <Link to={`/Product_info/${ele.id}`}>
            <Box margin={"auto"} width="90%" marginTop={"20px"} >
            <GridItem style={{width:"95%",margin:"auto"}} key={ele.id}>
              <Box
                bg="gray.50"
                spacing="20"
                p={2}
                textAlign="center"
                color="gray.400"
                boxShadow="lg"
                margin={"10px"}
              >
                <Image
                  style={{ width: "170px", height: "170px" ,margin:"auto",marginBottom:"10px"}}
                  boxsize="ls"
                  src={ele.image}
                />
                <Box marginBottom={"10px"} noOfLines={2}>{ele.title}</Box>

                <Text marginBottom={"10px"}>Price:{ele.price}$</Text>
              </Box>
            </GridItem>
            </Box>
          </Link>
        ))}
      </Grid>

      <div style={{marginTop:"10px"}}>
        <button  style={{border:"1px solid gray",marginRight:'5px',padding:'2px'}} disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button style={{marginRight:'5px'}}>{page}</button>
        <button  style={{border:"1px solid gray",padding:'2px'}} onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </>
  );
};

export default Product;
