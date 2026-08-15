import React from 'react';
import Footer from '../Footer';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Navbar from '../Navbar';


function ProductPage() {
    return (
        <>
        <Navbar />
        <Hero />
        <LeftSection />
        <RightSection />
        <Universe />
        <Footer />
        </>
    )
}

export default ProductPage;