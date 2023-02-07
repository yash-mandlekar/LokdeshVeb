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
        <>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
          <div className="carder">
            <ul>
              <li>
                <div
                  // src={`https://images.unsplash.com/photo-1675416757203-c6a85eb8134d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60`}
                  className="carderLogo"
                ></div>
                <div className="carderTitle"></div>
              </li>
            </ul>
          </div>
        </>
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
