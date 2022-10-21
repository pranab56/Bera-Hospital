import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import img from '../../assets/images/chair.png'

const AppoinmentBanner = ({selected,setSelected}) => {
    
    return (
        <div className="px-10 py-16 mx-32">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
               <DayPicker
               mode='single'
               selected={selected}
               onSelect={setSelected}
               ></DayPicker>
               
            </div>
            

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-2xl" src={img} alt="Catalogue-pana.svg"/>
            </div>
        </div>
    </div>
    );
};

export default AppoinmentBanner;