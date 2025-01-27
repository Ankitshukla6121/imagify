import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    
    initial ={{opacity:0.2,y:100}}  
    transition={{duration:1}}
   viewport={{once:true}}
 whileInView={{opacity:1,y:0}}    
    
    className='flex flex-col items-center justify-center p-6 my-24 md:px-28'>
      <h1 className='mb-2 text-3xl font-semibold sm:text-4xl'>Create AI Images</h1>
      <p className='mb-8 text-gray-500'>Turn your imagination into visuals</p>
   
   <div className='flex flex-col items-center gap-5 md:gap-14 md:flex-row'>
    <img src={assets.sample_img_1} className='rounded-lg w-80 xl:w-96' alt="" />
   <div>
    <h2 className='max-w-lg mb-4 text-3xl font-medium'> Introduction the AI-Powered Text to imge Generator</h2>
    <p className='mb-4 text-gray-600 '>
        Easily bring your ideas to life with our free AI 
        image generator. Whether you need stunning visuals or 
        unique imagery, our tool transforms your text into 
        eye-catching images with just a few clicks. Imagine it,
        descibe it, and watch it come to life instantly.
        <p className='mt-4 text-gray-600'>
            Simply type in a text prompt, and our cutting-edge AI will 
            generate high-quality images in seconds. From product visuals
            to character design and portraits, even concepts taht don't yet 
            exits can be visualzed effortlessly. Powered by advaced Ai techology 
     ,the creative are limitless!
        </p>
    </p>
   </div>
  
  
  
   </div>
   
    </motion.div>
  )
}

export default Description
