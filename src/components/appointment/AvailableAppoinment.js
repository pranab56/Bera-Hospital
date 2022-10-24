import { format } from 'date-fns';
import React, {  useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Share/Loading';
import AvailableAppoinments from './AvailableAppoinments';
import Modal from './Modal';

const AvailableAppoinment = ({selected}) => {
    
    const [booking,setBooking]=useState([]);


    const date=format(selected,'PP')

    const {data:services,isLoading,refetch}=useQuery(['available',date],()=>fetch(`http://localhost:5000/available?date=${date}`).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    
  
    return (
        <div>
            <p className='text-success text-xl text-center'>today date {format(selected, 'PP')}.</p>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-2 mt-8 mb-10'>
                {
                    services?.map(service=><AvailableAppoinments
                    key={service._id}
                    service={service}
                    setBooking={setBooking}
                    ></AvailableAppoinments>)
                }
                {booking && <Modal refetch={refetch} selected={selected} setBooking={setBooking} booking={booking}></Modal>}
            </div>
        </div>
    );
};

export default AvailableAppoinment;