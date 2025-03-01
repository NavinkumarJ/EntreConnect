import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {

    const {userData,isLoggedin,showDash,setShowDash} = useContext(AppContent)
    const navigate = useNavigate()

    const handleClick = async () => {
      
      if(isLoggedin){
        setShowDash(true)
        navigate('/explore')
      }
      else{
        navigate('/login')
        toast.error("Please Log in")
      }
    }

  return (
    <div className="flex flex-col items-center mt-20 px-4 text-center text-gray-800">
      <img
        src={assets.ban_img}
        alt=""
        className="w-80 h-80 rounded-full mb-6"
      />
      <h1 className="flex items-center gap-2 text-xl sm: text-3x1 font-medium mb-2">
        Hey {userData ? userData.name : "Entrepreneurs and Investors"}!
        <img className="w-8 aspect-square" src={assets.hand_wave} alt="" />
      </h1>
      <h2 className="text-3xl sm:text-5x1 font-semibold mb-4">
        Welcome to EntreConnect
      </h2>
      <p className="mb-8 max-w-md">
      "EnterConnect – Where Ideas Meet Opportunity. Connect. Collaborate. Innovate." 🚀
      </p>
      <button onClick={handleClick}
        className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-100 transition-all"
      >
        Get Started
      </button>
    </div>
  );
};

export default Header;
