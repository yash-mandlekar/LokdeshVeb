import Debate from "./Debate";
import "../Home/Home.css";
import Category from "./Category";
import News from "./Livenews";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadNews());
  }, [dispatch]);
  return (
    <>
      <div
        className="d-flex mt-5"
        style={{
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
          color: `${theme === "light" ? "black" : "white"}`,
        }}
      >
        <Category />
        <Debate show={true} />
        <News />
      </div>
    </>
  );
};

export default Home;
