import axios from "axios";
<<<<<<< HEAD
import { createContext, useState } from "react";
=======
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
>>>>>>> a1f9d79 (Updated Code)
import { toast } from "react-toastify";

export const AppContent = createContext()

export const AppContextProvider = (props)=>{

<<<<<<< HEAD
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);

=======
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

>>>>>>> a1f9d79 (Updated Code)
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

<<<<<<< HEAD
=======
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

>>>>>>> a1f9d79 (Updated Code)
    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
<<<<<<< HEAD
        getUserData
=======
        getUserData,
        showDash,
        setShowDash
>>>>>>> a1f9d79 (Updated Code)
    }

    return (
        <AppContent.Provider value={value}>
            {props.children} 
        </AppContent.Provider>
    )
}