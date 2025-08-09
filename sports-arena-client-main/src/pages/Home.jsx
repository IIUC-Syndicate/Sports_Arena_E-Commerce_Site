import React from 'react';
import Products from '../components/Home/Products';
import SportsCategory from '../components/Home/SportsCategory';
import Banner from '../components/Home/Banner';
import Faq from '../components/Home/Faq';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <SportsCategory></SportsCategory>
            <Products></Products>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </>
    );
};

export default Home;