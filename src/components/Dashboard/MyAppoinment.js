import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppoinment = () => {
    const [appoinments,setAppoinment]=useState([]);
    const [user]=useAuthState(auth)
    useEffect(()=>{
      if(user){
        fetch(`http://localhost:5000/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAppoinment(data))
      }
    },[])
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full mt-5">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Tretment</th>
        <th>slots</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      
      {
        appoinments.map((a,index)=><tr>
            <th>{index+1}</th>
            <td>{a.name}</td>
            <td>{a.DantalName}</td>
            <td>{a.slot}</td>
            <td>{a.date}</td>
          </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;