import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppoinments from './AvailableAppoinments';

const AvailableAppoinment = ({selected}) => {
    const [services,setService]=useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <p className='text-success text-xl text-center'>today date {format(selected, 'PP')}.</p>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mt-8'>
                {
                    services.map(service=><AvailableAppoinments
                    key={service._id}
                    service={service}
                    ></AvailableAppoinments>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;