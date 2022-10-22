
import React, { useState } from 'react';
import Helmetjs from '../../Share/Helmetjs';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';


const Appointment = () => {
    const [selected,setSelected]=useState(new Date());

    return (
        <div>
            <Helmetjs helmet="Appointment"></Helmetjs>
            <AppoinmentBanner selected={selected} setSelected={setSelected}></AppoinmentBanner>
            <AvailableAppoinment selected={selected}></AvailableAppoinment>
        </div>
    );
};

export default Appointment;