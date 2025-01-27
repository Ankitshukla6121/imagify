import React from 'react'
import {Link} from 'react-dom'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div 
    
    initial ={{opacity:0.2,y:100}}  
    transition={{duration:1}}
   viewport={{once:true}}
 whileInView={{opacity:1,y:0}}  
    
    
    className='flex flex-col items-center justify-center py-12 my-20 '>
      
      <h1 className='mb-2 text-3xl font-semibold sm:text-4xl'>Customer testimonials</h1>
      <p className='mb-12 text-gray-500'>What Our Users Are Saying</p>

   <div className='flex flex-wrap gap-6'>
    
    {testimonialsData.map((testimonial, index)=>(
   <div key={index} className='bg-white/20 p-12 rouded-lg shadow-md border w-80 m-auto cursor-pointer 
   hover:scale-[1.02] transition-all '>
    <div className='flex flex-col items-center'>
      
        <img src={testimonial.image} className='rounded-full w-14' alt="" />
        <h2 className='mt-3 text-xl font-semibold'>{testimonial.name}</h2>
        <p className='mb-4 text-gray-500'>{testimonial.role}</p>
        <div className='flex mb-4'>
         {Array(testimonial.stars).fill().map((item, index)=>(
            <img  key ={index} src={assets.rating_star} alt='' />
         ))}
        </div>
        <p className='text-sm text-center text-gray-600'>{testimonial.text}</p>
        
    </div>

    </div>
 

    ))}

   </div>

    </motion.div>
  )
}

export default Testimonials
