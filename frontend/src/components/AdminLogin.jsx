import React from 'react'
import { useForm } from 'react-hook-form'
import axios from "axios"
import getBaseUrl from '../utils/baseUrl'
import { useNavigate } from 'react-router-dom'
const AdminLogin = () => {
    const [message , setMessage] = React.useState("") 
    const navigate = useNavigate();
    const{
        register , 
        handle,
        setError, 
        handleSubmit
      } = useForm();
      const onSubmit = async(data) => {
        console.log(data)
         try {
    const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data , {
      headers:{
        'Content-Type': 'application/json',
        
      }    } )
      const auth = response.data;
      console.log(auth)
      if(auth.token){
        localStorage.setItem("token", auth.token);
        setTimeout(()=>{
          localStorage.removeItem("token")
          alert("Token experied , plese login again")
          navigate("/")

        }, 3600*1000)
      }
      alert("Admin login successfully")
      navigate("/dashboard")
         } catch (error) {
            setMessage("Please provide a valid email  and password")
         }
    };
  return (
    <div className='h-screen flex justify-center items-center'>
    <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-semibold mb-4 '>Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2 '>Username</label>
                <input {...register("username" , {required: true})}type="text" name="username" id="username" placeholder='Username'
                className='shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                 />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2 '>Password</label>
                <input {...register("password" , {required: true})} type="password" name="password" id="password" placeholder='Password'
                className='shadow appearance-none border rounder w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'
                 />
            </div>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            <div>
                <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold
                px-8 py-2 rounded focus:outline-none'>
                    AdminLogin
                </button>
            </div>
            </form>    
         
            <p className='mt-5 text-center text-gray-500 text-xs'>@2025 Book Store. All rights Reserved</p>
            </div>
    </div>
  )
}

export default AdminLogin
