import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import FeacturePage from './FeacturePage/FeacturePage';
import Revieww from '../../components/Revieww/Revieww'
import  Footer  from '../../components/Footer/Footer';
import Faq from '../../components/Faq/Faq'
import Upcomming from "../../components/Upcomming/Upcomming";



const Home = () => {
    return (
        <div>
           <Navbar/>
           <HeroBanner/>
           <FeacturePage/>
           <Faq/>
           <Upcomming/>
           <Revieww/>
           <Footer/>
        
        </div>
    );
}

export default Home;
