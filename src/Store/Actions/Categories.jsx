import Axios from "../../Components/Axios/Axios";

export const loadCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadCategoriesRequest",
    });
    const res = await Axios.get("/news-category", {
      withCredentials: true,
    });
    dispatch({
      type: "loadCategoriesSuccess",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "loadCategoriesFail",
      payload: error.response.data.message,
    });
  }
};
