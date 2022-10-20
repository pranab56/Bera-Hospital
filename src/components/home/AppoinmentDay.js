import React from 'react';
import './AppoinmentDay.css'
import img from '../../assets/images/doctor.png'

const AppoinmentDay = () => {
    return (
        <nav className='join'>
        <div className='joined w-100 mx-auto'>  
      
      <div className='img2'>
   <img className='img-fluid' src={img} alt="" />
      </div>
      <div className='text2'>
          <p className='text-success fw-bold'>Appointment</p>
          <h1>Make an appointment Today</h1>
      
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
          <button className='mt-10'>GET STARTED</button>
      </div>
      </div>
   </nav>
    );
};

export default AppoinmentDay;