import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "../../../Axios/Axios";
import "./UploadSinglePosts.css";

const UserSinglePosts = () => {
  const {id}= useParams();
  const [Post, setPost] = useState();
  useEffect(() => {
    Datapost();
  }, []);

  const Datapost = async () => {
    const data = await Axios.get(`/user/post/${id}`);
    setPost(data.data.post);
    console.log(data.data.post)
  }
  return (
    <div className="SingleVideo">
      <div className="showSingleVideo">
        <div className="showvideoLeft">
          <img
            src={`data:image/mp4;base64,${Post?.file}`}
            alt=""
          />
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
              <div className="allreelSharwee"></div>
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
            <div className="userComment">
              <div className="userprofileComment"></div>
              <div className="userCommentText">
                <h2>comments</h2>
              </div>
            </div>
          </div>
          <div className="showvideoRightBottom">
            <div className="showvideoRightBottomTop">
              <div className="showvideoRightBottomTopLeft">
                <i className="bi bi-heart"> </i>
                <a>10 Likes</a>
              </div>
              <div className="showvideoRightBottomTopLeftTop">
                <a href="">
                  <i className="bi bi-bookmarks"></i>
                </a>
              </div>
            </div>
            <form
              // onSubmit={handleComment}
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

export default UserSinglePosts;
