import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./Reducers/UserRed";
import { newsReducer } from "./Reducers/NewsRed";
import { themeReducer } from "./Reducers/ThemeRed";
import { categoriesReducer } from "./Reducers/CategoriesRed";
import { shortsReducer } from "./Reducers/ShortsRed";
const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    theme: themeReducer,
    categories: categoriesReducer,
    shorts: shortsReducer,
  },
});

export default store;
