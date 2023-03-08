import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({children}){
    const [userInfo, setUserInfo] = useState({});

    return (
        <AuthContext.Provider
          value={{userInfo,setUserInfo}}
        >
          {children}
        </AuthContext.Provider>
      );
}