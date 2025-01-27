import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {

    const [state,setState]= useState('Login')
    const {setShowLogin,backendUrl,setToken, setUser}= useContext(AppContext)

    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')

   const onSubmitHandler= async (e) =>{
    e.preventDefault();
    try {
      
       if(state=== 'Login'){
        const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
         if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
         }else{
          toast.error(data.message)
         }
      
      }else{
        const {data} = await axios.post(backendUrl + '/api/user/register', {name,email, password})
         if(data.success){
          setToken(data.token)
          setUser(data.user)
          localStorage.setItem('token', data.token)
          setShowLogin(false)
         }else{
          toast.error(data.message)
         }
      
      }

    } catch (error) {
      toast.error(error.message)
    }
   }


    useEffect(()=>{
  document.body.style.overflow='hidden';
  return ()=>{
    document.body.style.overflow='unset';
  }
    },[])

  return (
    <div className= 'fixed top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black/30'>
      
  <motion.form
  
  onSubmit={onSubmitHandler}
  
  initial={{opacity:0.2, y:50}}
  transition={{duration:0.3}}
  whileInView={{opacity:1,y:0}}
  viewport={{once:true}}
  
  className='relative p-10 bg-white rounded-xl text-slate-500'>
    <h1 className='text-2xl font-medium text-center text-neutral-700'>{state}</h1>
    <p>Welcome back! Please sign in to continue</p>
{state !='Login' && 
    <div className='flex items-center gap-2 px-6 py-2 mt-5 border rounded-full'>
        <img src={assets.user_icon} alt="" />
        <input 
        onChange={e => setName(e.target.value)} value={name}
        className='text-sm outline-none' type="text" placeholder='Full Name' required/>
    </div>}
    <div className='flex items-center gap-2 px-6 py-2 mt-4 border rounded-full'>
        <img src={assets.email_icon} alt="" />
        <input
         onChange={e => setEmail(e.target.value)} value={email}
        className='text-sm outline-none' type="email" placeholder='email' required/>
    </div>
    <div className='flex items-center gap-2 px-6 py-2 mt-4 border rounded-full'>
        <img src={assets.lock_icon} alt="" />
        <input 
         onChange={e => setPassword(e.target.value)} value={password}
        className='text-sm outline-none' type="password" placeholder='Password' required/>
    
    </div>

    <p className='my-4 text-sm text-blue-600 cur'>Forgot password?

    </p>
    <button className='w-full py-2 text-white bg-blue-500 rounded-full'>{state==='Login' ? 'login' :'create account'}</button>
    {state ==='Login' ?
   <p className='mt-5 text-center'>Don't have an account? <span 
   className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign UP')}>Sign up </span></p>
   :
   <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login </span></p> }
  
  <img onClick={() =>setShowLogin(false)} src={assets.cross_icon} className='absolute cursor-pointer top-5 right-5 ' alt="" />
  </motion.form>

    </div>
  )
}

export default Login
