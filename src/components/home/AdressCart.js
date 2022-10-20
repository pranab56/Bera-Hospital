import React from 'react';
import img1 from '../../assets/icons/clock.svg'
import img2 from '../../assets/icons/marker.svg'
import img3 from '../../assets/icons/phone.svg'

const AdressCart = () => {
    return (
        <div className='lg:flex justify-between gap-6 mx-10 mt-14 mb-20 sm:block'>
            <div className='p-10 flex bg-success lg:w-2/6 lg:mb-0 sm:mb-20  rounded-lg sm:w-full'>
                <img className='mr-3' src={img1} alt="" />
                <div className='mt-2 text-white'>
                <h2>Opening Hours</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className='p-10 flex bg-slate-600 lg:w-2/6 rounded-lg sm:w-full'>
                <img className='mr-3' src={img2} alt="" />
                <div className='mt-2 text-white'>
                <h2>Visit our location</h2>
                <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className='p-10 flex bg-success lg:w-2/6  rounded-lg sm:w-full'>
                <img className='mr-3' src={img3} alt="" />
                <div className='mt-2 text-white'>
                <h2>Contact us now</h2>
                <p>+000 123 456789</p>
                </div>
            </div>
           
        </div>
    );
};

export default AdressCart;