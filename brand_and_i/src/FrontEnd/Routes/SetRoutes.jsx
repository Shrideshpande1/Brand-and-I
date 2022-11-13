import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex} from '@chakra-ui/react'


const Links=[

    {path:"/New",title:"New"},
    // {path:"/",title:"Home"},
    {path:"/BestSeller",title:"BestSeller"},
    {path:"/Brand",title:"Brand"},
    {path:"/Clearance",title:"Clearance"},
    {path:"/Deals",title:"Deals"},
    {path:"/Coupon",title:"Coupon"},
    {path:"/AppOnly",title:"App Only"},

   
]


const SetRoutes = () => {
  return  <Flex backgroundColor={
    "#1779fd"} color="white" justifyContent={"space-around"}>{Links.map((link)=>(
    <NavLink key={link.path} to={link.path}>
      {link.title}

    </NavLink>
  ))}</Flex>;
}

export default SetRoutes
