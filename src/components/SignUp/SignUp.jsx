import { Container } from "./styles";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useWindowSize } from "../../providers/windowSize";


export const SignUp = () => {

const { windowWidth } = useWindowSize();

  const formSchema = yup.object().shape({

    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email("Invalid E-mail")
        .required("E-mail is required"),
    confirmEmail: yup
        .string()
        .oneOf([yup.ref("email")], "E-mail is not same")
        .email("Invalid E-mail")
        .required("E-mail confirm is required"),
    password: yup
        .string()
        .min(6)
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password is not same")
        .required("Password confirm is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ name, email, password }) => {
 
        const user = { name, email, password };
    api()
      .post("/register", user)
      .then((_) => {
        reset()
        alert(`Thank's for subscribing!`);
      })
      .catch((_) => alert("Something went wrong, try again!"));
  };

  
  return (
    <Container
        windowWidth={windowWidth}
    >
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="formBox">

         <input
            placeholder="What's your name?"
            {...register('name')}
            name="name"
          />
          <div className={"formError"}>
            <p>{errors.name?.message}</p>
          </div>

          <input
            placeholder="What's your e-email?"
            {...register('email')}
            name="email"
          />
          <div className={"formError"}>
            <p>{errors.email?.message}</p>
          </div>

          <input
            placeholder="Confirm your e-email?"
            {...register('confirmEmail')}
            name="confirmEmail"
          />
          <div className={"formError"}>
            <p>{errors.confirmEmail?.message}</p>
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
          <input
            placeholder="Confirm your password"
            {...register('confirmPassword')}
            name="confirmPassword"
            type="password"
          />

          <div className={"formError"}>
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>

        <div className="buttonBox">
          <Button setColor={"var(--dark-grey)"} setSize={"large"} type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </Container>
  );
};
