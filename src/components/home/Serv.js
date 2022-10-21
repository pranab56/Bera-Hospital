import React from 'react';


const Serv = ({service}) => {
    const {img,name,job}=service;
    console.log(service);
    return (
        <div>
             <div className='ml-8 mb-10 mt-14'>
                    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="p-8 mx-auto" src={img} alt="avatar"/>
                <div className="py-5 text-center">
                    <a href="#" className="block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{name}</a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">{job}</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Serv;