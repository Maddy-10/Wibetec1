import React from 'react'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Developers from '../components/Developers';
import Subscribe from '../components/Subscribe';
import Hero from '../components/Hero';
import Footer from '../Footer';
import Copyright from '../components/Copyright';
import Faq from '../components/Faq';
const Home = () => {
    return (
        <>

            <Navbar />
            <Hero />
            <About />
            <Faq />
            <Developers />
            <Subscribe />
            <Footer />
            <Copyright />
        </>
    )
}

export default Home