import React from 'react';

const Tesmonials = ({user}) => {
    const {img,name,city,title}=user;
    return (
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
            <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={img}/>
        </div>
    
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{name}</h2>
        <div className="flex justify-start mt-4">
            <p className="text-xl font-medium text-blue-600 dark:text-blue-300" tabindex="0" role="link">{city}</p>
        </div>
    
        <p className="mt-2 text-gray-600 dark:text-gray-200">{title}</p>
    
        
    </div>
    );
};

export default Tesmonials;