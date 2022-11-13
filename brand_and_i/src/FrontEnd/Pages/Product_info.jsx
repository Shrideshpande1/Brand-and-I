import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { PutData } from "../../BackEnd/Product_API";

function Product_info() {
  const [makeup, setMakeup] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://636b5abead62451f9faf3ad2.mockapi.io/products`)
      .then((r) => {
        if (id) {
          console.log(r.data);
          const singleProd = r.data.find((item) => item.id === Number(id));
          singleProd && setMakeup(singleProd);
        }
      });
  }, [id]);
  const addToCart = (data) => {
    console.log(makeup);
    PutData(makeup);
  };
  return (
    <>
        <Box
          key={makeup.id}
          border="2px solid gray"
          w="90%"
          margin="auto"
          marginTop="20px"
          padding="20px"
        >
          <Flex>
            <Box w="40%">
              <Tag size="lg" w="10%" colorScheme="red">
                <Center>
                  <TagLabel>New</TagLabel>
                </Center>
              </Tag>
              <Image w="70%" h="70%" src={makeup.image} />
            </Box>
            <Box w="40%">
              <Stack>
                <Heading as="h2" size="md">
                  {makeup.title}
                </Heading>

                <Tag size="lg" w="20%" colorScheme="red">
                  <Center>
                    <TagLabel>New Arrival</TagLabel>
                  </Center>
                </Tag>
                <Heading as="h2" size="lg">
                  ${makeup.price}
                </Heading>
                <Text>{makeup.description}</Text>
                <br />

                <Button
                  variant="outline"
                  onClick={addToCart}
                  colorScheme="red"
                  w="50%"
                >
                  Add to Cart
                </Button>

                <br />
              </Stack>
            </Box>
          </Flex>
        </Box>
      <Footer />
    </>
  );
}

export default Product_info;
