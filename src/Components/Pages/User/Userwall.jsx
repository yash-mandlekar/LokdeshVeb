import React, { useEffect } from "react";
import Axios from "../../Axios/Axios";
import UserwallNavbar from "./UserActions/userNavbar";
import "./serWall.css";

const Userwall = () => {
  useEffect(() => {
    getposts();
  }, []);
  const getposts = async () => {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    const res = await Axios.get("/user/post", config);
    console.log(res);
  };
  return (
    <>
      <UserwallNavbar />
    
    </>
  );
};

export default Userwall;
