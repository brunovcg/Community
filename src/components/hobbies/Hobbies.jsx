import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useTokenInfo } from "../../providers/tokenInfo";
import { Container } from "./styles";
import Button from "../button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const Hobbies = ({selection, userHobbies}) => {

    const token = JSON.parse(localStorage.getItem("@community/token"));

    const { userId, userEmail } = useTokenInfo();

    const [hobbies, setHobbies] = useState([]);

    const [add, setAdd] = useState(false);

    const hobbiesConfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    };

    const handleAdd = () => {
        setAdd(!add);
    };

    const getHobbies = () => {

        api()
          .get(`/hobbies`, hobbiesConfig)
          .then((response) => {
            setHobbies(
               
                response.data 
            );
          });

      };
    
      useEffect(() => {
        getHobbies();
      }, [hobbies, selection]);


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

      const postHobbies = ({ name }) => {
        const user = { name, userId: userId, userName: userEmail };
        api()
          .post(`/hobbies`, user, hobbiesConfig)
          .then((response) => {
            alert(`Did IT!`);
            reset();
            handleAdd();
          })
          .catch((_) => alert("Something went wrong, try again!"));
      };




  return (
    <Container>
      <div className="headerButton">
        <Button setColor="var(--green)" setSize="large" click={handleAdd}>
          + Hobbies
        </Button>
        <div className={add ? "hidden" : "add"}>
          <form onSubmit={handleSubmit(postHobbies)}>
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
      { selection === "All" ?
            
            hobbies.map((sec) => (
              <div className="hobbieCard">
                <p>
                  Hobbie: <span>{sec.name}</span>
                </p>
                <p>
                  User: <span>{sec.userName}</span>
                </p>
              </div>))
        : 
        hobbies.filter(it=>it.userName===selection).map((sec) => (
            <div className="hobbieCard">
              <p>
                Hobbie: <span>{sec.name}</span>
              </p>
              <p>
                User: <span>{sec.userName}</span>
              </p>
            </div>))
      }
    </Container>
  );
};
