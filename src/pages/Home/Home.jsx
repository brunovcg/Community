import Button from "../../components/button/Button";
import { Container } from "./styles";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/authentication/Authentication";

export const Home = () => {
  const history = useHistory();

  const {authenticated} = useAuth()

  if(authenticated) {
    return <Redirect to="/dashboard"/>
}

  const handleHistory = (path) => {
    return history.push(path);
  };

  return (
    <Container>
      <div className="transparentBox">
        <div className="headerBox">
          <h1>Community</h1>
        </div>

        <div className="descriptionBox">
          <p>Share your hobbies, keep your secrets..</p>
        </div>

        <div className="buttonBox">
          <Button
            setFontColor="var(--dark-grey)"
            setColor="var(--white)"
            setSize="huge"
            click={() => handleHistory("/userform")}
          >
            Start Now
          </Button>
        </div>
      </div>
    </Container>
  );
};
