import { useRef, useState } from "react";

export default function ThumbnailSwiper({
  product,
  mainImage,
  setMainImage,
  maxVisible = 3,
}) {
  const [thumbStart, setThumbStart] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50; // minimum distance for a swipe
    const difference = touchStartX.current - touchEndX.current;

    // Swiped left (show next images)
    if (difference > swipeThreshold) {
      setThumbStart((prev) =>
        Math.min(product.image.length - maxVisible, prev + 1),
      );
    }

    // Swiped right (show previous images)
    if (difference < -swipeThreshold) {
      setThumbStart((prev) => Math.max(0, prev - 1));
    }
  };

  return (
    <div className="flex items-center gap-2 w-full justify-center">
      {product.image.length > maxVisible && (
        <button
          onClick={() => setThumbStart((prev) => Math.max(0, prev - 1))}
          disabled={thumbStart === 0}
          className="p-1 text-[#c58a8a] hover:text-[#a78181] disabled:opacity-0 transition-opacity"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}

      <div
        className="overflow-hidden"
        style={{
          width: `${maxVisible * 80 + (maxVisible - 1) * 16}px`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${thumbStart * (80 + 16)}px)`,
          }}
        >
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
                className={`object-cover w-full h-full opacity-85 hover:opacity-100 transition-opacity ${
                  mainImage === img ? "opacity-100" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {product.image.length > maxVisible && (
        <button
          onClick={() =>
            setThumbStart((prev) =>
              Math.min(product.image.length - maxVisible, prev + 1),
            )
          }
          disabled={thumbStart >= product.image.length - maxVisible}
          className="p-1 text-[#c58a8a] hover:text-[#a78181] disabled:opacity-0 transition-opacity"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
