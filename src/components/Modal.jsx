import React, { useState, useEffect } from "react";
import Button from "./Buttons";

export default function Modal({ isOpen, onClose, product }) {
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setMainImage(product.image[0]);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const icons = [
    // Sparkles
    <svg
      className="w-5 h-5 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>,
    // Clock / Timer
    <svg
      className="w-5 h-5 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
    // Leaf
    <svg
      className="w-5 h-5 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-black bg-white/80 backdrop-blur rounded-full shadow-sm transition-transform hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row p-4 md:p-8">
          {/* Left Side: Images */}
          <div className="md:w-1/2 p-4 flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gray-50 flex items-center justify-center shadow-sm">
              <img
                src={mainImage}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 w-full justify-center">
              {product.image.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    mainImage === img
                      ? "border-[#4a24c5]"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="md:w-1/2 p-4 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-[15px] sm:text-[16px]">
              {product.description}
            </p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <ul className="mb-8 space-y-4">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-[15px] text-gray-700"
                  >
                    <span className="mr-3 flex-shrink-0">
                      {icons[idx % icons.length]}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Price & Buy Now Button */}
            <div className="mt-auto md:mt-4 flex flex-col sm:flex-row items-center gap-6 self-start">
              <div className="text-2xl font-bold text-gray-900">
                ${product.price}
              </div>
              <Button
                text="Buy Now"
                onClick={() => {
                  console.log("Buy Now clicked");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
