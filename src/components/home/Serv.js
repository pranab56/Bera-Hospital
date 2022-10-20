import React from 'react';


const Serv = ({service}) => {
    const {img,name,job}=service;
    console.log(service);
    return (
        <div>
             <div className='ml-8 mb-10 mt-14'>
                    <div class="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img class="p-8 mx-auto" src={img} alt="avatar"/>
                <div class="py-5 text-center">
                    <a href="#" class="block text-2xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link">{name}</a>
                    <span class="text-sm text-gray-700 dark:text-gray-200">{job}</span>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Serv;