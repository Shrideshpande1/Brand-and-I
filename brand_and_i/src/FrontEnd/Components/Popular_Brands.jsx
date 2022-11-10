import React from "react";
import { useState ,useEffect} from "react";
const img1="https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg";
const img2="https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg";
const img3="https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg";



function Slider1 (){
    const [selectImg,setSlelectImg]=useState(0)
    const [allImg,setallImg]=useState([img1,img2,img3])
    
    useEffect(()=>{
        setInterval(()=>{
setSlelectImg(selectImg=>selectImg<2? selectImg+1:0)
        },3000)
    },[])

return(
    <div>
        <img style={{ width:"95%",height:"250px",alignItems:"right",margin:"auto"}}  src={allImg[selectImg]} alt="nahai"  />
      
      
    </div>
)


}
export default Slider1
    