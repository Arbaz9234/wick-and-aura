import { useState, useRef, useEffect } from "react";
import { assets } from "../assets/assets";

export default function SplashScreen({ onFinished }) {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [done, setDone] = useState(false);
  const videoRef = useRef(null);

  const startCurtain = () => {
    setCurtainOpen(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setDone(true);
      onFinished();
    }, 1000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 4.0;
    }
  }, []);
  if (done) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Left curtain */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-white transition-transform duration-1000 ease-in-out ${
          curtainOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Right curtain */}
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-white transition-transform duration-1000 ease-in-out ${
          curtainOpen ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Loader in center */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          curtainOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          ref={videoRef}
          src={assets.loaderVideo2}
          muted
          playsInline
          autoPlay
          onEnded={startCurtain}
          className="w-[100vw] h-[100vh] object-contain"
          // className="w-[calc(100vw-60%)] h-[calc(100vh-60%)] object-contain"
        >
          <img src={assets.loaderGif} alt="Loading" className="w-32 h-32" />
        </video>
      </div>
    </div>
  );
}
