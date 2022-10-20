import { format } from 'date-fns';
import React from 'react';

const Modal = ({selected,booking}) => {
    const {name,slots}=booking;

    const handleFromSubmit=e=>{
        e.preventDefault()
        const DantalName=e.target.DantalName.value;
        const slot=e.target.slot.value;
        const name=e.target.name.value;
        const number=e.target.number.value;
        const email=e.target.email.value;
        const modalFrom={DantalName,slot,name,number,email};
        e.target.reset()
        console.log(modalFrom);
        
    }

    return (
       <div>
       
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Your Appoinment {format(selected, 'PP')}</h3>
    <form onSubmit={handleFromSubmit}>
    <label class="block mt-3" for="text">
                            <input type="text" name="DantalName" id="text" value={name} disabled class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>
                        <select class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 mt-3" name="slot" id="">
                            {
                                slots?.map(slot=><option>{slot}</option>)
                            }
                        </select>
                        
        
    <label class="block mt-3" for="name">
                            <input type="text" name="name" id="name" placeholder="Your Name" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>
    <label class="block mt-3" for="number">
                            <input type="number" name="number" id="number" placeholder="Your Phone Number" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>
    <label class="block mt-3" for="email">
                            <input type="email" name="email" id="email" placeholder="Your Email" class="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>
                       

    <label className="modal-action">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
        <input className='btn btn-success text-white' type="submit" value="submit" />
  
    </label>
    </form>
  </div>
  
</div>

       </div> 
      
    );
};

export default Modal;