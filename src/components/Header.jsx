import React from "react";
import { assets } from "../assets/assets";
import StickyNav from "./StickyNav";

export default function Header() {
  return (
    <>
      <StickyNav />
      <div className="header flex flex-col items-center justify-center p-4 mb-4 pt-8">
        <img
          src={assets.logoIcon}
          alt="Wick & Aura Logo Icon"
          className="w-13"
        />

        <img
          src={assets.logoText}
          alt="Wick & Aura Logo Text"
          className="w-50 mt-3 mb-1"
        />

        <p className="text-[#6e6a65] text-lg tracking-[5px] font-light">
          LIGHT UP YOUR AURA
        </p>
      </div>
    </>
  );
}
