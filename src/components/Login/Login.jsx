import { Container } from "./styles";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { useWindowSize } from "../../providers/windowSize";

export const Login = () => {

  const { windowWidth } = useWindowSize();

  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid E-mail").required("E-mail is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const handleHistory = (path) => {
    return history.push(path);
  };

  const addToken = (data) => {
    localStorage.setItem('@community/token', JSON.stringify(data));
  }

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    api
      .post("/login/", user)
      .then((response) => {
        addToken(response.data.access)
        handleHistory('/dashboard')
        alert(`Welcome!`);
        return history.push("/login");
      })
      .catch((_) => alert("Something went wrong, try again!"));
  };

  return (
    <Container
        windowWidth={windowWidth}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="formBox">
          <input
            placeholder="What's your e-email?"
            {...register('email')}
            name="email"
          />
          <div className={"formError"}>
            <p>{errors.email?.message}</p>
          </div>

          <input
            placeholder="Set your password"
            {...register('password')}
            name="password"
            type="password"
          />
          <div className={"formError"}>
            <p>{errors.password?.message}</p>
          </div>
        </div>

        <div className="buttonBox">
          <Button setColor={"var(--dark-grey)"} setSize={"large"} type="submit">
            Login
          </Button>
        </div>
      </form>
    </Container>
  );
};
