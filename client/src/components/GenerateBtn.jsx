import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import {AppContext} from '../context/AppContext'
import {useNavigate} from 'react-router-dom'
const GenerateBtn = () => {

  const {user,setShowLogin}=useContext(AppContext);
  const navigate= useNavigate();


const OnClickHandler= () =>{
 if(user){
  navigate('/result')
   
 }else{
  setShowLogin(true)
 }
}

  return (
    <motion.div 
    
    initial ={{opacity:0.2,y:100}}  
    transition={{duration:1}}
   viewport={{once:true}}
 whileInView={{opacity:1,y:0}}  
    
    
    className='pb-16 text-center'>
      <h1 className='py-6 mt-4 text-2xl font-semibold md:text-3xl lg:text-4xl text-neutral-800 md:py-16'>See the magic. Try now</h1>
      <button onClick={OnClickHandler}className='inline-flex items-center gap-2 px-12 py-3 m-auto text-white transition-all duration-500 bg-black rounded-full hover:scale-105 '>
        Generate Images 
        <img  src={assets.star_group} alt="" className='h-6' />
      </button>
    </motion.div>
  )
}

export default GenerateBtn
