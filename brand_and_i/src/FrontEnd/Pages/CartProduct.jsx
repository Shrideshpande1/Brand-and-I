import React, { useEffect, useState } from "react";
import { getCart } from "../../BackEnd/Product_API";
import { Box, Divider, Image } from "@chakra-ui/react";
import Counter from "../Components/Counter";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
const CartProduct = () => {
  const [data, setData] = useState([]);

  const fetchCartData = () => {
    getCart().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <>
      <h1>GGSHM Store</h1>
      <Divider width={"98%"} margin={"auto"} marginBottom={"20px"}></Divider>
      {data.map((ele) => (
        <Box key={ele.id} marginBottom={"20px"}>
          <Box height={"150px"}>
            <Divider
              width={"98%"}
              margin={"auto"}
              marginBottom={"20px"}
            ></Divider>
            <Box display={"flex"} justifyContent={"space-around"}>
              <Box>
                <Image height={"100px"} src={ele.image} alt="Dan Abramov" />
              </Box>

              <Box width={"400px"} textAlign={"left"}>
                {ele.title}
              </Box>

              <Box fontWeight={"bold"}>{ele.price}</Box>
              <Box>
                <Counter />
              </Box>
              <Box>
                <NavLink to={"/Buy_now"}>
                  <button border={"1px solid black"}>Buy</button>
                </NavLink>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}

      <Footer />
    </>
  );
};

export default CartProduct;
