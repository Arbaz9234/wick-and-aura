import React, { useEffect, useRef, useState } from "react";
import { assets, products } from "../assets/assets";
import Button from "./Buttons";
import Modal from "./Modal";
export default function Collection() {
  const [isFlipped, setIsFlipped] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productsList = products;
  const cardRefs = useRef([]);
  const cardMouseDown = useRef(null);
  const isMobile = () => window.innerWidth < 1024;
  const truncateWords = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };
  useEffect(() => {
    const handleMouseDown = (event) => {
      cardMouseDown.current = event.target;
    };
    const handleClickOutside = (event) => {
      const mouseDownInsideAnyCard = cardRefs.current.some(
        (ref) => ref && ref.contains(cardMouseDown.current),
      );
      const clickedInsideAnyCard = cardRefs.current.some(
        (ref) => ref && ref.contains(event.target),
      );
      if (!clickedInsideAnyCard && !mouseDownInsideAnyCard) {
        setIsFlipped(0);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="text-center">
      <h2 className="heading-font max-xl:text-3xl xl:text-4xl [@media(min-width:1440px)]:text-5xl font-semibold leading-[1.2]">
        Our Signature Collection
      </h2>
      <p className="mx-auto mt-4 text-[15px] sm:text-[16px]">
        Explore our curated selection of premium candles, each crafted to
        elevate your space and enhance your well-being.
      </p>
      <div className="grid grid-cols-2 max-sm2:grid-cols-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-5 mt-8">
        {" "}
        {/*  sm:grid-cols-2  */}
        {productsList.map((product, index) => (
          <div
            key={product.id}
            className={`border-gray-300 lg:rounded-[8px] cursor-pointer card aspect-square sm:aspect-[4/5]  md:aspect-[3/4]  ${
              // max-sm:!h-[400px] max-sm:h-auto
              isFlipped === index + 1 ? "active" : ""
            }`}
            onMouseDown={(e) => {
              cardMouseDown.current = e.target;
            }}
            onClick={(e) => {
              if (
                cardRefs.current[index] &&
                cardRefs.current[index].contains(cardMouseDown.current)
              ) {
                if (isMobile()) {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                } else {
                  setIsFlipped(index + 1 === isFlipped ? 0 : index + 1);
                }
              }
            }}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="card-inner">
              <div className="card-front group lg:rounded-[8px]">
                <img
                  src={assets.product1}
                  alt="Collection Item"
                  className="w-full h-auto lg:rounded-[8px] group-hover:scale-102 transition ease-in-out"
                />
              </div>
              <div className="tool-tip-outer hidden lg:block absolute bottom-4 right-4 cursor-pointer p-2">
                <img
                  src={assets.flipIcon}
                  alt="flip-icon"
                  className="w-6 h-6 flip-icon"
                />
                <div
                  className="tool-tip bg-black border-black rounded-md bottom-[calc(100%+1rem)] shadow text-white text-[12.5px] left-1/2 max-w-[30rem] p-2 pointer-events-none absolute transform translate-x-[-50%] w-max before:content-[''] before:absolute before:bg-black before:border-solid before:border-t-0 before:border-r-0
  before:border-[1px] before:border-black before:h-4 before:w-4 before:left-[calc(50%-0.5rem)] before:top-[calc(100%-0.5rem)] before:rotate-[-45deg]"
                >
                  Click to Flip
                </div>
              </div>
              <div
                className="card-back relative lg:rounded-[8px] overflow-hidden flex flex-col items-center justify-center text-center p-6"
                style={{
                  backgroundImage: `url(${assets.product1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/15 backdrop-blur-[4px]"></div>

                {/* Glass content */}
                <div
                  className="relative z-10 border border-white/30 bg-white/10 backdrop-blur-lg rounded-[12px] p-4 shadow-lg product-details"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-white max-xl:text-2xl xl:text-2xl [@media(min-width:1440px)]:text-3xl font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-200 mb-4 sm:text-[17px] text-left">
                    {truncateWords(product.description, 20)}
                  </p>
                  <Button
                    text="Explore"
                    className="mx-auto"
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                      setIsFlipped(0);
                    }}
                  />
                </div>
              </div>
            </div>
            {/* Mobile Product Info */}
            <div className="lg:hidden mt-3 text-left">
              <h3 className="text-[18px] text-gray-900 font-medium mb-0">
                {product.name}
              </h3>
              <p className="text-[20px] text-gray-900 price-font font-normal ">
                <span className="[font:inherit] text-inherit !text-[18px]">
                  ₹
                </span>{" "}
                {product.price}
                {".00"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct("");
        }}
        product={selectedProduct}
      />
    </div>
  );
}
