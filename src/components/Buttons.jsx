import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        className={
          `mt-7 styled-btn group relative flex items-center justify-center gap-2 px-3 py-1 sm:px-5 sm:py-2 rounded-[10px] text-white font-bold text-[13px] sm:text-[15px] shadow-lg bg-[#a78181ff] border-2 border-[#c98f8f] transition-all duration-300 overflow-hidden cursor-pointer sm:hover:scale-105 sm:active:scale-100 ` +
          (props.className ? props.className : "")
        }
        onClick={props.onClick}
      >
        {props.text || "Click Here"}

        <svg
          className="sm:w-6 w-4 sm:h-6 h-4 transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 
            9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 
            0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 
            1.5h5.69l-1.72 1.72a.75.75 
            0 101.06 1.06l3-3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <style>{`
        .styled-btn::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 100%;
          background-image: linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.8),
            rgba(255, 255, 255, 0) 70%
          );
          top: 0;
          left: -100px;
          opacity: 0.6;
        }

        .styled-btn:hover::before {
          animation: shine 1.5s ease-out infinite;
        }

        @keyframes shine {
          0% {
            left: -100px;
          }
          60% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Button;
