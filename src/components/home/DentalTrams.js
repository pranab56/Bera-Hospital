import React from 'react';
import img from '../../assets/images/treatment.png'

const DentalTrams = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-12">
        <div className="hero-content flex-col lg:ml-20 sm:ml-0 lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div className='lg:ml-12 sm:ml-0'>
            <h1 className="lg:text-5xl sm:text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 lg:mr-12 sm:mr-0 text-justify">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default DentalTrams;