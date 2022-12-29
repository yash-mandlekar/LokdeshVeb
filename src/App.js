import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Video from "./Components/Pages/Video/Video";
import SingleNews from "./Components/Home/SingleNews";
import Epaper from "./Components/Pages/Epaper/Epaper.jsx";
import Otp from "./Components/Pages/Login/Otp";
import UserProfile from "./Components/Pages/User/userProfile";
import UserP from "./Components/Pages/User/editP";
import Mailer from "./Components/Mail/mailer";
import Categories from "./Components/Category/Categories";
import LocationEpaper from "./Components/Pages/Epaper/LocationEpaper";
import FullScreenPaper from "./Components/Pages/Epaper/FullScreenPaper";
import SingleVideo from "./Components/Pages/Video/SingleVideo";
import Timer from "./Components/Timer/Timer";
import Language from "./Components/Pages/Language/Language.jsx";
// import SingleFeed from "./Components/Pages/User/singleFedd";

const App = () => {
  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (!lang) {
      localStorage.setItem("language", "hi");
    }
    Notification.requestPermission();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<Video />} />
          <Route path="/Epaper" element={<Epaper />} />
          <Route path="/news/:id" element={<SingleNews/>} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/feedback" element={<Mailer />} />
          <Route path="/:category" element={<Categories/>} />
          <Route path="/epaper/:city" element={<LocationEpaper />} />
          <Route path="/web/:id" element={<FullScreenPaper />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/singleVideo/:id" element={<SingleVideo />} />
          <Route path="/UserP" element={<UserP />} />
          <Route path="/Language" element={<Language />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
