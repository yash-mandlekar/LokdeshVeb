import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../Axios/Axios";

const Category = ({ categories, setNewsData, filterNews }) => {
  const navigate = useNavigate();
  const { ThemeRed } = useSelector((state) => state);

  const handleData = async (e) => {
    navigate("/" + e);
    filterNews(e);
  };
  return (
    <div className={`catagory ${ThemeRed === "light" ? "light" : "dark"}`}>
      {categories.map((category, i) => (
        <div
          key={i}
          className="catagoryItem"
          onClick={() => handleData(category.categoryUrl)}
        >
          <ul>
            <li>
              {category.icon && (
                <img
                  src={`data:image/png;base64,${category.icon}`}
                  className="CatgoryLogo"
                />
              )}
              {category.hindiName}
            </li>
          </ul>
        </div>
      ))}
      <Link to="/feedback">
        <div className="feedback">
          <h1>फीडबैक दें</h1>
        </div>
      </Link>
    </div>
  );
};

export default Category;
