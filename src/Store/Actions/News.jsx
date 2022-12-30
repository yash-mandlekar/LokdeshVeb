import Axios from "../../Components/Axios/Axios";

export const loadNews = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadNewsRequest",
    });
    const res = await Axios.get("/all/news", {
      withCredentials: true,
    });
    dispatch({
      type: "loadNewsSuccess",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "loadNewsFail",
      payload: error.response.data.message,
    });
  }
};

export const filterNews = (category) => async (dispatch) => {
  try {
    dispatch({
      type: "filterNewsRequest",
    });
    const lang = localStorage.getItem("language");
    const FilteredNews = [];
    const { data } = await Axios.get(`/news/categoryName/${category}`, {
      withCredentials: true,
    });
    for (var i = 0; i < data.length; i++) {
      const res2 = await Axios.post("/user/translate", {
        text: data[i].metaTitle,
        text2: data[i].metaDescription,
        text3: data[i].shortDescription,
        text4: data[i].location,
        text5: "शेयर",
        target: lang,
      });
      FilteredNews.push({
        ...data[i],
        metaTitle: res2.data.translation,
        metaDescription: res2.data.translation2,
        shortDescription: res2.data.translation3,
        location: res2.data.translation4,
        share: res2.data.translation5,
      });
    }
    dispatch({
      type: "filterNewsSuccess",
      payload: FilteredNews,
    });
  } catch (error) {
    dispatch({
      type: "filterNewsFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await Axios.get("/logout", {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
