import { Container } from "./styles";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { useWindowSize } from "../../providers/windowSize";
import { useTokenInfo } from "../../providers/tokenInfo";
import { useAuth } from "../../providers/authentication/Authentication";


export const Login = () => {

  const { windowWidth } = useWindowSize();

  const {setAuthenticated} = useAuth()

  const {userId, userEmail} = useTokenInfo()

  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid E-mail").required("E-mail is required"),
    password: yup.string().min(6).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const handleHistory = (path) => {
    return history.push(path);
  };

  const addToken = (dataToken) => {
    localStorage.clear()
    localStorage.setItem('@community/token', JSON.stringify(dataToken));

    
  }

  const addUserId = (data1, data2) => {

    localStorage.setItem('@community/userId', JSON.stringify(data1));   
    localStorage.setItem('@community/userEmail', JSON.stringify(data2));  

  }

  const onSubmitFunction = ({ email, password }) => {
    const user = { email, password };
    api()
      .post("/login/", user)
      .then((response) => {
        addToken(response.data.accessToken)
        alert(`Welcome!`)
        handleHistory('/dashboard')
        reset()
        addUserId(userId, userEmail)
        setAuthenticated(true)
        
      })
      .catch((_) => {
        
        alert("Something went wrong, try again!")
        reset()
      });
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
