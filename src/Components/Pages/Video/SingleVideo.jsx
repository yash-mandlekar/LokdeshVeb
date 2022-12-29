import { DotSpinner } from "@uiball/loaders";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Axios from "../../Axios/Axios";
import ReactPlayer from "../../ReactPlayer/ReactPlayer";
import { RWebShare } from "react-web-share";
import "./video.css";
import "./SingleVideo.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SingleVideo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [VideoData, setVideoData] = useState({});
  const [Heart, setHeart] = useState(false);
  const [loader, setLoader] = useState(true);
  const [User, setUser] = useState({});
  useEffect(() => {
    getShort();
    getUser();
  }, []);
  const getShort = async () => {
    setLoader(true);
    try {
      const res = await Axios.get(`/shorts/${id}`);
      setVideoData(res.data);
      setLoader(false);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    try {
      const res = await Axios.post("/user/refreshtoken", {
        token: localStorage.getItem("refreshToken"),
      });
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleHeart = async () => {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    if (localStorage.getItem("accessToken")?.length > 25) {
      // setHeart(!Heart);
      try {
        const res = await Axios.get(`/user/shorts/like/${id}`, config);
        setVideoData({ ...VideoData, likes: res.data.likes });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };
  const handleComment = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    if (localStorage.getItem("accessToken")?.length > 25) {
      try {
        const res = await Axios.post(
          `/user/shorts/comment/${id}`,
          { comment: e.target.comment.value },
          config
        );
        setVideoData({ ...VideoData, comments: res.data.comments });
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="SingleVideo">
      <div className="showSingleVideo">
        <div className="showvideoLeft">
          {loader ? (
            <div className="loader-cnt">
              <DotSpinner size={90} lineWeight={2} speed={0.8} color="white" />
              <h2 style={{ marginTop: "15px" }}>Loading...</h2>
            </div>
          ) : (
            <ReactPlayer
              options={{
                sources: [
                  {
                    src: `data:video/mp4;base64,${VideoData.file}`,
                    type: "video/mp4",
                  },
                ],
              }}
              class="showvideoLeftt"
            />
          )}
        </div>  
        <div className="showvideoRight">
          <div className="showvideoRightTop">
            <div className="showvideoRightTopLeft">
              <img
                src="https://images.unsplash.com/photo-1657299156332-7e1aea73093b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt=""
              />
              <h2 style={{ marginLeft: "10px" }}>लोकदेश</h2>
            </div>
            <div className="showvideoRightTopShare">
              <FacebookShareButton url={`http://lokdeshtv.com/SingleVideo/${id}`}>
                <FacebookIcon className="fbi" size={27} round />
              </FacebookShareButton>

              <WhatsappShareButton url={`http://lokdeshtv.com/SingleVideo/${id}`}>
                <WhatsappIcon className="fbi" size={27} round />
              </WhatsappShareButton>
              <div className="allreelSharwee">
                <RWebShare
                  data={{
                    text: "Lokdesh/shots",
                    url: `http://http://lokdeshtv.com/SingleVideo/${id}`,
                  }}
                  onClick={() => console.log("shared successfully!")}
                >
                  <button>
                    <i className="bi bi-cursor"></i>
                  </button>
                </RWebShare>
              </div>
            </div>
          </div>
          <div className="showvideoRightCenter">
            <div className="VideoDesc">
              <h1>
                महाराष्ट्र में मध्यप्रदेश के मजदूरों से भरी ट्रैक्टर-ट्रॉली
                पलटने से 5 की मौत हो गई। इनमें दो बच्चे हैं। मारे गए लोग सेंधवा
                के कोलकी मांग (जिला बड़वानी) के हैं। मृतकों में दो महिलाएं और एक
                युवती भी शामिल है।
              </h1>
            </div>
            {VideoData?.comments?.map((comment) => (
              <div className="userComment">
                <div className="userprofileComment"></div>
                <div className="userCommentText">
                  <h2>{comment.comment}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="showvideoRightBottom">
            <div className="showvideoRightBottomTop">
              <div
                onClick={handleHeart}
                className="showvideoRightBottomTopLeft"
              >
                {VideoData?.likes?.includes(User?._id) ? (
                  <i style={{ color: "red" }} className="bi bi-heart-fill"></i>
                ) : (
                  <i className="bi bi-heart"> </i>
                )}
                <a>{VideoData?.likes?.length} Likes</a>
              </div>
              <div className="showvideoRightBottomTopLeftTop">
                <a href="">
                  <i className="bi bi-bookmarks"></i>
                </a>
              </div>
            </div>
            <form
              onSubmit={handleComment}
              className="showvideoRightBottomBottom"
            >
              <input
                type="text"
                name="comment"
                placeholder="Add a comment..."
              />
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
