import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Share/Loading';

const ResetPassword = () => {
    const {register,formState: { errors },handleSubmit,} = useForm();
    const [sendPasswordResetEmail,sending,error] = useSendPasswordResetEmail(auth);
    const onSubmit =async (data) => {
        if(data.email){
            await sendPasswordResetEmail(data.email)
            toast.success('Send Email')
        }
        else{
            toast.error('please provide a Email')
        }
       
    }
    if(sending){
        return <Loading></Loading>
    }
    if(error){
       return toast.error('please try again')
    }
    return (
        <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
          Bera Hospital
        </h2>

        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Password Reset
        </h3>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            
            placeholder="Please your email"
            // react from hooks theke vailded kora 
            {...register("email",{
              required:{
                value:true,
                message:'Email is required'
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Provide is valid Email' 
              }
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        
        </div>
        {/* react from hooks theke handle error theke bosate hobe */}
        {errors.email?.type === 'required' && <p className="text-red-500">{errors.email.message}</p>}
          {errors.email?.type === 'pattern' && <p className="text-red-500">{errors.email.message}</p>}
          <div className="mt-10">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Reset Password
          </button>
        </div>
          </form>
          </div>
          </div>
    );
};

export default ResetPassword;