import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {motion} from 'framer-motion'
import { AppContext } from '../context/AppContext'

const Result = () => {

const [image, setImage]= useState(assets.sample_img_1)
const [isImageLoaded,setIsImageLoaded]= useState(false)
const [loading, setLoading]= useState(false)

const [input, setInput]= useState('')

const {generateImage} = useContext(AppContext)

const onSubmitHandler= async (e)=>{
   e.preventDefault()
   setLoading(true)
   if(input.trim()){
    const image= await generateImage(input)
    if(image){
      setIsImageLoaded(true)
      setImage(image)
    }
   }
   setLoading(false)
}

  return (


    <motion.form  
    
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
  
    onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center' >
    <div>
      <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded' />
    <span className={`absolute bottom-0 left-0 h-1 bg-blue-500
   ${loading ? 'w-full transition-all duration-[10s]':'w-0'}`}></span>
      </div>
     <p className={!loading ? 'hidden' : ''}>Loading.....</p>
    </div>
{!isImageLoaded &&
  <div className='flex w-full max-w-xl bg-neutral-500
  text-sm   p-0.5 mt-10 rounded-full text-white'>
    <input  onChange={e =>setInput(e.target.value)} value={input}
    type="text" placeholder='Describe what you want to generate' className='flex-1 ml-8 bg-transparent outline-none max-sm:w-20 placeholder-color' />
    <button type='submit' className='px-10 py-3 rounded-full bg-zinc-900 sm:px-16'>Generate</button>
    </div>  }
   
{isImageLoaded && 

 <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
  <p onClick={ ()=>{setIsImageLoaded(false)}} className='px-8 py-3 text-black bg-transparent border rounded-full cursor-pointer border-zinc-900 '>Generate Another</p>
  <a className='px-10 py-3 rounded-full cursor-pointer bg-zinc-900' download href={image}>Download</a>
 </div>
}
</motion.form>
  )
}

export default Result
