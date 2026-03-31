import React from "react";
import Editor from "@monaco-editor/react";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const Room: React.FC = () => {
  return (
    <div className="w-dvw h-dvh flex flex-col justify-evenly items-center bg-gray-700">
      <Header />
      <div className="w-full h-full flex flex-row justify-between items-center">
        <Editor
          height="100%"
          width="70%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="int"
          onChange={(e) => console.log(e)}
        />
        <div className="w-100 h-full flex flex-col justify-between items-center gap-4">
          <VideoPlayer
            rtpCapabilities={{
              codecs: undefined,
              headerExtensions: undefined,
            }}
            type={"recvOnly"}
          />
          {/* <VideoPlayer
            rtpCapabilities={{
              codecs: undefined,
              headerExtensions: undefined,
            }}
            type={"sendOnly"}
          /> */}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Room;
