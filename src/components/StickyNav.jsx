import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector(".header");
      if (!header) return;
      setVisible(window.scrollY > header.offsetTop + header.offsetHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm shadow-sm transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-3">
        <img
          src={assets.logoIcon}
          alt="Wick & Aura"
          className="w-8 h-8 object-contain"
        />

        <span className="text-[15px] tracking-[3px] font-light text-[#6e6a65] uppercase">
          Wick & Aura
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
