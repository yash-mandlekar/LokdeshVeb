import React, { useRef } from "react";
import "./video.css";
import ReactPlayer from "../../ReactPlayer/ReactPlayer";
import { RWebShare } from "react-web-share";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadShort } from "../../../Store/Actions/Shorts";

const Video = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shorts } = useSelector((state) => state);
  const playerRef = useRef(null);
  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };
  const handleSingleVideo = (id) => {
    navigate(`/singleVideo/${id}`);
  };
  return (
    <div>
      <div className="vid">
        <div className="large-Logo">
          <img
            src="https://images.unsplash.com/photo-1605367031760-5522b8a52756?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="reels">
          {shorts.loading ? (
            <h1>Loading...</h1>
          ) : (
            shorts.shorts.map((item, i) => (
              <div className="all-reels" key={i}>
                <div
                  className="lol"
                  onClick={() => handleSingleVideo(item._id)}
                >
                  <ReactPlayer
                    className="reel-videojs"
                    options={{
                      autoplay: true,
                      controls: true,
                      responsive: true,
                      fluid: true,
                      sources: [
                        {
                          src: `data:video/mp4;base64,${item.file}`,
                          type: "video/mp4",
                        },
                      ],
                    }}
                    onReady={handlePlayerReady}
                  />
                </div>
                <div className="allreelsOverlay2"></div>

                <div className="allreelsOverlay">
                  <RWebShare
                    data={{
                      text: "Lokdesh/shots",
                      url: `http://lokdeshtv.com/SingleVideo/${item._id}`,
                    }}
                    onClick={() => console.log("shared successfully!")}
                  >
                    <button>
                      <i className="bi bi-cursor"></i>
                    </button>
                  </RWebShare>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
