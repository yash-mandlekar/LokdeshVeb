import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:4000/",
  // baseURL: "http://52.66.186.55/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default Axios;
