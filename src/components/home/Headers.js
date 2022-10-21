import React from 'react';
import img from '../../assets/images/chair.png'

const Headers = () => {
    return (
        <div className="container px-10 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white lg:text-4xl">Your New Smile Starts Here</h1>
                    
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>
                    
                    <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-2xl" src={img} alt="Catalogue-pana.svg"/>
            </div>
        </div>
    </div>

    );
};

export default Headers;