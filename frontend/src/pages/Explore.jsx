import React from 'react'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'


const Explore = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="flex justify-center pt-20">
        <Feed />
      </div>
    </div>
  )
}

export default Explore