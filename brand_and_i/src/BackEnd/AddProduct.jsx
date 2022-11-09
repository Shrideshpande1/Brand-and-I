import React, { useState } from 'react';
export default function PutTodo({putrequest}) {

   const [putdata, setputdata] = useState({
        title:"",
        price :"",
        image:"",
        cross_price:"", 

      
}); 


const handleChange = (e) => {
    const { name, value, type } = e.target;

    const val = type === "number" ? Number(value) : value;

    setputdata({
      ...putdata,
      [name]: val
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putrequest(putdata);
  };


  return (
    <div>
       <form onSubmit={handleSubmit}>
                 <label>title</label>
                 <input type="text" onChange={handleChange} value={putdata.title} name="title"  placeholder='Enter title'></input>
                 <input type="img" onChange={handleChange} value={putdata.image} name="image"  placeholder='Enter URL'></input>
                 
                 <label>price</label>
                 <input type="number" onChange={handleChange} value={putdata.price} name="price"  placeholder='Enter price'></input>
                 <label>cross_price</label>
                 <input type="number" onChange={handleChange} value ={putdata.cross_price} name="cross_price"  placeholder='Enter cross_price'></input>
                 
             <input type="submit" value="Submit-Data"/>
        </form>
    </div>
  );
}
