import { Palette, Sparkles } from "lucide-react";
import React from "react";

export default function OurPolicy() {
  return (
    <div className="mt-15 flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-12 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <Palette className="w-10 m-auto mb-5 h-10" color="#000000" />
        <h3 className="heading-font font-bold text-2xl mb-0">
          Wide Color Selection
        </h3>
        <p className="text-gray-600 text-[15px] sm:text-[16px]">
          Match any mood or décor.
        </p>
      </div>
      <div>
        <Sparkles className="w-10 m-auto mb-5 h-10" color="#000000" />
        <h3 className="heading-font font-bold text-2xl mb-0">
          Personalized Crafting
        </h3>
        <p className="text-gray-600 text-[15px] sm:text-[16px]">
          Custom-made just for you.
        </p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-house-heart-icon lucide-house-heart w-10 m-auto mb-5"
        >
          <path d="M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        <h3 className="heading-font font-bold text-2xl mb-0">Design Harmony</h3>
        <p className="text-gray-600 text-[15px] sm:text-[16px]">
          Blends with your space.
        </p>
      </div>
    </div>
  );
}
