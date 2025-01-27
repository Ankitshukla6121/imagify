import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import {AppContext} from '../context/AppContext'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
const BuyCredit = () => {
 const {user,backendUrl,loadCreditsData, token, setShowLogin}= useContext(AppContext)

const navigate= useNavigate()

const initPay= async (order) =>{
  const options= {
    key:import.meta.env.RAZORPAY_KEY_ID,
    amount:order.amount,
    currency:order.currency,
    name:'Credits Payment',
    description:'Credits Payment',
    order_id:order.id,
    receipt:order.receipt,
    handler:async(response)=>{
         
      try {
        const {data}= await axios.post (backendUrl+'/api/user/verify-razor', response,{headers:{token}})
        if(data.success){
           loadCreditsData();
           navigate('/');
           toast.success('Credit Added');
        }
        
      } catch (error) {
        toast.error(error.message)
      }
    }
  }

  const rzp = new window.Razorpay(options)
  rzp.open()
}
const paymentRazorpay= async(planId)=>{
  try {
    if(!user){
      setShowLogin(true)
    }
 const {data}=    await axios.post(backendUrl +'/api/user/pay-razor',{planId},{headers:{token}})
     

   if(data.success){
        initPay(data.order)
   }
  } catch (error) {
    toast.error(error.message);
  }
}


  return (
    <motion.div
    
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='px-10 py-2 mb-6 border border-gray-400 rounded-full '>Our Plans</button>
      
      <h1 className='mb-6 text-3xl font-medium text-center sm:mb-10'>Choose the Plan</h1>



       <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index)=>(
          <div key={index} className='px-8 py-12 text-gray-600 transition-all duration-500 bg-white border rounded-lg drop-shadow-sm hover:scale-105'>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6 '> <span className='font-medium text-3x1 '>${item.price} / {item.credits} credits</span></p>
          <button onClick={()=>paymentRazorpay(item.id)} className='w-full bg-gray-800 text-white mt-8 
          text-sm rounded-md py-2.5 min-w-52'>{user ? "Purchase" : 'Get Started'}</button>
          
            </div>
        ))}
       </div>
    </motion.div>
  )
}

export default BuyCredit
