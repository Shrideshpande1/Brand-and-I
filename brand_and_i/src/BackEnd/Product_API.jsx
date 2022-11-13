import axios from "axios"

export const GetData=(params={})=>{
return axios.get(`https://636b5abead62451f9faf3ad2.mockapi.io/products?sortBy=name`,{
    params:{
        page: params.page,
    limit: params.limit,
    sortby: params.sort,
  order:params.order
    }
})
}

export const DeleteData=(id)=>{
    return  axios.delete(`https://636b5abead62451f9faf3ad2.mockapi.io/products/${id}`)
 }

  
export const PutData=(data = {})=>{
    console.log(data)
    return  axios.post(`https://636b5abead62451f9faf3ad2.mockapi.io/cart`,{
         image:data.image,
         title:data.title,
         price :data.price,
         cross_price:data.cross_price,
        
    })
 }

 export const getCart=()=>{
    return axios.get(`https://636b5abead62451f9faf3ad2.mockapi.io/cart`)
    }



