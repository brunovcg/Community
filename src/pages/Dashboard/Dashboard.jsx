import Button from "../../components/button/Button";
import { useHistory, Redirect } from "react-router-dom";
import { Container } from "./styles";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Secrets } from "../../components/secrets/Secrets";
import { Hobbies } from "../../components/hobbies/Hobbies";
import { useWindowSize } from "../../providers/windowSize";
import { useAuth } from "../../providers/authentication/Authentication";

export const Dashboard = () => {
  const { windowWidth } = useWindowSize();

  const [hidden, setHidden] = useState(true);

  const { authenticated, setAuthenticated } = useAuth();

  const changeDisplay = () => {
    setHidden(!hidden);
  };

  const userEmail = JSON.parse(localStorage.getItem("@community/userEmail"));

  const token = JSON.parse(localStorage.getItem("@community/token"));

  const history = useHistory();

  const [selection, setSelection] = useState("All");

  const [usersHobbies, setUsersHobbies] = useState([]);

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
    return history.push("/");
  };

  const handleSelect = (text) => {
    setSelection(text);
  };

  const hobbiesConfig = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  };

  const getUserHobbies = () => {
    api()
      .get(`/hobbies`, hobbiesConfig)
      .then((response) => {
        setUsersHobbies(response.data);
      })
      .catch(res=>console.log(`Something went wrong! - ${res}`))
      ;
  };

  

  const userNoRepeat = () => {
    return [...new Set(usersHobbies.map((it) => it.userName))];
  };

  useEffect(() => {
    
    if (authenticated){
    getUserHobbies()
    }

  }, [authenticated]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  

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

      {windowWidth < 500 && (
        <div className="buttonBox">
          <h3>Change to..</h3>
          <Button
            setColor={hidden ? "var(--red)" : "var(--green)"}
            setSize="large"
            click={changeDisplay}
          >
            {hidden ? "Secrets" : "Hobies"}
          </Button>
        </div>
      )}

      {windowWidth > 500 ? (
        <main>
          <div className="hobbiesBox">
            <div className="titles">
              <h3>Hobbies</h3>
              <p className="describe">
                Which user you want to check? You can only add to yours
              </p>

              <select
                name="hobbies"
                id="hobbies"
                onChange={(evt) => handleSelect(evt.target.value)}
              >
                <option value="All">All</option>
                {userNoRepeat().map((us, index) => (
                  <option key={index} value={us}>
                    {us}
                  </option>
                ))}
              </select>
            </div>
            <Hobbies
              selection={selection}
              usersHobbies={usersHobbies}
              getUserHobbies={getUserHobbies}
            />
          </div>

          <div className="secretsBox">
            <div className="titles">
              <h3>Secrets</h3>
              <p className="describe">Only you can see your secrets</p>
            </div>
            <Secrets />
          </div>
        </main>
      ) : hidden ? (
        <main>
          <div className="hobbiesBox">
            <h3>Hobbies</h3>
            <p className="describe">
              Which user you want to check? You can only add to yours
            </p>
            <select
              name="hobbies"
              id="hobbies"
              onChange={(evt) => handleSelect(evt.target.value)}
            >
              <option value="All">All</option>
              {userNoRepeat().map((us, index) => (
                <option key={index} value={us}>
                  {us}
                </option>
              ))}
            </select>

            <Hobbies
              selection={selection}
              usersHobbies={usersHobbies}
              getUserHobbies={getUserHobbies}
            />
          </div>
        </main>
      ) : (
        <main>
          <div className="secretsBox">
            <h3>Secrets</h3>
            <p className="describe">Only you can see your secrets</p>
            <Secrets />
          </div>
        </main>
      )}
    </Container>
  );
};
