import React, { useEffect, useState } from "react";
import Debate from "./Debate";
import "../Home/Home.css";
import Category from "./Category";
import News from "./Livenews";
import Axios from "../Axios/Axios";
import { Link, Route, Routes } from "react-router-dom";

const Home = ({ theme }) => {
  const [NewsData, setNewsData] = useState([]);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    getNews();
    getCategories();
  }, []);
  const getCategories = async () => {
    const lang2 = localStorage.getItem("language");
    const res = await Axios.get("/news-category");
    const cpy = [];
    for (var i = 0; i < res.data.length; i++) {
      const res2 = await Axios.post("/user/translate", {
        text: res.data[i].hindiName,
        target: lang2,
      });
      cpy.push({
        ...res.data[i],
        hindiName: res2.data.translation,
      });
    }
    setcategories(cpy);
  };
  const getNews = async () => {
    const lang2 = localStorage.getItem("language");
    const res = await Axios.get("/all/news");
    const cpy = [];
    for (var i = 0; i < res.data.length; i++) {
      const res2 = await Axios.post("/user/translate", {
        text: res.data[i].metaTitle,
        text2: res.data[i].metaDescription,
        text3: res.data[i].shortDescription,
        text4: res.data[i].location,
        text5: "शेयर",
        target: lang2,
      });
      cpy.push({
        ...res.data[i],
        metaTitle: res2.data.translation,
        metaDescription: res2.data.translation2,
        shortDescription: res2.data.translation3,
        location: res2.data.translation4,
        share: res2.data.translation5,
      });
    }
    setNewsData(cpy);
  };
  const filterNews = async (e) => {
    const lang2 = localStorage.getItem("language");
    const res = await Axios.get(`/news/categoryName/${e}`);
    const cpy = [];
    for (var i = 0; i < res.data.length; i++) {
      const res2 = await Axios.post("/user/translate", {
        text: res.data[i].metaTitle,
        text2: res.data[i].metaDescription,
        text3: res.data[i].shortDescription,
        text4: res.data[i].location,
        text5: "शेयर",
        target: lang2,
      });
      cpy.push({
        ...res.data[i],
        metaTitle: res2.data.translation,
        metaDescription: res2.data.translation2,
        shortDescription: res2.data.translation3,
        location: res2.data.translation4,
        share: res2.data.translation5,
      });
    }
    setNewsData(cpy);
  };
  return (
    <>
      <div
        className="d-flex mt-5"
        style={{
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
          color: `${theme === "light" ? "black" : "white"}`,
        }}
      >
        <Category
          theme={theme}
          categories={categories}
          setNewsData={setNewsData}
          filterNews={filterNews}
        />
        <Debate NewsData={NewsData} theme={theme} show={true} />
        <News NewsData={NewsData} theme={theme} />

        
      </div>
    </>
  );
};

export default Home;
