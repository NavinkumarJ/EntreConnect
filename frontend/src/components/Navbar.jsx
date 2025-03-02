<<<<<<< HEAD
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full flex justify-between items-centerp-4 sm:p-6 sm:px-24 absolute top-0'>
        <img src={assets.logo} alt="" className='w-10 sm:w-10'/>
        <button onClick={()=>navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>Login <img src={assets.arrow_icon} alt="" /></button>
=======
import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Navbar = () => {
    const navigate = useNavigate()
    const {userData, backendUrl, setUserData, setIsLoggedin,showDash,setshowDash} = useContext(AppContent)
    
    const sendVerificationOtp = async ()=>{
      try {
        axios.defaults.withCredentials = true;
        const {data} = await axios.post(backendUrl + '/api/auth/send-verify-otp')
        if(data.success){
          navigate('/email-verify')
          toast.success(data.message)
        }
        else{
          toast.error(data.message)
        }
      }catch(error){
        toast.error(error.message)
      }
    }
    
    const logout = async()=>{
        try{
            axios.defaults.withCredentials = true
            const {data} = await axios.post(backendUrl+'/api/auth/logout')
            data.success && setIsLoggedin(false)
            data.success && setUserData(false)
            toast.success(data.message)
            navigate('/')
        }catch(error){
            toast.error(error.message)
        }
    }
  return (
    <div className='bg-white w-full flex justify-between items-center sm:p-4 sm:px-20 absolute top-0 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} src={assets.logo_name} alt="" className='w-18 h-10 sm:w-30 cursor-pointer'/>

        {showDash && 
        <ul className="flex space-x-10 items-center">
        {[
          { to: "/explore", label: "EXPLORE" },
          { to: "/all-ideas", label: "ALL IDEAS" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map((nav) => (
          <NavLink
            key={nav.to}
            to={nav.to}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium ${
                isActive
                  ? "rounded-md bg-gray-900 text-white"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            <li>{nav.label}</li>
          </NavLink>
        ))}
      </ul>
        }

        {userData ? 
        <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group'>
        {userData.name[0].toUpperCase()}
        <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
          <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>
            {!userData.isAccountVerified && <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-gray-200 cursor-pointer'>Verify email</li>}
            <li onClick={logout} className='py-1 px-2 hover:bg-gray-200 cursor-pointer pr-10'>Logout</li>
          </ul>
        </div>
        </div>
        :<button onClick={()=>navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'>Login <img src={assets.arrow_icon} alt="" /></button>
        }
>>>>>>> a1f9d79 (Updated Code)
    </div>
  )
}

export default Navbar