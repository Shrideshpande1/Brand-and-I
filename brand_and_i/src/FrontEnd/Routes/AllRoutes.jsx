import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AppOnly from '../Pages/AppOnly'
import BestSeller from '../Pages/BestSeller'
import Coupon from "../Pages/Coupon"
import BackEndData from "../Pages/BackEndData"
import Clearance from "../Pages/Clearance"
import Deals from "../Pages/Deals"
import New from '../Pages/New'
import Brand from "../Pages/Brand"


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AppOnly" element={<AppOnly/>}></Route>
        <Route path="/BestSeller" element={<BestSeller/>}></Route>
        <Route path="/BackEndData" element={<BackEndData/>}></Route>
        <Route path="/Brand" element={<Brand/>}></Route>
        <Route path="/Deals" element={<Deals/>}></Route>
        <Route path="/Clearance" element={<Clearance/>}></Route>
        <Route path="/Coupon" element={<Coupon/>}></Route>
        <Route path="/New" element={<New/>}></Route>
     
      </Routes>
    </div>
  )
}

export default AllRoutes
