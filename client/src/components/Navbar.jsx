import React ,{useContext} from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
 const {user,setShowLogin,logout,credit}= useContext(AppContext)

const navigate= useNavigate();
  return (
    <div className='flex items-center justify-between py-4'>
     <Link to='/'>
     <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
     </Link> 

<div>
{user ? <div className='flex items-center gap-2 sm:gap-3 '> 
    <button onClick={()=> navigate('/buy')} className='flex items-center gap-2 bg-blue-100
    px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transtion-all duration-700'>
        <img className='w-5' src={assets.credit_star} alt="" />
        <p className='text-xs font-medium text-gray-600 sm:text-sm'>Credits left : {credit}</p>
    </button>
    <p className='pl-4 text-gray-600 max-sm:hidden'>Hi, {user.name}</p>
    <div className='relative group'>
        <img src={assets.profile_icon} className='w-10 drop-shadow'
        alt="" />
        <div className='absolute top-0 right-0 z-10 hidden pt-12 text-black rounded group-hover:block'>
            <ul className='p-2 m-0 text-sm list-none bg-white border rounded-md'>
                <li  onClick={logout} className='px-2 py-1 pr-10 cursor-pointer'>Logout</li>
            </ul>
        </div>
    </div>
</div>
 :
<div className='flex items-center gap-2 sm:gap-5'> 
<p onClick ={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
<button onClick={()=>setShowLogin(true)} className='py-2 text-sm rounded-full bg-zinc-600 text-wthite px-7 sm:px-10'>Login</button>    
</div>}



</div>


    </div>
  )
}

export default Navbar
