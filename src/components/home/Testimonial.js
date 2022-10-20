import React, { useEffect, useState } from 'react';
import svg from '../../assets/icons/quote.svg'
import './Testimonial.css'
import Tesmonials from './Tesmonials';

const Testimonial = () => {
    const [users,setuser]=useState([]);
    useEffect(()=>{
        fetch('testimonial.json')
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[])
    return (
        
        <div className=" mt-24 mb-10">
         <div className='flex justify-between'>
                
          <div className="ml-10 mt-5">
            <p className="text-emerald-500 font-bold text-xl">Testimonial</p>
            <h2 className='text-3xl'>What Our Patients Says </h2>
          </div>
          <div className="quotesvg">
            <img src={svg} alt="" />
          </div>
         </div>
       
        
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-4 sm:gap-2 mt-10">
              {
                  users.map(user=><Tesmonials
                  key={user.id}
                  user={user}
                  ></Tesmonials>)
              }
              
        </div>
      </div>
    );
};

export default Testimonial;