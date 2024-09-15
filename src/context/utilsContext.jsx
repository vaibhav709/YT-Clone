import {  createContext, useContext, useState } from "react";

const UtilsContext = createContext();

export const UtilsContextProvider = ({children}) =>{


    const [isSidebar, setSidebar] = useState(false)
    const [mobileShow, setMobileShow] = useState(false)

    return(

        <utilsContext.Provider value={{isSidebar, setSidebar, mobileShow, setMobileShow}} >
            {children}
        </utilsContext.Provider>
    )
}

export const useUtils = () =>{
    const utilsContext = useContext(UtilsContext);

    if(!utilsContext) return null;
    return utilsContext; 
}