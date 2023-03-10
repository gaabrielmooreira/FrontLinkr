import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [userAuth, setUserAuth] = useState(localUser !== null ? localUser : {});
    const navigate = useNavigate()

    useEffect(()=>{
      if(localUser === null){
        navigate("/")
      } 
    },[])

    return (
        <AuthContext.Provider
          value={{userAuth, setUserAuth}}
        >
          {children}
        </AuthContext.Provider>
      );
}