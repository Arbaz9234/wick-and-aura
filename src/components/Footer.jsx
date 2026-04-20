import React from "react";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between gap-10 my-10 mt-31 text-sm">
        <div className="w-full sm:w-[65%] md:w-[50%]">
          <img src={assets.logoHome} alt="logo" className="mb-5 w-32" />
          <p className="text-gray-600">
            We craft premium scented candles designed to elevate your space and
            mood. From calming aromas to personalized creations, each piece is
            made with care to bring warmth, elegance, and a touch of luxury to
            your everyday moments.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>

          <ul className="flex flex-col gap-3 text-gray-600">
            {/* WhatsApp */}
            <li>
              <a
                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black  transition-colors duration-200"
              >
                <assets.WhatsAppIcon />
                +91 {import.meta.env.VITE_WHATSAPP_NUMBER}
              </a>
            </li>

            {/* Email */}
            <li>
              <a
                href="mailto:wickandauracandles@gmail.com"
                className="flex items-center gap-2 hover:text-black transition-colors duration-200"
              >
                {/* Mail Icon */}
                <assets.MailIcon />
                wickandauracandles@gmail.com
              </a>
            </li>

            {/* Instagram */}
            <li>
              <a
                href="https://instagram.com/wickandaura_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors duration-200"
              >
                {/* Instagram Icon */}
                <assets.InstagramIcon />
                @wickandaura_
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-none h-[1px] bg-gray-300" />
        <p className="py-5 text-sm text-center">
          Copyright 2026 @ wickandaura.in - All Right Reserved.
        </p>
      </div>
    </div>
  );
}
