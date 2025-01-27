import React, { useContext } from 'react'


import { ToastContainer } from 'react-toastify';

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showLogin}= useContext(AppContext);
  return (
    <div className='min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer postion='button-right'/>
  
  <Navbar/>
{showLogin && <Login/> }

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/result' element={<Result/>}/>
      <Route path='/buy' element={<BuyCredit/>}/>

    </Routes>

      <Footer/>
    </div>
  )
}

export default App
