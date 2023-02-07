import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { FcList, IconName } from "react-icons/fc";
import "./user.css";
import Axios from "../../Axios/Axios";
import { loadSingleUser, loadUser } from "../../../Store/Actions/User";
import { loadPosts, deletePost } from "../../../Store/Actions/UserPosts";

const UserProfile = () => {
  const { username } = useParams();
  const CoverRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);
  const { posts, singleUser } = useSelector((state) => state);
  const handleFollow = async (id) => {
    if (user) {
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
    } else {
      alert("please login first");
      navigate("/login");
    }
  };
  useEffect(() => {
    if (user) {
      dispatch(loadPosts());
    }
    if (username === "undefined") {
      navigate("/login");
    } else {
      dispatch(loadSingleUser(username));
    }
  }, [loading]);
  const handleProfileImage = async (e) => {
    const formdata = new FormData();
    formdata.append("profileImage", e.target.files[0]);
    const res = await Axios.post("/user/profile/pic", formdata, {
      headers: {
        token: localStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status == 200) {
      dispatch(loadUser());
    }
  };
  const handleCoverImage = async (e) => {
    const formdata = new FormData();
    formdata.append("coverImage", e.target.files[0]);
    const res = await Axios.post("/user/cover/pic", formdata, {
      headers: {
        token: localStorage.getItem("accessToken"),
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status == 200) {
      dispatch(loadUser());
    }
  };
  return (
    <>
      <div className="userProfile">
        <div className="coverphoto">
          <img
            src={
              singleUser?.user?.coverImage?.includes("/avtar")
                ? singleUser?.user?.coverImage
                : `data:video/mp4;base64,${singleUser?.user?.coverImage}`
            }
            alt=""
          />
          <div
            className="coverphotobutton"
            onClick={() => {
              CoverRef.current.click();
            }}
          >
            <i className="bi bi-camera-fill"></i>
            <h6>Add Cover Photo</h6>
            <input
              type="file"
              name="coverImage"
              onChange={handleCoverImage}
              style={{ display: "none" }}
              ref={CoverRef}
            />
          </div>
        </div>
        <div className="pofilephotodiv">
          <div className="profilephotodivm">
            <div className="profilephoto">
              <img
                src={
                  singleUser?.user?.profileImage?.includes("/avtar")
                    ? singleUser?.user?.profileImage
                    : `data:video/mp4;base64,${singleUser?.user?.profileImage}`
                }
                alt=""
              />
              <div
                className="profileuploadbutton"
                onClick={() => {
                  inputRef.current.click();
                }}
              >
                <i className="bi bi-camera-fill"></i>
                <input
                  type="file"
                  name="profileImage"
                  onChange={handleProfileImage}
                  style={{ display: "none" }}
                  ref={inputRef}
                />
              </div>
            </div>
          </div>
          <div className="profilephototext">
            <h1>{singleUser?.user?.name}</h1>
            <h6>{singleUser?.user?.followers.length} followers</h6>
          </div>
          <div className="addmyprofile">
            {singleUser?.user?._id === user?._id ? (
              <button>
                <Link to={`/user/editprofile`}>edit profile</Link>
              </button>
            ) : (
              <button
                onClick={() => {
                  handleFollow(user?._id);
                }}
                style={{ backgroundColor: "rgb(14, 97, 164)" }}
              >
                {user?.following.includes(singleUser?.user?._id)
                  ? "unfollow"
                  : "follow"}
              </button>
            )}
          </div>
        </div>
        <hr />
        <div className="userprofileinfo">
          <div className="userprofileinfoleft">
            <a href="/userwall">Posts</a>
            <a href="">About</a>
            <a href="">Friends</a>
            <a href="">Photos</a>
          </div>
          <div className="userprofileinforight">
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/mynews">
                    स्थानीय समाचार साझा करना
                  </Link>
                  <Link className="dropdown-item" to={"/UserP"}>
                    संपादन करना
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="userBottompost">
        <div className="userBottompostTop">
          <div className="intro">
            <h1>Intro </h1>
            <button>Add Bio</button>
            <h3>
              <i className="bi bi-house-door"></i> &nbsp;lives in Bhopal, Madhya
              Pradesh
            </h3>
            <button>Edit details</button>
            <button> intrest</button>
          </div>
          <div className="photosTop">
            <div className="photosTop1">
              <h1>Photos</h1>
              <a href="">See all</a>
            </div>
            <div className="allphotos">
              {singleUser?.user?.posts?.map((post, i) => (
                <div key={i} className="allphotos1">
                  <img
                    onClick={() => navigate(`/singlepost/${post._id}`)}
                    key={i}
                    src={`data:video/mp4;base64,${post.file}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="Friends">
            <div className="friends1">
              <h1>Friends</h1>
              <a href="">see all friends</a>
            </div>
            <div className="allfriends">
              <div className="allfriends1">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="allfriends1">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="allfriends1">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
              <div className="allfriends1">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="userBottompostBottom">
          <div className="whatsyoutmind">
            <div className="whatsyoutmindtop">
              <div className="whatsyoutmindtopPhoto">
                <img
                  src={
                    user?.profileImage?.includes("/avtar")
                      ? user?.profileImage
                      : `data:video/mp4;base64,${user?.profileImage}`
                  }
                  alt=""
                />
              </div>
              <input type="text" placeholder="whats on your mind ?" />
            </div>
            <div className="whatsyoutmindbottom">
              <h1>
                <i className="bi bi-camera-video-fill"></i> &nbsp;video
              </h1>
              <h1>
                <i className="bi bi-images"></i> &nbsp;photo/video
              </h1>
              <h1>
                <i className="bi bi-emoji-smile"></i> &nbsp;feelings
              </h1>
            </div>
          </div>
          {singleUser?.user?.posts?.map((post, i) => (
            <div key={i} className="myposts">
              <div className="mypostsTop">
                <div className="mypostsTop1">
                  <img
                    src={
                      user?.profileImage?.includes("/avtar")
                        ? user?.profileImage
                        : `data:video/mp4;base64,${user?.profileImage}`
                    }
                    alt=""
                  />
                </div>
                <div className="mypostsTop2">
                  <h1>{user?.userName} </h1>
                  <h5> {user?.createdAt} </h5>
                </div>
                <div className="mypostsTop3">
                  <div className="btn-group dropstart">
                    <button
                      type="button"
                      className="btn "
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li
                        onClick={() => {
                          dispatch(deletePost(post._id));
                        }}
                      >
                        delete
                      </li>
                      <li>delete again</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mypostsCenter">
                <div className="mypostsCaption">
                  <h3>{post?.caption}</h3>
                </div>
                <div className="mypostsimage">
                  <img
                    onClick={() => navigate(`/singlepost/${post._id}`)}
                    key={i}
                    src={`data:video/mp4;base64,${post.file}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="mypostsBottom">
                <div className="mypostsBottom1">
                  <h1>
                    {" "}
                    <i className="bi bi-heart"></i> 10 Like
                  </h1>
                  <h1>
                    <i className="ri-message-line"></i> comment
                  </h1>
                  <h1>
                    <i className="ri-share-forward-line"></i> share
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
