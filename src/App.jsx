import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [splashDone, setSplashDone] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const loaded = sessionStorage.getItem("hasLoaded");

    if (loaded) {
      setHasLoaded(true);
    } else {
      sessionStorage.setItem("hasLoaded", "true");
      setHasLoaded(false); // first time → show splash
    }
  }, []);
  return (
    <>
      {!splashDone && !hasLoaded && (
        <SplashScreen onFinished={() => setSplashDone(true)} />
      )}
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] xl2:!px-[15vw]  xxl2:!px-[24vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wick-and-aura" element={<Home />} />
          <Route path="/wick-and-aura/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
