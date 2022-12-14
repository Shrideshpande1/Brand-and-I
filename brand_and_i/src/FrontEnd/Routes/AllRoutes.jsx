import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AppOnly from '../Pages/AppOnly'
import BestSeller from '../Pages/BestSeller'
import Coupon from "../Pages/Coupon"
import Clearance from "../Pages/Clearance"
import Deals from "../Pages/Deals"
import New from '../Pages/New'
import Brand from "../Pages/Brand"
import BackEndData from '../../BackEnd/BackEndData'
import Login from '../Pages/Login'
import PrivateRoute from '../Components/PrivateRoute'
import Product_info from '../Pages/Product_info'
// import Cart from "../Pages/Cart"
import CartProduct from '../Pages/CartProduct'
import Buy_now from '../Pages/Buy_now'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AppOnly" element={<PrivateRoute><AppOnly/></PrivateRoute>}></Route>
        <Route path="/BestSeller" element={<PrivateRoute><BestSeller/></PrivateRoute>}></Route>
        <Route path="/BackEndData" element={<PrivateRoute><BackEndData/></PrivateRoute>}></Route>
        <Route path="/Brand" element={<PrivateRoute><Brand/></PrivateRoute>}></Route>
        <Route path="/Deals" element={<PrivateRoute><Deals/></PrivateRoute>}></Route>
        <Route path="/Clearance" element={<PrivateRoute><Clearance/></PrivateRoute>}></Route>
        <Route path="/Coupon" element={<PrivateRoute><Coupon/></PrivateRoute>}></Route>
        <Route path="/New" element={<PrivateRoute><New/></PrivateRoute>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Buy_now" element={<Buy_now/>}></Route>
        <Route path="/CartProduct" element={<CartProduct/>}></Route>
        {/* <Route path="/Cart" element={<Cart/>}></Route> */}
        <Route path="/Product_info/:id" element={<Product_info/>}></Route>
       
     
      </Routes>
    </div>
  )
}

export default AllRoutes
