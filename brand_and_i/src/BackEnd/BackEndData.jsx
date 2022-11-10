import React from 'react'
import PutTodo from './AddProduct'
const BackEndData = () => {


  const handlereplacedata=(data)=>{
    PutData(data).then(()=>{
    fetchData(page)
        alert("Added succesfully")
    })
}

  return (
    <div>
<PutTodo putrequest={handlereplacedata}/>
    </div>
  )
}

export default BackEndData

