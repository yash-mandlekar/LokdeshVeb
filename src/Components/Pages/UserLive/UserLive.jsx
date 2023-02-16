import * as React from "react";
import { useParams } from "react-router-dom";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import { useRef } from "react";
import "./UserLive.css";
import { generateToken04 } from "./ZegoServer";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import Axios from "../../Axios/Axios";
import { useSelector } from "react-redux";
import { useState } from "react";
//   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//     appID,
//     serverSecret,
//     roomId,
//     roomId,
//     roomId
//   );
const UserLive = () => {
  const { roomId } = useParams();
  const streamRef = useRef(null);
  const videoRef = useRef(null);
  const [camera, setCamera] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const appID = 628726461;
  const zg = new ZegoExpressEngine(
    appID,
    "wss://webliveroom628726461-api.coolzcloud.com/ws"
  );
  zg.on("roomStateUpdate", (roomID, state, errorCode, extendedData) => {
    console.log(
      "%cNormal from the room.",
      "color: black;background-color: yellow;"
    );
    if (state == "DISCONNECTED") {
      // console.log("Disconnected from the room.");
      console.log(
        "%cDisconnected from the room.",
        "color: black;background-color: red;"
      );
    }
    if (state == "CONNECTING") {
      console.log(
        "%cConnecting from the room.",
        "color: black;background-color: yellow;"
      );
    }
    if (state == "CONNECTED") {
      console.log(
        "%cConnected from the room.",
        "color: black;background-color: green;"
      );
    }
  });
  var localStream = null;
  const goLive = async () => {
    const { data } = await Axios.get(`/user/zego/token/${user?.userName}`);
    const result = await zg.loginRoom(
      roomId,
      data.token,
      { userID: user?.userName, username: user?.userName },
      { userUpdate: true }
    );
    localStream = await zg.createStream();
    streamRef.current.srcObject = localStream;
    zg.startPublishingStream(roomId, localStream);
  };
  const stopLive = async () => {
    zg.stopPublishingStream(roomId);
    zg.destroyStream(localStream);
    streamRef.current.srcObject = null;
    zg.logoutRoom(roomId);
  };
  const showLive = async () => {
    const remoteStream = await zg.startPlayingStream(roomId);
    videoRef.current.srcObject = remoteStream;
    console.log("%cremoteStream: ", "color: black;background-color: yellow;");
    console.log(remoteStream);
    console.log("%cremoteStream: ", "color: black;background-color: yellow;");
  };
  return (
    <div className="myCallContainer" style={{ marginTop: "10vh" }}>
      <button onClick={goLive}>live</button>
      <button onClick={stopLive}>stop live</button>
      <button onClick={showLive}>show live</button>
      <div style={{ display: "flex" }} className="video-cnt">
        <video
          autoPlay={true}
          className="myvideo"
          ref={streamRef}
          style={{ width: "50vw", height: "50vh" }}
        ></video>
        <video
          autoPlay={true}
          ref={videoRef}
          style={{ width: "50vw", height: "50vh" }}
        ></video>
      </div>
    </div>
  );
};
export default UserLive;

// zg.on("roomUserUpdate", (roomID, updateType, userList) => {
//   console.log("%croomUserUpdate: ", "color: black;background-color: yellow;");
// });
// zg.on(
//   "roomStreamUpdate",
//   async (roomID, updateType, streamList, extendedData) => {
//     if (updateType == "ADD") {
//       // New stream added, start playing the stream.
//     } else if (updateType == "DELETE") {
//       // Stream deleted, stop playing the stream.
//     }
//   }
// );
// zg.on("publisherStateUpdate", (result) => {
//   // Callback for updates on stream publishing status.
//   // ...
// });
// zg.on("publishQualityUpdate", (streamID, stats) => {
//   // Callback for reporting stream publishing quality.
//   // ...
// });
