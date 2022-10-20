import React, { useEffect, useState } from 'react';
import Serv from './Serv';

const Service = () => {
    const [services,setService]=useState([]);
    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setService(data))
        },[])
    return (
        <div className='grid lg:grid-cols-3 lg:ml-10 sm:ml-0 sm:grid-cols-1'>
            {
                services.map(service=><Serv
                key={service.id}
                service={service}
                ></Serv>)
        }
         
        </div>
    );
};

export default Service;