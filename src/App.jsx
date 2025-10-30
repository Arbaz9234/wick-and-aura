import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
