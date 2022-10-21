
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Share/Loading';

const Register = () => {
  const [agree,setAgree]=useState(false)
  const {register,formState: { errors },handleSubmit,} = useForm();
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
  const navigate=useNavigate()
  if (user) {
    console.log(user);
  }
  const onSubmit =async (data) => {
    if(data.checkbox){
      await createUserWithEmailAndPassword(data.email,data.password)
      await updateProfile({ displayName:data.name })
      navigate('/appointment')
    }

  };
  if (loading || updating) {
    return <Loading></Loading>
  }
  let ErrorSignIn;
  if(error){
    ErrorSignIn=<p className="text-red-600">{error.message}</p>
  }
    return (
        <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">Bera Hospital</h2>
    
            <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Register</h3>
    
           
    
            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>

            <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Your Name
          </label>
          <input
            type="text"
            placeholder="Please your Name"
            // react from hooks theke vailded kora 
            {...register("name",{
              required:{
                value:true,
                message:'Name is required'
              },
            })} 
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        
        </div>
        {/* react from hooks theke handle error theke bosate hobe */}
        {errors.name?.type === 'required' && <p className="text-red-500">{errors.name.message}</p>}
        



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
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
         

          </div>

          <input
            type="password"
            {...register("password",{
              required:{
                value:true,
                message:'password is required'
              },
              minLength: {
                
                value: 6,
                message: 'Provide At last 6 character ' 
              }
            })} 
            placeholder="Please your password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
            {errors.password?.type === 'required' && <p className="text-red-500">{errors.password.message}</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        {ErrorSignIn}

        <div class="flex items-start mb-6 mt-4">
    <div class="flex items-center h-5">
      <input onClick={()=>setAgree(!agree)} 
      {...register("checkbox",{
        required:{
          value:true,
          message:'checkbox is required'
        },
      })} 
      id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
    </div>
    <label for="remember" class={agree ? "text-primary ml-2 text-sm font-medium":"ml-2 text-sm font-medium text-gray-900"}>terms and conditions</label>
    {errors.checkbox?.type === 'required' && <p className="text-red-500">{errors.checkbox.message}</p>}
  </div>


        <div className="mt-10">
          <button disabled={!agree} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Register
          </button>
        </div>
      </form>
            
        </div>
        
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-sm text-gray-600 dark:text-gray-200">You All ready have an account? </span>
    
            <Link to={'/login'} className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">login</Link>
        </div>
    </div>
    );
};

export default Register;