import React from 'react'
import Home from './Pages/Home';
import {Route,Routes} from "react-router-dom";
import Product from './Pages/Product';
import Music from './Pages/card';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Shop from './Pages/Shop';
import Collection from './Pages/Collection';
import ContactUs from './Pages/contact';
import AboutUs from './Pages/AboutUs';

 const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/shop/:collection" element={<Shop/>} />
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/card" element={<Music/>}/>
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App;
