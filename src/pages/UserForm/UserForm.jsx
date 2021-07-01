import { Container } from "./styles";
import { Login } from "../../components/Login/Login";
import { SignUp } from "../../components/SignUp/SignUp";
import { useWindowSize } from "../../providers/windowSize";
import Button from "../../components/button/Button";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { useAuth } from "../../providers/authentication/Authentication";
import { Redirect } from "react-router-dom";

export const UserForm = () => {
  const { windowWidth } = useWindowSize();

  const {authenticated} = useAuth()

  

  const [hidden, setHidden] = useState(true);

  const changeDisplay = () => {
    setHidden(!hidden);
  };

  if(authenticated) {
    return <Redirect to="/dashboard"/>
}

  return (
    <Container
        windowWidth={windowWidth}
    >
      <div className="transparentBox">
        <Link to="/"><h1>Community</h1></Link>

        {windowWidth < 500 && (
          <div className="buttonBox">
            <h3>{hidden? "Not registered?" : "Already Subscribed?"}</h3>
            <Button
              setColor={hidden? "var(--blue)" : "var(--red)"}
              setSize="large"
              click={changeDisplay}
            >
              {hidden ? "Login":"Sign Up" }
            </Button>
          </div>
        )}

        {windowWidth > 500 ? (
          <div className="whiteBox">
            <div className="signUpBox">
              <SignUp />
            </div>

            <div className="loginBox">
              <Login />
            </div>
          </div>
        ) : hidden ? (
          <div className="whiteBox">
            <div className="signUpBox">
              <SignUp />
            </div>
          </div>
        ) : (
          <div className="whiteBox">
            <div className="loginBox">
              <Login />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};
