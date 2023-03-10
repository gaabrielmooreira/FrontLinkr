import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const localUser = JSON.parse(localStorage.getItem("user"))
    const [userAuth, setUserAuth] = useState(localUser !== null ? localUser : {});


  

    return (
        <AuthContext.Provider
          value={{userAuth, setUserAuth}}
        >
          {children}
        </AuthContext.Provider>
      );
}