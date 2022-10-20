import React from 'react';

const AvailableAppoinments = ({service,setBooking}) => {
    const {_id,name,slots}=service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
           
        </figure>
        <div className="card-body  items-center text-center">
          <h2 className="card-title text-success">{name}</h2>
          <p>{
            slots.length>0 ?
            <span>{slots[0]}</span>
            : <span className='text-red-500 font-bold'>No SLOTS AVAILABLE</span>
            }</p>
          <p>{slots.length>0 ? `${slots.length} spaces available` :`${slots.length} space available`}</p>
          <div className="card-actions">
            <label
            onClick={()=>setBooking(service)}
            htmlFor="booking-modal"
            disabled={slots.length===0}
            className="btn btn-success text-white">BOOK APPOINMENT</label>
          </div>
        </div>
      </div>
    );
};

export default AvailableAppoinments;