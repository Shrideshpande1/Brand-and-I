
import './App.css';
import Product from './BackEnd/Product';
import AllRoutes from "./FrontEnd/Routes/AllRoutes"
import SetRoutes from './FrontEnd/Routes/SetRoutes';
import Home from './FrontEnd/Pages/Home';
import Navbar from './FrontEnd/Components/Navbar';
import Slider from './FrontEnd/Components/Slider';
import Footer from './FrontEnd/Components/Footer';
import Popular_Brands from './FrontEnd/Components/Popular_Brands';
function App() {
  return (
    <div className="App">
<Navbar/>
 <SetRoutes/> 
<AllRoutes/> 
{/* <Popular_Brands/> */}
     


    </div>
  );
}

export default App;



//  http://localhost:4004/Products
//https://636b5abead62451f9faf3ad2.mockapi.io/products