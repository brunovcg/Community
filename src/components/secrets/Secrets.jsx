import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../providers/authentication/Authentication";
import { Container } from "./styles";
import Button from "../button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const Secrets = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@community/token")) || ""
  );

  const [userId] = useState(
    JSON.parse(localStorage.getItem("@community/userId")) || ""
  );

  const [userEmail] = useState(
    JSON.parse(localStorage.getItem("@community/userEmail")) || ""
  );

  const { authenticated } = useAuth();

  const [secrets, setSecrets] = useState([]);

  const [add, setAdd] = useState(true);

  const secretsConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const handleAdd = () => {
    setAdd(!add);
  };

  const getSecrets = () => {
    api()
      .get(`/user/${userId}/secrets/`, secretsConfig)
      .then((response) => {
        setSecrets(response.data);
      });
  };

  useEffect(() => {
    if (authenticated) {
      getSecrets();
    }
  }, [authenticated]);

  const formSchema = yup.object().shape({
    name: yup.string().required("write something!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const postSecrets = ({ name }) => {
    const user = { name, userId: userId, userName: userEmail };
    api()
      .post(`/user/${userId}/secrets`, user)
      .then((response) => {
        getSecrets();
        alert(`Did IT!`);
        reset();
        handleAdd();
      })
      .catch((_) => alert("Something went wrong, try again!"));
  };

  return (
    <Container>
      <div className="headerButton">
        <Button setColor="var(--red)" setSize="large" click={handleAdd}>
          + Secret
        </Button>
        <div className={add ? "hidden" : "add"}>
          <form onSubmit={handleSubmit(postSecrets)}>
            <input
              placeholder="What's the secret?"
              {...register("name")}
              name="name"
            />
            <div className="errors">{errors.name?.message}</div>

            <Button
              setColor={"var(--dark-grey)"}
              setSize={"large"}
              type="submit"
            >
              add
            </Button>
          </form>
        </div>
      </div>
      {secrets.map((sec, index) => (
        <div className="secretCard" key={index}>
          <p>
            Secret: <span>{sec.name}</span>
          </p>
          <p>
            User: <span>{sec.userName}</span>
          </p>
        </div>
      ))}
    </Container>
  );
};
