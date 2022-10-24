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
            <h3>this is MyAppoinment {appoinments.length}</h3>
        </div>
    );
};

export default MyAppoinment;