import React from "react";
import { Link } from "react-router-dom";
import "./user.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Axios from "../../Axios/Axios";
import { useEffect } from "react";
import { useState } from "react";
const UserProfile = () => {
  const { user, loading } = useSelector((state) => state.auth);
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
    setPosts(data.post.posts);
    console.log(data.post.posts);
    setPostloading(false);
  };
  useEffect(() => {
    getposts();
  }, []);
  return (
    <div>
      <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                // src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"
                src={
                  user?.profileImage?.includes("http")
                    ? user?.profileImage
                    : `data:video/mp4;base64,${user?.profileImage}`
                }
                alt=""
              />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{user?.username}</h1>
              <button className="follow-unfollow">follow</button>
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

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span className="visually-hidden">Likes:</span>
                        <i className="bi bi-heart-fill"></i>
                        {post?.likes?.length}
                      </li>
                      <li className="gallery-item-comments">
                        <span className="visually-hidden">Comments:</span>
                        <i className="bi bi-chat-fill"></i>
                        {post?.comments?.length}
                      </li>
                    </ul>
                  </div>
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
