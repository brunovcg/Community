import { createContext, useState, useContext} from "react";
import jwt_decode from 'jwt-decode';
import { useEffect } from "react";

const TokenInfoContext = createContext([]);

export const TokenInfoProvider = ({ children }) => {
  
    const [token] = useState(JSON.parse(localStorage.getItem('@community/token')) || '')


    const [decodedToken, setDecodedToken] = useState(
        token? jwt_decode(token) : ""
    );


   useEffect(()=> {

        if (token){setDecodedToken( jwt_decode(token))}      

    }, [token])

    const userId = decodedToken.sub

    const userEmail = decodedToken.email

  
  return (
    <TokenInfoContext.Provider value={{userId, userEmail, token}}>
      {children}
    </TokenInfoContext.Provider>
  );
};

export const useTokenInfo = () => useContext(TokenInfoContext);
