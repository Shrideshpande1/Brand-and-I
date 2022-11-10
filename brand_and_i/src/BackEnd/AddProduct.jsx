import React, { useState } from "react";
import {Box} from "@chakra-ui/react"
export default function PutTodo({ putrequest }) {
  const [putdata, setputdata] = useState({
    title: "",
    price: "",
    image: "",
    cross_price: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setputdata({
      ...putdata,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putrequest(putdata);
  };

  return (<>
    
    <Box style={{fontSize:"50px",fontWeight:"bold",padding:"30px"}}>
    <h1>Add BackEnd Data</h1>
    </Box>

    
    <div   style={{
      border: "1px solid #7b7b7b",
    margin:"auto",
      width: "450px",
      marginTop:"50px",
      textAlign:"left",
      padding:"20px"

   
    }}>
      
      
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input
          style={{
            border: "1px solid #7b7b7b",
            marginBottom: "10px",
            marginTop: "10px",
            width: "400px",
            height: "30px",
          }}
          type="text"
          onChange={handleChange}
          value={putdata.title}
          name="title"
          placeholder="Enter title"
        ></input>
        <br />
        <label>Enter URL</label>
        <br />
        <input
          style={{
            border: "1px solid #7b7b7b",
            marginBottom: "10px",
            marginTop: "10px",
            width: "400px",
            height: "30px",
          }}
          type="img"
          onChange={handleChange}
          value={putdata.image}
          name="image"
          placeholder="Enter URL"
        ></input>
        <br />

        <label>price</label>
        <br />
        <input
          style={{
            border: "1px solid #7b7b7b",
            marginBottom: "10px",
            marginTop: "10px",
            width: "400px",
            height: "30px",
          }}
          type="number"
          onChange={handleChange}
          value={putdata.price}
          name="price"
          placeholder="Enter price"
        ></input>
        <br />
        <label>cross_price</label>
        <br />
        <input
          style={{
            border: "1px solid #7b7b7b",
            marginBottom: "10px",
            marginTop: "10px",
            width: "400px",
            height: "30px",
          }}
          type="number"
          onChange={handleChange}
          value={putdata.cross_price}
          name="cross_price"
          placeholder="Enter cross_price"
        ></input>
        <br />

        <input
          style={{
            border: "1px solid #7b7b7b",
            marginBottom: "10px",
            marginTop: "10px",
            width: "400px",
            height: "30px",
          }}
          type="submit"
          value="Submit-Data"
        />
      </form>
    </div>
    </>
  );
}
