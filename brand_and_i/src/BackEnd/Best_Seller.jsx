import React from "react";
import { useEffect, useState } from "react";
import { GetData, DeleteData, PutData } from "./Product_API";
import { Box, Image, Grid, GridItem, Text } from "@chakra-ui/react";

const Best_Seller = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = (page) => {
    setLoading(true);
    GetData({ page, limit: 4, order: "desc", sort: "name" })
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

 

  return (
    <Box width={"95%"} margin="auto">
     
<h1 style={{textAlign:"left",fontWeight:'bold',fontSize:"22px"}}>Best Sellers</h1>
      <Grid templateColumns={{ base: "repeat(4,1fr)" }} gap={10}>
        {data.map((ele) => (
          <GridItem key={ele.id}>
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
                style={{ width: "170px", height: "170px",margin:"auto",marginBottom:"10px"}}
                boxsize="ls"
                src={ele.image}
              />
              <Box marginBottom={"10px"} noOfLines={2}>{ele.title}</Box>

              <Text>Price:{ele.price}$</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <div style={{marginBottom:"20px"}}>
        <button style={{border:"1px solid gray",marginRight:'5px',padding:'2px'}} disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button style={{marginRight:'5px'}}>{page}</button>
        <button style={{border:"1px solid gray",padding:'2px'}} onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </Box>
  );
};

export default Best_Seller;
