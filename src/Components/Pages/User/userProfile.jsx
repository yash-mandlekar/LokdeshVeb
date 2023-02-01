import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";
import { useSelector } from "react-redux";
import Axios from "../../Axios/Axios";
import { useEffect } from "react";
import { useState } from "react";
const UserProfile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [postloading, setPostloading] = useState(true);
  const getposts = async () => {
    setPostloading(true);
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    const { data } = await Axios.get("/user/post", config);
    console.log(data.user.posts);
    setPosts(data.user.posts);
    setPostloading(false);
  };
  const handleFollow = async (id) => {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    const { data } = await Axios.put(
      "/user/followRequest/" + id,
      { userId: user._id },
      config
    );
    console.log(data);
  };
  useEffect(() => {
    if (user) {
      getposts();
    } else {
      navigate("/login");
    }
  }, [loading]);
  return (
    <div>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src={
                  user?.profileImage?.includes("/avtar")
                    ? user?.profileImage
                    : `data:video/mp4;base64,${user?.profileImage}`
                }
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{user?.userName}</h1>
              {/* <button
                className="follow-unfollow"
                onClick={() => handleFollow()}
              >
                follow
              </button> */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-prmimary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
                <ul className="dropdown-menu drop-profile">
                  <li>
                    <a className="dropdown-item" href="/userwall">
                      मेरी पोस्ट
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/mynews">
                      स्थानीय समाचार साझा करना
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/UserP"}>
                      संपादन करना
                    </Link>
                  </li>
                </ul>
              </div>

              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              >
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">
                    {user?.posts.length}
                  </span>{" "}
                  posts
                </li>
                <li>
                  <span className="profile-stat-count">
                    {user?.followers.length}
                  </span>{" "}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {user?.following.length}
                  </span>{" "}
                  following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">{user?.name} </span>
                {user?.bio}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          {postloading ? (
            <div className="loader"></div>
          ) : (
            <div className="gallery">
              {posts?.map((post, i) => (
                <div key={i} className="gallery-item" tabIndex="0">
                  {post.fileType === "image" && (
                    <img
                     onClick={() => navigate(`/singlepost/${post._id}`)}
                      src={
                        post?.file?.includes("http")
                          ? post?.file
                          : `data:video/mp4;base64,${post?.file}`
                      }
                    />
                  )}
                  {post.fileType === "video" && (
                    <video
                      src={
                        post?.file?.includes("http")
                          ? post?.file
                          : `data:video/mp4;base64,${post?.file}`
                      }
                      controls
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
