import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
      
    <Link to='/'> <img src={assets.logo} width={150} alt="" /></Link>  
      <p className='flex-1 pl-4 text-sm text-gray-500 border-l border-gray-400 max-sm:hidden'>Copyright @AnkitShukla.dev  | All right reserved.</p>

      <div className='flex gap-2.5'>
      <Link to='https://www.facebook.com/profile.php?id=100089460102686'> <img src={assets.facebook_icon} width={35} alt="" /></Link> 
       <Link to='https://x.com/ankitshukla_02'> <img src={assets.twitter_icon} width={35} alt="" /></Link>
        <Link to='https://www.instagram.com/aankitshukla04/'><img src={assets.instagram_icon} width={35} alt="" /></Link>
      </div>
    </div>
  )
}

export default Footer
