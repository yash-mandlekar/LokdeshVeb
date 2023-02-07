import React, { Profiler, useEffect, useState } from "react";
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
import UserPhotoUpload from "./Components/Pages/User/UserActions/UserPhotoUpload.jsx";
import Mailer from "./Components/Mail/mailer";
import Categories from "./Components/Category/Categories";
import LocationEpaper from "./Components/Pages/Epaper/LocationEpaper";
import FullScreenPaper from "./Components/Pages/Epaper/FullScreenPaper";
import SingleVideo from "./Components/Pages/Video/SingleVideo";
import Timer from "./Components/Timer/Timer";
import Language from "./Components/Pages/Language/Language.jsx";
import UserWall from "./Components/Pages/User/Userwall";
import UserPhotos from "./Components/Pages/User/UserActions/UsersPhoto.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadCategories } from "./Store/Actions/Categories";
import { loadShorts } from "./Store/Actions/Shorts";
import { loadUser } from "./Store/Actions/User";
import { loadNews } from "./Store/Actions/News";
import Mynews from "./Components/Pages/User/UserActions/Mynews";
import UserSinglePosts from "./Components/Pages/User/UserActions/UserSinglePosts";
import Findfriends from "./Components/Pages/User/Profile/Findfriends";
import UserEditProfile from "./Components/Pages/User/editP";
const App = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (!lang) {
      localStorage.setItem("language", "hi");
    }
    Notification.requestPermission();
    dispatch(loadCategories());
    dispatch(loadShorts());
    dispatch(loadUser());
  }, []);
  return (
    <div>
      <BrowserRouter>
        {!loading && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/video" element={<Video />} />
          <Route path="/Epaper" element={<Epaper />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/feedback" element={<Mailer />} />
          <Route path="/:category" element={<Categories />} />
          <Route path="/epaper/:city" element={<LocationEpaper />} />
          <Route path="/web/:id" element={<FullScreenPaper />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Timer" element={<Timer />} />
          <Route path="/singleVideo/:id" element={<SingleVideo />} />
          <Route path="/userwall" element={<UserWall />} />
          <Route path="/user/photoupload" element={<UserPhotoUpload />} />
          <Route path="/mynews" element={<Mynews />} />
          <Route path="/Language" element={<Language />} />
          <Route path="/singlepost/:id" element={<UserSinglePosts />} />
          <Route path="/user/editprofile" element={<UserP />} />
          <Route path="/findfriends" element={<Findfriends />} />
          <Route path="/usersphotos" element={<UserPhotos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
