import Axios from "../../Components/Axios/Axios";

export const GetUser = () => {
  return {
    type: "GET_USER",
    payload: Axios.get("/user"),
  };
};
