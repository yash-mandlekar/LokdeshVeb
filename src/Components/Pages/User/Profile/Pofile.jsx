import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../Axios/Axios";
import { useSelector } from "react-redux";
import { FcList, IconName } from "react-icons/fc";
import "./Pofile.css";

const Pofile = () => {
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
    }
  }, [loading]);
  console.log(posts);
  return (
    <>
      <main>
        <header></header>
        <div id="profile-upper">
          <div id="profile-banner-image">
            <img
              src="https://images.unsplash.com/photo-1536685868704-82746720c672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2003&q=80"
              alt="Banner image"
            />
          </div>
          <div id="profile-d">
            <div id="profile-pic">
            <img
                src={
                  user?.profileImage?.includes("/avtar")
                    ? user?.profileImage
                    : `data:video/mp4;base64,${user?.profileImage}`
                }
                alt=""
              />
            </div>
            <div id="u-name">{user?.name}</div>
            <div className="tb" id="m-btns">
              <div className="td">
                <div className="m-btn">
                  <i className="bi bi-list"></i>
                  <span>Activity log</span>
                </div>
              </div>
              <div className="td">
                <div className="m-btn">
                  <i className="bi bi-lock"></i>
                  <span>Privacy</span>
                </div>
              </div>
            </div>
            <div id="edit-profile"></div>
          </div>
          <div id="black-grd"></div>
        </div>
        <div id="main-content">
          <div className="tb">
            <div className="td" id="l-col">
              <div className="l-cnt">
                <div className="cnt-label">
                  <i className="l-i" id="l-i-i"></i>
                  <span>Intro</span>
                  <div className="lb-action">
                    <a href="/userp">
                      {" "}
                      <i className="bi bi-pencil-square"></i>
                    </a>
                  </div>
                </div>
                <div id="i-box">
                  <div id="intro-line"> </div>
                  <div id="u-occ">I love making applications with Angular.</div>
                  <div id="u-loc">
                    <i className="bi bi-geo-fill"></i>
                    <a href="#">Bengaluru</a>, <a href="#">India</a>
                  </div>
                </div>
              </div>
              <div className="l-cnt l-mrg">
                <div className="cnt-label">
                  <i className="l-i" id="l-i-p"></i>
                  <span>Photos</span>
                  <div className="lb-action" id="b-i">
                    <i className="bi bi-arrow-down-short"></i>
                  </div>
                </div>
                <div className="photos">
                  <div className="tb">
                    <div className="tr">
                      {posts.map((post, i) => (
                        <img
                        onClick={() => navigate(`/singlepost/${post._id}`)}
                          key={i}
                          src={`data:video/mp4;base64,${post.file}`}
                          alt=""
                          className="td"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-cnt l-mrg"></div>
              <div id="t-box">
                <a href="#">Privacy</a> <a href="#">Terms</a>{" "}
                <a href="#">Advertising</a> <a href="#">Ad Choices</a>{" "}
                <a href="#">Cookies</a>{" "}
                <span id="t-more">
                  More<i className="bi bi-caret-down-fill"></i>
                </span>
                <div id="cpy-nt">
                  Lokdesh &copy; <span id="curr-year"></span>
                </div>
              </div>
            </div>
            <div className="td" id="m-col">
              <div className="m-mrg" id="p-tabs">
                <div className="tb">
                  <div className="td">
                    <div className="tb" id="p-tabs-m">
                      <div className="td active">
                        <i className="bi bi-clock"></i>
                        <span>TIMELINE</span>
                      </div>
                      <div className="td">
                        <i className="bi bi-people"></i>
                        <span>FRIENDS</span>
                      </div>
                      <div className="td">
                        <i className="bi bi-camera2"></i>
                        <span>PHOTOS</span>
                      </div>
                      <div className="td">
                        <i className="bi bi-file-person"></i>
                        <span>ABOUT</span>
                      </div>
                      <div className="td">
                        <i className="bi bi-archive"></i>
                        <span>ARCHIVE</span>
                      </div>
                    </div>
                  </div>
                  <div className="tdic">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-prmimary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-border-width"></i>
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
                  </div>
                </div>
              </div>
              <div className="m-mrg" id="composer">
                <div id="c-tabs-cvr">
                  <div className="tb" id="c-tabs">
                    <div className="td active">
                      <i className="bi bi-list"></i>
                      <span>Make Post</span>
                    </div>
                    <div className="td">
                      <i className="bi bi-camera-fill"></i>
                      <span>Photo/Video</span>
                    </div>
                    <div className="td">
                      <i className="bi bi-camera-video-fill"></i>
                      <span>Live Video</span>
                    </div>
                    <div className="td">
                      <i className="bi bi-calendar-date"></i>
                      <span>Life Event</span>
                    </div>
                  </div>
                </div>
                <div id="c-c-main">
                  <div className="tb">
                    <div className="td" id="p-c-i">
                      <img
                        src="https://imagizer.imageshack.com/img921/3072/rqkhIb.jpg"
                        alt="Profile pic"
                      />
                    </div>
                    <div className="td">
                      <input type="text" placeholder="What's on your mind?" />
                    </div>
                  </div>
                  <div id="insert_emoji">
                    <i className="bi bi-emoji-heart-eyes"></i>
                  </div>
                </div>
              </div>
              <div>
                {posts.map((post, i) => (
                  <div className="post">
                    <div className="tb">
                      <a href="#" className="td p-p-pic">
                        <img
                          onClick={() => navigate(`/singlepost/${post._id}`)}
                          key={i}
                          src={`data:video/mp4;base64,${user?.profileImage}`}
                          alt=""
                        />
                      </a>
                      <div className="td p-r-hdr">
                        <div className="p-u-info">
                          <a href="#">Rajeev Singh</a> shared a memory with{" "}
                          <a href="#">Himalaya Singh</a>
                        </div>
                        <div className="p-dt">
                          <i className="bi bi-calendar-check"></i>
                          &nbsp; &nbsp;<span>January 28, 2015</span>
                        </div>
                      </div>
                      <div className="td p-opt">
                        <i className="bi bi-three-dots"></i>
                      </div>
                    </div>
                    <a href="#" className="p-cnt-v">
                      <img src={`data:video/mp4;base64,${post.file}`} />
                    </a>
                    <div>
                      <div className="p-acts">
                        <div className="p-act like">
                          <i className="bi bi-heart-fill"></i>
                          <span>{post?.likes?.length}</span>
                        </div>
                        <div
                        
                         className="p-act comment"
                         onClick={() => navigate(`/singlepost/${post._id}`)}>
                          
                          <i className="bi bi-chat"></i>
                          <span>{post?.comments?.lenght}</span>
                        </div>
                        <div className="p-act share">
                          <i className="bi bi-share-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="td" id="r-col"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pofile;
