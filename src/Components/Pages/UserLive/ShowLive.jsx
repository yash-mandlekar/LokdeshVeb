import React from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";
import Axios from "../../Axios/Axios";

const ShowLive = () => {
  const videoRef = useRef(null);
  const { roomId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const zg = new ZegoExpressEngine(
    628726461,
    "wss://webliveroom628726461-api.coolzcloud.com/ws"
  );

  const showLive = async () => {
    const { data } = await Axios.get(`/user/zego/token/${user?.userName}`);
    const result = await zg.loginRoom(
      roomId,
      data.token,
      { userID: user?.userName, userName: user?.userName },
      { userUpdate: true }
    );
    const remoteStream = await zg.startPlayingStream(roomId);
    videoRef.current.srcObject = remoteStream;
    console.log("%cremoteStream: ", "color: black;background-color: yellow;");
    console.log(remoteStream);
    console.log("%cremoteStream: ", "color: black;background-color: yellow;");
  };
  return (
    <div
      style={{
        marginTop: "10vh",
      }}
    >
      <button onClick={showLive}>show live</button>

      <video
        autoPlay={true}
        ref={videoRef}
        style={{ width: "50vw", height: "50vh" }}
      ></video>
    </div>
  );
};

export default ShowLive;
