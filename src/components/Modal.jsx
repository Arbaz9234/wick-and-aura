import React, { useState, useEffect } from "react";
import Button from "./Buttons";

export default function Modal({ isOpen, onClose, product }) {
  const [mainImage, setMainImage] = useState();
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [thumbStart, setThumbStart] = useState(0);
  const mouseDownTarget = React.useRef(null);
  const mainScrollRef = React.useRef(null);
  const thumbScrollRef = React.useRef(null);
  const maxVisible = 3;
  useEffect(() => {
    if (product && product.image && product.image.length > 0) {
      setMainImage(product.image[0]);
      if (mainScrollRef.current) {
        mainScrollRef.current.scrollLeft = 0;
      }
    }
  }, [product]);

  useEffect(() => {
    let timer;
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";

      setAnimating(true);
      // Trigger enter animation on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
      setVisible(false);
      // Wait for exit animation to finish before unmounting
      timer = setTimeout(() => setAnimating(false), 300);
    }

    return () => {
      document.body.style.overflow = "unset";
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  const handleMainScroll = () => {
    const el = mainScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (product?.image[index]) {
      setMainImage(product.image[index]);
      const thumbEl = thumbScrollRef.current;
      if (thumbEl && thumbEl.children[index]) {
        thumbEl.children[index].scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  const scrollToMainImage = (index) => {
    setMainImage(product.image[index]);
    const el = mainScrollRef.current;
    if (el) {
      el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modal: true }, "");
      const onPopState = () => {
        handleCloseRef.current();
      };
      window.addEventListener("popstate", onPopState);
      return () => window.removeEventListener("popstate", onPopState);
    }
  }, [isOpen]);

  const handleCloseRef = React.useRef(null);

  const handleClose = () => {
    if (window.history.state?.modal) {
      window.history.back();
      return;
    }
    setVisible(false);
    setTimeout(() => {
      onClose();
      resetState();
    }, 300);
  };

  handleCloseRef.current = () => {
    setVisible(false);
    setTimeout(() => {
      onClose();
      resetState();
    }, 300);
  };

  const resetState = () => {
    setThumbStart(0);
    if (product?.image?.length > 0) {
      setMainImage(product.image[0]);
    }
  };

  if (!animating && !isOpen) return null;
  if (!product) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        visible ? "bg-black/40 backdrop-blur-sm" : "bg-transparent"
      }`}
      onMouseDown={(e) => {
        mouseDownTarget.current = e.target;
      }}
      onClick={(e) => {
        if (
          e.target === e.currentTarget &&
          mouseDownTarget.current === e.currentTarget
        ) {
          handleClose();
        }
      }}
    >
      <div
        className={`relative flex flex-col w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] transition-all duration-300 ${
          visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
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

        <div className="overflow-y-auto flex-1">
          <div className="flex flex-col md:flex-row p-4 md:p-8">
            {/* Left Side: Images */}
            <div className="md:w-1/2 p-4 flex flex-col items-center">
              {/* Main Image - Desktop: click to change */}
              <div className="hidden md:flex w-full aspect-square rounded-xl overflow-hidden mb-6 bg-gray-50 items-center justify-center shadow-sm">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Main Image - Mobile/Tablet: swipeable scroll-snap */}
              <div
                ref={mainScrollRef}
                onScroll={handleMainScroll}
                className="md:hidden w-full max-[768px]:w-[70%] max-[639px]:w-[80%] max-[400px]:w-[100%] aspect-square rounded-xl overflow-x-auto overflow-y-hidden mb-6 bg-gray-50 shadow-sm flex snap-x snap-mandatory scrollbar-hide"
              >
                {product.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="min-w-full h-full flex-shrink-0 object-cover snap-start"
                  />
                ))}
              </div>

              {/* Thumbnails - Desktop: arrow-based */}
              <div className="hidden md:flex items-center gap-2 w-full justify-center">
                {product.image.length > maxVisible && (
                  <button
                    onClick={() =>
                      setThumbStart((prev) => Math.max(0, prev - 1))
                    }
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
                >
                  <div
                    className="flex gap-4 transition-transform duration-300 ease-in-out justify-center"
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

              {/* Thumbnails - Mobile/Tablet: native scroll */}
              <div
                ref={thumbScrollRef}
                className="md:hidden flex gap-3 overflow-x-auto w-full scrollbar-hide justify-center"
              >
                {product.image.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToMainImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      mainImage === img
                        ? "border-[#4a24c5]"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className={`object-cover w-full h-full transition-opacity ${
                        mainImage === img ? "opacity-100" : "opacity-60"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="md:w-1/2 p-4 flex flex-col items-start text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
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
                        <img
                          src={
                            product.featureIcons[
                              idx % product.featureIcons.length
                            ]
                          }
                          alt="feature icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="max-[40rem]:text-[15px] sm:text-[16px]">
                        {feature}
                      </span>
                    </li>
                  ))}
                  <l1>
                    {product.minOrder ? (
                      <span className="text-inherit">
                        {" "}
                        Min quantity required: {product.minOrder}
                      </span>
                    ) : (
                      ""
                    )}
                  </l1>
                </ul>
              )}

              {/* Price & Buy Now Button */}
              <div className="self-end mt-auto w-full flex sm:flex-row items-center justify-between gap-6">
                <p className="text-2xl font-bold text-gray-900">
                  ₹{product.price}{" "}
                </p>
                <Button
                  text="Buy Now"
                  className="!mt-0 "
                  onClick={() => {
                    const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
                    const message = encodeURIComponent(
                      `I want to buy "${product.name}" candles. Please provide more details.`,
                    );
                    window.open(
                      `https://wa.me/${phone}?text=${message}`,
                      "_blank",
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
