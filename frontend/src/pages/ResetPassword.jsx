<<<<<<< HEAD
import React from 'react'

const ResetPassword = () => {
  return (
    <div>ResetPassword</div>
=======
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import e from 'cors'
import { toast } from 'react-toastify'

const ResetPassword = () => {

  const {backendUrl} = useContext(AppContent)
  axios.defaults.withCredentials = true

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [isEmailSent, setIsEmailSent] = useState("")
  const [otp, setOtp] = useState(0)
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false)

  const inputRefs = React.useRef([])

  const handleInput = (e,index) =>{
    if(e.target.value.length > 0 && index< inputRefs.current.length -1){
      inputRefs.current[index+1].focus()
    }
  }
  const handleKeyDown = (e,index) => {
    if(e.key === 'Backspace' && e.target.value === '' && index>0){
      inputRefs.current[index-1].focus()
    }
  }
  const hadlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if(inputRefs.current[index]){
        inputRefs.current[index].value = char;
      }
    })
    inputRefs.current[inputRefs.current.length -1].focus();
  }
  const onSubmitHandler = async (e) => {
    try{
      e.preventDefault();
      const otpArray = inputRefs.current.map(e=> e.value)
      const otp = otpArray.join('')

      const {data} = await axios.post(backendUrl + '/api/auth/verify-account' ,{otp})

      if(data.success) {
        toast.success(data.message) 
        getUserData()
        navigate('/')
      }else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  }
  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post(backendUrl + '/api/auth/send-reset-otp',{email})
      if(data.success) {
        toast.success(data.message)
        setIsEmailSent(true)
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  }
  const onSubmitOTP = async (e) => {
    e.preventDefault()
    const otpArray = inputRefs.current.map(e => e.value)
    setOtp(otpArray.join(''))
    setIsOtpSubmitted(true)
  }
  const onSubmitNewPassword = async (e) => {
    e.preventDefault()
    try{
      const {data} = await axios.post(backendUrl+ '/api/auth/reset-password',{email,otp,newPassword})
      if(data.success) {
        toast.success(data.message)
        navigate('/login')
      }
      else{
        toast.error(data.message)
      }
    }catch(error){

    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400'>
      <img onClick={()=>navigate('/')} src={assets.logo_bg} alt="" className='absolute left-5 sm:left-20 top-5 w-10 sm:w-10 cursor-pointer' />
      
      
      
      {!isEmailSent && 
      <form onSubmit={onSubmitEmail} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 class='text-white text-2xl font-semibold text-center mb-4'>Reset password</h1>
        <p class='text-center mb-6 text-indigo-300'>Enter your registered email</p>
        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
          <img src={assets.mail_icon} alt="" className='w-3 h-3'/>
          <input type="email" placeholder='Email id ' className='bg-transparent outline-none text-white' value={email} onChange={e => setEmail(e.target.value)} required/>
        </div>
        <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium'>Submit</button>
      </form>
      }

      {!isOtpSubmitted && isEmailSent &&
      <form onSubmit={onSubmitOTP}  class='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
      <h1 class='text-white text-2xl font-semibold text-center mb-4'>Reset password OTP</h1>
      <p class='text-center mb-6 text-indigo-300'>Enter the 6-digit code sent to your email id.</p>
      <div className='flex justify-between mb-8' onPaste={hadlePaste}>
      {Array(6).fill(0).map((_, index) => (
        <input 
          type="text" 
          maxLength='1' 
          key={index} 
          required
          className='w-12 h-12 bg-[#333A5C] text-white text-center text-x1 rounded-md'
          ref={e => inputRefs.current[index] = e}
          onInput={(e) => handleInput(e,index)}
          onKeyDown={(e) => handleKeyDown(e,index)}
        />
      ))}
      </div>
      <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white'>Submit</button>
      </form>
      }


    {isOtpSubmitted && isEmailSent &&
     <form onSubmit={onSubmitNewPassword} className='bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm'>
        <h1 class='text-white text-2xl font-semibold text-center mb-4'>New password</h1>
        <p class='text-center mb-6 text-indigo-300'>Enter your new password below</p>
        <div className='mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]'>
          <img src={assets.lock_icon} alt="" className='w-3 h-3'/>
          <input type="password" placeholder='Password ' className='bg-transparent outline-none text-white' value={newPassword} onChange={e => setNewPassword(e.target.value)} required/>
        </div>
        <button className='w-full py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium'>Submit</button>
      </form>
    }

    </div>
>>>>>>> a1f9d79 (Updated Code)
  )
}

export default ResetPassword