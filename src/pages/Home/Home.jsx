import Button from "../../components/button/Button";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

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
