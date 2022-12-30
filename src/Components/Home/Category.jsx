import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterNews } from "../../Store/Actions/News";
const Category = () => {
  const { theme, categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleData = async (e) => {
    navigate("/" + e);
    dispatch(filterNews(e));
  };

  return (
    <div className={`catagory ${theme.theme === "light" ? "light" : "dark"}`}>
      {categories.loading ? (
        <h3>Loading...</h3>
      ) : (
        categories.categories.map((category, i) => (
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
        ))
      )}
      <Link to="/feedback">
        <div className="feedback">
          <h1>फीडबैक दें</h1>
        </div>
      </Link>
    </div>
  );
};

export default Category;
