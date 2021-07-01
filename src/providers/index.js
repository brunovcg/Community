import { WindowSizeProvider } from "./windowSize";
import { TokenInfoProvider } from "./tokenInfo";
import { AuthProvider } from "./authentication/Authentication";

const providers = ({ children }) => {

  return( 
    <AuthProvider>
      <TokenInfoProvider>
        <WindowSizeProvider>
          {children}
        </WindowSizeProvider>
      </TokenInfoProvider>
    </AuthProvider>
    )
    
};

export default providers;
