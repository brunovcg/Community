import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext([]);

export const AuthProvider = ({children}) => {

   
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@community/token"));

        if (token) {
            return  setAuthenticated(true)
        }
    }, [authenticated]);

    return(
        <AuthContext.Provider
            value={{authenticated, setAuthenticated}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);