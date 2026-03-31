import { Device } from "mediasoup-client";
import type { Transport, RtpCapabilities } from "mediasoup-client/types";
import React, { useEffect, useRef } from "react";
import Control from "./Control";

interface VideoPlayerProps {
  rtpCapabilities: RtpCapabilities;
  type: "recvOnly" | "sendOnly";
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ rtpCapabilities, type }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const device = useRef<Device | null>(null);
  const sendTransport = useRef<Transport | null>(null);
  const recvTransport = useRef<Transport | null>(null);

  const videoTrack = useRef<MediaStreamTrack | null>(null);

  // ✅ Initialize Device
  const initializeDevice = async () => {
    if (!device.current) {
      device.current = new Device();
      await device.current.load({ routerRtpCapabilities: rtpCapabilities });
    }
  };

  // ✅ Setup Send Transport (you must pass server params here)
  const createSendTransport = async (params: any) => {
    if (!device.current) return;

    sendTransport.current = device.current.createSendTransport(params);

    sendTransport.current.on(
      "connect",
      ({ dtlsParameters }, callback, errback) => {
        // 👉 send dtlsParameters to server
        callback();
      }
    );

    sendTransport.current.on(
      "produce",
      ({ kind, rtpParameters }, callback, errback) => {
        // 👉 send to server & get producerId
        callback({ id: "dummy-producer-id" });
      }
    );
  };

  // ✅ Start Camera
  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const track = stream.getVideoTracks()[0];
      videoTrack.current = track;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Media error:", err);
    }
  };

  // ✅ Produce track
  const produce = async () => {
    if (!sendTransport.current || !videoTrack.current) return;

    await sendTransport.current.produce({
      track: videoTrack.current,
    });
  };

  useEffect(() => {
    const init = async () => {
      await startVideo();
      await initializeDevice();

      // ❗ Replace with actual backend response
      const transportParams = {
        id: "123",
        iceParameters: {},
        iceCandidates: [],
        dtlsParameters: {},
      };

      if (type === "sendOnly") {
        await createSendTransport(transportParams);
        await produce();
      }
    };

    init();

    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((t) => t.stop());
      }
    };
  }, []);

  return (
    <div className="w-100 h-auto rounded  relative bg-black overflow-hidden">
      <video ref={videoRef} autoPlay playsInline muted className="w-full" />
      <span className="absolute z-100 text-white top-2 left-2 text-sm bg-black/30 backdrop-blur-md border border-white/20 px-2 py-1 rounded-md">
        Interviewer
      </span>
      {type === "sendOnly" && <Control />}
    </div>
  );
};

export default VideoPlayer;
