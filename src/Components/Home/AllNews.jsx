import moment from "moment";
import React from "react";
import Footer from "../Footer/Footer";

import { Link, useNavigate } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import ReactPlayer from "../ReactPlayer/ReactPlayer";

const SingleNews = ({ theme, NewsData, handlePlayerReady }) => {
  // const shareUrl = "";
  const navigate = useNavigate();
  return (
    <>
      {NewsData.map(
        (e, i) =>
          e.showInSlider.toLowerCase() === "false" && (
            <div
              key={i}
              className={
                theme === "light" ? "TrendingNews" : "TrendingNewsDark"
              }
            >
              <div className="TrendingNewsLeft">
                <div className="TrendingNewsLeftImg">
                {e.fileType === "video" && (

                  <div 
                    style={{
                      width: "100%",
                      
                    }}
                  >
                    <ReactPlayer
                      options={{
                        controls: true,
                        responsive: true,
                        fluid: true,
                        sources: [
                          {
                            src: `data:video/mp4;base64,${e.file}`,
                            type: "video/mp4",
                          },
                        ],
                      }}
                      onReady={handlePlayerReady}
                    />
                  </div>
                  )}

                  {e.fileType === "image" && (
                    <div
                      className="Trendingimage"
                      onClick={() => navigate(`/news/${e._id}`)}
                    >
                      <img src={`data:image/jpg;base64,${e.file}`} alt="" />
                    </div>
                  )}

                  <div
                    className={
                      theme === "light"
                        ? "TrendingNewsLeftIcons"
                        : "TrendingNewsLeftIconsDark"
                    }
                  >
                    {/* {SingleData.file} */}

                    <FacebookShareButton url={`http://lokdeshtv.com/news/${e._id}`}>
                      <FacebookIcon size={26} round />
                    </FacebookShareButton>

                    <TwitterShareButton url={`http://lokdeshtv.com/news/${e._id}`}>
                      <TwitterIcon size={26} round />
                    </TwitterShareButton>

                    <WhatsappShareButton url={`http://lokdeshtv.com/news/${e._id}`}>
                      <WhatsappIcon size={26} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              <div
                className="TrendingNewsRight"
                onClick={() => navigate(`/news/${e._id}`)}
              >
                <h1
                  style={{ color: `${theme === "light" ? "black" : "white"}` }}
                >
                  <span className={`red`}></span>
                  {e.metaTitle.slice(0, 280)} ..
                </h1>
                <br />
                {/* <h6
                  style={{
                    color: `${theme === "light" ? "black" : "#b1b1b1"}`,
                  }}
                >
                  {e.metaDescription.slice(0, 200)}...
                </h6> */}
                {/* <h4>{moment
                      .utc(new Date(e.createdAt).toLocaleString())
                      .local()
                      .startOf("seconds")
                      .fromNow()} ago</h4> */}
                <h3>
                 
                  <span> {e.location}</span>
                </h3>
              </div>
            </div>
            
          )
          
      )}
      <div className="FeedbackPhone">
      <Link to="/feedback">
        <h1><i className="bi bi-pencil-square"></i></h1>
      </Link>
      </div>
      
    </>
  );
};

export default SingleNews;
