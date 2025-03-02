import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContent = createContext()

export const AppContextProvider = (props)=>{

    axios.defaults.withCredentials = true;

    const location = useLocation();
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [showDash, setShowDash] = useState(false);
    const [userData, setUserData] = useState(false);

    const getAuthState = async ()=> {
        try{
            const {data} = await axios.get(backendUrl+'/api/auth/is-auth');
            if(data.success){
                setIsLoggedin(true);
                getUserData();
                // toast.success(data.message);
            }
        }catch (error) {
            toast.error(error.message);
        }
    }

    const getUserData = async ()=>{
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data');
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        getAuthState();
    },[])

    useEffect(() => {
        if (location.pathname === "/") {
            setShowDash(false); 
        }
        else{
            setShowDash(true);
        }
    }, [location.pathname]);

    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData,
        showDash,
        setShowDash
    }

    return (
        <AppContent.Provider value={value}>
            {props.children} 
        </AppContent.Provider>
    )
}