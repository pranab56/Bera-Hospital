
import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';


const Appointment = () => {
    const [selected,setSelected]=useState(new Date());

    return (
        <div>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppoinment selected={selected}></AvailableAppoinment>
        </div>
    );
};

export default Appointment;