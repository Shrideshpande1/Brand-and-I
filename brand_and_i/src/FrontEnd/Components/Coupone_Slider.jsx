

import React from "react";
import { useState ,useEffect} from "react";
const img1="https://img.gkbcdn.com/s3/bn/2211/1500x400-6369baf02b40c95728c3e70b.jpg";
const img2="https://img.gkbcdn.com/s3/bn/2211/1500x400-636382ee2b40c94424fc21e1.jpg";
const img3="https://img.gkbcdn.com/s3/bn/2211/1500x400-63647c0c2b40c94fac2af424.jpg";



function Coupone_Slider (){
    const [selectImg,setSlelectImg]=useState(0)
    const [allImg,setallImg]=useState([img1,img2,img3])
    
    useEffect(()=>{
        setInterval(()=>{
setSlelectImg(selectImg=>selectImg<2? selectImg+1:0)
        },3000)
    },[])

return(
    <div>
        <img style={{ width:"95%",height:"500px",alignItems:"right", margin:"auto",padding:"30px"}}  src={allImg[selectImg]} alt="nahai"  />
      
      
    </div>
)


}
export default Coupone_Slider
    