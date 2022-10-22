import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation} from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Share/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location=useLocation()
    if(loading){
        return <Loading></Loading>
    }
    
   
    if(!user){
        return <Navigate
        to={{
          pathname: "/login",
          state: { from: location }
        }}
        
      />
    }
    if(!user.emailVerified){
      return <div className="card mx-auto mt-32 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl text-red-500">Please verified Your Email !!</h2>
        <p className='text-center text-lg text-success'>Send verification Your email</p>
        <div className="card-actions justify-center">
        <button className='btn btn-primary' onClick={async () =>
         {await sendEmailVerification();
          toast.success('Sent email');
        }}
      >
        Verify email
      </button>
        </div>
      </div>
    </div>
    }

    return children;
};

export default RequireAuth;