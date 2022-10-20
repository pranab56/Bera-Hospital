import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppoinments from './AvailableAppoinments';
import Modal from './Modal';

const AvailableAppoinment = ({selected}) => {
    const [services,setService]=useState([]);
    const [booking,setBooking]=useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <p className='text-success text-xl text-center'>today date {format(selected, 'PP')}.</p>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mt-8 mb-10'>
                {
                    services.map(service=><AvailableAppoinments
                    key={service._id}
                    service={service}
                    setBooking={setBooking}
                    ></AvailableAppoinments>)
                }
                {booking && <Modal booking={booking}></Modal>}
            </div>
        </div>
    );
};

export default AvailableAppoinment;