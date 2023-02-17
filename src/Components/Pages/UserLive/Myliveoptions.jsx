import React from "react";
import { Link } from "react-router-dom";
import "./myliveoptions.css";

const Myliveoptions = () => {
  return (
    <>
      <div className="myliveoptions">
        <div className="myoptionsleft">
          <h1>Created live video</h1>
          <button >
          <Link to="/"> <i class="bi bi-camera-video-fill"></i> Home</Link>
          </button>
          <div className="myoptionsleftDiv">
            <div className="myoptionsDivprofile">
              <img src="" alt="" />
            </div>
            <h4>abhay singh</h4>
          </div>
        </div>
        <div className="myoptionsright">
          <h1>Welcome back, Navya!</h1>
          <h3>Going live is easy in a few simple steps</h3>
          <div className="myoptionsrightbottom">
            <div className="myoptionsrightbottomleft">
              <h1>
                <i class="bi bi-camera-reels"></i>
              </h1>
              <h4>Go live</h4>
              <h5>
                <i class="bi bi-people-fill"></i> Go live by yourself or with
                others
              </h5>
              <h5>
                <i class="bi bi-clock"></i>&nbsp;    Go live now or automatically within
                24 hours
              </h5>
              <h5>
                <i class="bi bi-clock"></i> &nbsp;Add interactivity tools to
                keep your audience engaged
              </h5>
              <button>select</button>
            </div>
            <div className="myoptionsrightbottomleft">
              <h1 className="calender">
              <i class="bi bi-calendar2-event"></i>
              </h1>
              <h4>Create live video request to admin</h4>
              <h5>
                <i class="bi bi-people-fill"></i> admin can respond to your event
              </h5>
              <h5>
              <i class="bi bi-newspaper"></i>&nbsp;    Your live video will be available in LokdesdhTV 
              </h5>
              <h5>
              <i class="bi bi-alarm"></i> &nbsp;We'll remind you about your live
              </h5>
              <button>select</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myliveoptions;
