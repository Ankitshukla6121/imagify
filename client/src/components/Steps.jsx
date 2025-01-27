import React from 'react'
import { stepsData } from '../assets/assets'
import {motion} from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
    initial ={{opacity:0.2,y:100}}  
    
    transition={{duration:1}}
    viewport={{once:true}}
    whileInView={{opacity:1,y:0}}
    
    
    
    className='flex flex-col items-center justify-center my-32 '>
      <h1 className='mb-2 text-3xl font-semibold sm:text-4xl'>How it works</h1>

      <p className='mb-8 text-lg text-gray-600'>Transform words Into Stunning Images</p>
   
   <div className='w-full max-w-3xl space-y-4 text-sm'>

    
        {stepsData.map((item, index)=>(
            <div key={index} className='flex items-center gap-4 p-5 px-8 bg-white/20 
            shadow-md border cursor-pointer hover:scale-[1.02] transition-all
            duration-300 rounded-l'>

        <img src={item.icon} width={40} alt="" />

         <div>
          <h2 className='text-xl font-medium'>{item.title}</h2>
          <p className='text-gray-500'>{item.description}</p>
         </div>
              </div>
        ))}
    
   </div>
   
   
    </motion.div>
  )
}

export default Steps
