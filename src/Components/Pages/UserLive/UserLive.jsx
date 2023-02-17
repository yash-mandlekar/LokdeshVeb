import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import "./UserLive.css";
import Axios from "../../Axios/Axios";
import { useSelector } from "react-redux";

var localStream = null;
const UserLive = () => {
  const { roomId } = useParams();
  const streamRef = useRef(null);
  const videoRef = useRef(null);
  const micRef = useRef(null);
  const cameraRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  // const [camera, setCamera] = useState(true);
  const appID = 628726461;
  var zg = new ZegoExpressEngine(
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
  var camera = false;
  const PlayPauseCamera = async () => {
    if (camera) {
      zg.mutePublishStreamVideo(localStream, false);
      cameraRef.current.innerHTML = "Turn Off Camera";
      camera = false;
    } else {
      zg.mutePublishStreamVideo(localStream, true);
      cameraRef.current.innerHTML = "Turn On Camera";
      camera = true;
    }
  };
  var mic = false;
  const PlayPauseMic = async () => {
    if (mic) {
      zg.mutePublishStreamAudio(localStream, false);
      micRef.current.innerHTML = "Turn Off Mic";
      mic = false;
    } else {
      zg.mutePublishStreamAudio(localStream, true);
      micRef.current.innerHTML = "Turn On Mic";
      mic = true;
    }
  };
  return (
    <div className="myCallContainer" style={{ marginTop: "10vh" }}>
      <button onClick={goLive}>live</button>
      <button onClick={stopLive}>stop live</button>
      <button onClick={showLive}>show live</button>
      <button ref={cameraRef} onClick={PlayPauseCamera}>
        Turn Off Camera
      </button>
      <button ref={micRef} onClick={PlayPauseMic}>
        Turn Off Mic
      </button>
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
// zg.on("publisherStateUpdate", (result) => {
//   // Callback for updates on stream publishing status.
//   // ...
// });
// zg.on("publishQualityUpdate", (streamID, stats) => {
//   // Callback for reporting stream publishing quality.
//   // ...
// });
