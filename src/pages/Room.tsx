import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { socket } from "../constant/socket.io";
import { useNavigate, useParams } from "react-router-dom";

const Room: React.FC = () => {
  const { roomId, username } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    socket.emit("join-room", { roomId, username });
    socket.on("room", () => {
      navigate(-1);
    });
  }, [roomId]);
  return (
    <div className="w-dvw h-dvh flex flex-col justify-evenly items-center bg-gray-700">
      <Header />
      <div className="w-full h-full flex flex-row justify-between items-center">
        <Editor
          height="100%"
          width="72%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="int"
          onChange={(e) => console.log(e)}
        />
        <div className="w-100 h-full flex flex-col items-center gap-2 justify-center ">
          <VideoPlayer
            rtpCapabilities={{
              codecs: undefined,
              headerExtensions: undefined,
            }}
            type={"recvOnly"}
          />
          <VideoPlayer
            rtpCapabilities={{
              codecs: undefined,
              headerExtensions: undefined,
            }}
            type={"sendOnly"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Room;
