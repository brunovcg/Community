import { Container } from "./styles";
import { Link } from "react-router-dom";
import homePng from "../../assets/home.png";

export const PageNotFound = () => {
  return (
    <Container>
      <h2>Page not found!</h2>
      <Link to="/">
        <figure>
          <img src={homePng} alt={"home"} />
        </figure>
      </Link>
    </Container>
  );
};
