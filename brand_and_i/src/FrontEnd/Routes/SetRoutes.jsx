import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex} from '@chakra-ui/react'


const Links=[

    {path:"/New",title:"New"},
    {path:"/",title:"Home"},
    {path:"/BestSeller",title:"BestSeller"},
    {path:"/Brand",title:"Brand"},
    {path:"/Clearance",title:"Clearance"},
    {path:"/Deals",title:"Deals"},
    {path:"/Coupon",title:"Coupon"},
    {path:"/AppOnly",title:"App_Only"},
    {path:"/BackEndData",title:"BackEndData"},
   
]


const SetRoutes = () => {
  return  <Flex justifyContent={"space-around"}>{Links.map((link)=>(
    <NavLink key={link.path} to={link.path}>
      {link.title}

    </NavLink>
  ))}</Flex>;
}

export default SetRoutes
