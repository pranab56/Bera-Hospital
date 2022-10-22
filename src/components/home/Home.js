import React from 'react';
import Helmetjs from '../../Share/Helmetjs';
import AdressCart from './AdressCart';
import AppoinmentDay from './AppoinmentDay';
import ConatactUs from './ConatactUs';
import DentalTrams from './DentalTrams';
import Footer from './Footer';

import Headers from './Headers';
import Service from './Service';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div> 
           <Helmetjs helmet="Home"></Helmetjs>
            <Headers></Headers>
            <AdressCart></AdressCart>
            <Service></Service>
            <DentalTrams></DentalTrams>
            <AppoinmentDay></AppoinmentDay>
            <Testimonial></Testimonial>
            <ConatactUs></ConatactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;