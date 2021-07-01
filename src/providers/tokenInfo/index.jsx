import { createContext, useState, useContext} from "react";

const TokenInfoContext = createContext([]);

export const TokenInfoProvider = ({ children }) => {
  
    const [token] = useState(JSON.parse(localStorage.getItem('@community/token')) || '')

    const [userId] = useState(JSON.parse(localStorage.getItem('@community/userId')) || '')

    const [userEmail] = useState(JSON.parse(localStorage.getItem('@community/userEmail')) || '')

  
  return (
    <TokenInfoContext.Provider value={{userId, userEmail, token}}>
      {children}
    </TokenInfoContext.Provider>
  );
};

export const useTokenInfo = () => useContext(TokenInfoContext);
