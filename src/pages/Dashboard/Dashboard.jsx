import Button from "../../components/button/Button";
import { useHistory } from "react-router-dom";
import { useTokenInfo } from "../../providers/tokenInfo";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Secrets } from '../../components/secrets/Secrets'
import {Hobbies} from '../../components/hobbies/Hobbies'

export const Dashboard = () => {
  const { userEmail} = useTokenInfo();

  const token = JSON.parse(localStorage.getItem("@community/token"));

  const history = useHistory();

  const [selection, setSelection] = useState("All")

  const [usersHobbies, setUsersHobbies] = useState([])


  const handleLogout = () => {
    localStorage.clear();
    return history.push("/");
  };

  const handleSelect = (text) => {

    setSelection(text)

    console.log(text)
  }

  const hobbiesConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
 

//   https://brunovcg.herokuapp.com/user/4/secrets =>> access secrets

// https://brunovcg.herokuapp.com/hobbies =>> hobbies everyone

// https://brunovcg.herokuapp.com/hobbies?usedId=4 =>> hobbies per user filter

  const getUserHobbies = () => {
    api()
    .get(`/hobbies`, hobbiesConfig)
    .then((response) => {
    setUsersHobbies(response.data);
    });


  }

  useEffect(()=>{
    getUserHobbies()
  },[])



  return (
    <Container>
      <header>
        <h1>Community - Dashboard</h1>
        <h2>{`Welcome ${userEmail}`}</h2>
        <div className="buttonBox">
            <Button
            click={handleLogout}
            setColor={"var(--dark-red)"}
            setSize="large"
            >
            Logout
            </Button>
        </div>
      </header>
      <main>
        <div className="hobbiesBox">
            <h3>Hobbies</h3>
            <p className="describe">Which user you want to check? You can only add to yours</p>
            <select name="hobbies" id="hobbies" onChange={(evt)=> handleSelect(evt.target.value)}>
                <option value="All" selected>All</option>
                {usersHobbies.map((us, index)=>
                    <option key={index} value={us.userName}>{us.userName}</option> 
                )}
            </select>

            <Hobbies selection={selection} usersHobbies={usersHobbies}/>
        </div>
        <div className="secretsBox">
            <h3>Secrets</h3>
            <p className="describe">Only you can see your secrets</p>
            <Secrets/>
        </div>

      </main>


    </Container>
  );
};
