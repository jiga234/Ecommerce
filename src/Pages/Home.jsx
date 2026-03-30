import React from 'react'
import ProductBar from '../Components/ProductBar';
import Hero from '../Components/Home/Hero';
import DeatilsBar from '../Components/Home/DeatilsBar';
import CategoryBar from '../Components/Home/CategoryBar';
import Offer from '../Components/Home/offer';
import DealBar from '../Components/Home/DealBar';
import DiscontBar from '../Components/Home/DiscountBar';
import Newsletter from '../Components/Home/Newsletter';
import ContactUs from './contact';
import AboutUs from './AboutUs';

 const Home = () => {
  return (
        <>
            <Hero/>
            <CategoryBar/>
            <DeatilsBar/>
            <ProductBar/>
            <Offer/>
            <DealBar/>
            <DiscontBar/>
            <Newsletter/>
            <AboutUs/>
            <ContactUs/>
        </>
  )
}

export default Home;