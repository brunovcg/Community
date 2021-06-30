import axios from "axios";

const path = "online"


export const api = () => {
  if (path === "online") {
    return axios.create({ baseURL: "https://brunovcg.herokuapp.com/" });
  } else {
    return axios.create({ baseURL: "http://localhost:3001/" });
  }
};
