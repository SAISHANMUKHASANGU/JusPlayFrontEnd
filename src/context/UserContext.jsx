import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


export const UserContext = createContext();

export const UserProvider=({children})=>{
    const [login,setLogin]=useState(localStorage.getItem("logins"))
    const [ownerlogin,setOwnerlogin]=useState(localStorage.getItem("ownerlogins"))
    return(
        <>
            <UserContext.Provider value={{login,setLogin,ownerlogin,setOwnerlogin}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export const userConsumer=()=>useContext(UserContext);