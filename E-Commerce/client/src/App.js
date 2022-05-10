import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";
import Category from "./Components/CategoryOfProducts/Category";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/ContactUs/ContactUs"
import CartPage from "./Components/CartPage/CartPage";
import DeliveryOptions from "./Components/DeliveryOptions/DeliveryOptions";
import Footer from "./Components/Footer/Footer";
import CategoryPage from "./Components/CategoryPage/CategoryPage";
import ProductDescriptionPage from "./Components/ProductDescriptionPage/ProductDescriptionPage";
import SaleOffer from "./Components/SaleOffer/SaleOffer";

function App() {



  return (
    <div className="App">
      {/* <Navbar/>
      <LandingPage/>
      <Category/> */}
    

<Navbar/>
<SaleOffer/>
      <Routes>
        <Route path="/" element={
          <>
          <LandingPage />
          <Category/>
          <DeliveryOptions/>
         
          </>
        } />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/mens_Fashion" element={<CategoryPage />} />
      </Routes>

      <Routes>
        <Route path="/womens_Fashion" element={<ProductDescriptionPage />} />
      </Routes>

      <Routes>
        <Route path="/baby_Fashion" element={<Category />} />
      </Routes>

      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Routes>
        <Route path="/contact_us" element={<Contact />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
