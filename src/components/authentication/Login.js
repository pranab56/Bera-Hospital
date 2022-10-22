import React, { useRef } from "react";
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../../Share/Loading";
import Helmetjs from "../../Share/Helmetjs";



const Login = () => {
  const [signInWithGoogle,gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const {register,formState: { errors },handleSubmit,} = useForm();


  const navigate=useNavigate()
  const location = useLocation();
  
  const  from  = location.state?.from?.pathname || "/";

  if (user||gUser) {
    navigate(from,{replace:true})
  }
  const onSubmit =(data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email,data.password);
  
  };


  if (loading || gLoading) {
    return <Loading></Loading>
  }
  let ErrorSignIn;
  if(error || gError){
    ErrorSignIn=<p className="text-red-600">{error.message || gError.message}</p>
  }


  return (
    
    <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Helmetjs helmet="Login"></Helmetjs>
      <div className="px-6 py-4">
        <h2 className="text-3xl font-bold text-center text-gray-700 dark:text-white">
          Bera Hospital
        </h2>

        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          LOGIN
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

        <Link to={'/resetPassword'} class="btn btn-link text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500 text-primary"><small>Forget Password?</small></Link>

        <div className="mt-10">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Login
          </button>
        </div>
      </form>
      
      </div>
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="flex items-center justify-center w-full px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-slate-600 hover:text-white"
      >
        <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#FFC107"
          />
          <path
            d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
            fill="#FF3D00"
          />
          <path
            d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
            fill="#4CAF50"
          />
          <path
            d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
            fill="#1976D2"
          />
        </svg>

        <span className="mx-2">Sign in with Google</span>
      </button>
      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>

        <Link
          to={"/register"}
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
