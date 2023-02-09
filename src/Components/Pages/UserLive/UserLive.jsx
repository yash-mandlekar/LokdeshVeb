import * as React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import Axios from "../../Axios/Axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function UserLive() {
  const { roomId } = useParams();
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  const role =
    role_str === "Host" ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;

  // var sharedLinks = {
  //   url: "?roomId=" + roomId + "&role=Audience",
  // };
  // generate Kit Token
  const appID = 628726461;
  const serverSecret = "7d6974cadc1fa2a0b63946061dcf615a";
  var kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomId,
    user?.userName,
    user?.userName
  );
  // start the call
  let myMeeting = async (element) => {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      onJoinRoom: async () => {
        await Axios.post(
          "/user/golive",
          {
            url: "?roomId=" + roomId + "&role=Audience",
          },
          config
        );
      },
      onLeaveRoom: async () => {
        await Axios.get("/removeLive", config);
      },
    });
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "210px",
          left: "56vmax",
          zIndex: "10",
          padding: "0px 12vh",
          fontSize: "2.5vw",
        }}
      >
        Go Live
      </div>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </>
  );
}
