import { WindowSizeProvider } from "./windowSize";
import { TokenInfoProvider } from "./tokenInfo";

const providers = ({ children }) => {

  return( 
    <TokenInfoProvider>
      <WindowSizeProvider>
        {children}
      </WindowSizeProvider>
    </TokenInfoProvider>
    )
    
};

export default providers;
