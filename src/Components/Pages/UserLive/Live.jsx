import React from "react";
import "./Live.css";

const Live = () => {
  return (
    <>
      <div className="Liveuser">
        <div className="liveuservideo">
          <video src=""></video>
          <div className="liveuservideofeatures">
            <div className="liveuservideofeaturesTop">
              <div className="liveuservideofeaturesTopLeft">
                <div className="liveuservideofeaturesTopLeftphoto">
                  <img src="" alt="" />
                </div>
              </div>
              <div className="liveuservideofeaturesTopLeftName">
                <h3>Username</h3>
              </div>
            </div>
            <div className="liveuservideofeaturesMiddle"></div>
            <div className="liveuservideofeaturesBottom">
              <div className="liveuservideofeaturesBottomleft">
                <div className="liveuservideofeaturesBottomleftmute1">
                  <div className="liveuservideofeaturesBottomleftmute">
                    <i class="bi bi-mic"></i>
                  </div>
                  <div className="liveuservideofeaturesBottomleftmute2">
                    <i class="bi bi-mic-mute-fill"></i>
                  </div>
                </div>
                <div className="liveuservideofeaturesBottomleftmute11">
                  <div className="liveuservideofeaturesBottomleftcammera">
                    <i class="bi bi-camera-video"></i>
                  </div>
                  <div className="liveuservideofeaturesBottomleftcammera1">
                    <i class="bi bi-camera-video-off-fill"></i>
                  </div>
                </div>
              </div>
              <div className="liveuservideofeaturesBottomRight">
                <div className="liveuservideofeaturesBottomRightclose">
                  <i class="bi bi-x-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Live;
