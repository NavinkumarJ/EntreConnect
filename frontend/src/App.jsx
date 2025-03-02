import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import EmailVerify from './pages/EmailVerify'
import ResetPassword from './pages/ResetPassword'
import { ToastContainer } from 'react-toastify';
<<<<<<< HEAD
=======
import Explore from './pages/Explore'
import AllPost from './pages/AllPost'
import Contact from './pages/Contact'
import About from './pages/About'
>>>>>>> a1f9d79 (Updated Code)


const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email-verify' element={<EmailVerify/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
<<<<<<< HEAD
=======
        <Route path='/explore' element={<Explore/>} />
        <Route path='/all-ideas' element={<AllPost/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
>>>>>>> a1f9d79 (Updated Code)
      </Routes>
    </div>
  )
}

export default App