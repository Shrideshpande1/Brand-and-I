import React from "react";
import { useState ,useEffect} from "react";
const img1="https://uidesign.gbtcdn.com/GB/image/8823/samebike_1190X420_en.jpg";
const img2="https://uidesign.gbtcdn.com/GB/image/8823/MASTER3_1190X420_EN.jpg";
const img3="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg";
const img4="https://uidesign.gbtcdn.com/GB/image/8823/1redmi1190X420_en.jpg";


function Slider (){
    const [selectImg,setSlelectImg]=useState(0)
    const [allImg,setallImg]=useState([img1,img2,img3,img4])
    
    useEffect(()=>{
        setInterval(()=>{
setSlelectImg(selectImg=>selectImg<3? selectImg+1:0)
        },3000)
    },[])

return(
    <div>
        <img style={{ width:"1000px",height:"400px",alignItems:"right"}}  src={allImg[selectImg]} alt="nahai"  />
      
      
    </div>
)


}
export default Slider
    