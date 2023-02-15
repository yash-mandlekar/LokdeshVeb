import * as React from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import Axios from "../../Axios/Axios";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

export default function UserLive() {
  const { roomId } = useParams();
  const { user } = useSelector((state) => state.auth);
  let role_str = getUrlParams(window.location.href).get("role") || "Host";
  const role =
    role_str === "Host" ? ZegoUIKitPrebuilt.Host : ZegoUIKitPrebuilt.Audience;
  const appID = 628726461;
  const serverSecret = "7d6974cadc1fa2a0b63946061dcf615a";
  var kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
    appID,
    serverSecret,
    roomId,
    user?.userName,
    user?.userName
  );
  if (kitToken) {
    var zp = ZegoUIKitPrebuilt.create(kitToken);
  }
  // start the call
  let myMeeting = async (element) => {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      onJoinRoom: async () => {
        const res = await Axios.post(
          "/user/golive",
          {
            url: "?roomId=" + roomId + "&role=Audience",
          },
          config
        );
      },
      onLeaveRoom: async () => {
        await removeLive();
      },
    });
  };
  const removeLive = async () => {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };
    await Axios.get("/user/removeLive", config);
  };
  useEffect(() => {
    return () => {
      zp.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: "100vw", height: "100vh", marginTop: "10vh" }}
      ></div>
    </>
  );
}
