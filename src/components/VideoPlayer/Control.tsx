import React, { useState } from "react";
import { IoVideocam, IoVideocamOff } from "react-icons/io5";
import { IoMdMic, IoMdMicOff } from "react-icons/io";

interface ControlsProps {}

const Control: React.FC<ControlsProps> = () => {
  const [mic, setMic] = useState(true);
  const [camera, setCamera] = useState(true);

  const toggleMic = () => {
    setMic((prev) => !prev);
  };

  const toggleCamera = () => {
    setCamera((prev) => !prev);
  };

  return (
    <div className="absolute w-fit bottom-1 left-1/2  -translate-x-1/2 z-100 flex gap-4 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-lg p-2 rounded-3xl">
      
      {/* Mic Button */}
      <button
        onClick={toggleMic}
        className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition duration-200"
      >
        {mic ? <IoMdMic size={16} /> : <IoMdMicOff size={16} />}
      </button>

      {/* Camera Button */}
      <button
        onClick={toggleCamera}
        className="bg-white p-2 rounded-full cursor-pointer hover:scale-110 transition duration-200"
      >
        {camera ? <IoVideocam size={16} /> : <IoVideocamOff size={16} />}
      </button>

    </div>
  );
};

export default Control;