import { assets } from "../assets/assets";
import Button from "./Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import { useState } from "react";
export default function Banner({ onShopNowClick }) {
  const pagination = {
    clickable: true,
    renderBullet: function (className) {
      return `<span class="${className} custom-bullet"></span>`;
    },
  };
  
  // const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper) => {
  const bullets = document.querySelectorAll(
    ".swiper-pagination .custom-bullet"
  );
  bullets.forEach((el) =>
    el.classList.remove("swiper-slide-active")
  );

  if (bullets[swiper.realIndex]) {
    bullets[swiper.realIndex].classList.add("swiper-slide-active");
  }
};
  return (
    <>
      <div className="mb-[5rem] flex flex-col sm:flex-row border border-gray-400 justify-center items-center">
        {/* Banner Left */}
        <div className="w-full sm:w-1/2 aspect-square max-h-[400px] sm:max-h-[600px]">
          <style>
            {`
            .swiper-pagination {
              bottom: 12px !important;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 5px;
            }
            /* Inactive bullet */
            .custom-bullet {
              width: 16px;
              height: 4px;
              background: rgba(255, 255, 255, 0.5);
              border-radius: 999px;
              transition: all 0.3s ease;
            }
            /* Active bullet */
            .swiper-slide-active.custom-bullet {
              width: 32px;
              background: white;
            }
                    `}
          </style>
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            effect={"fade"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full swiper-outer"
            pagination={pagination}
            // ref={parentRef}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <img
                src={assets.bannerImage1}
                alt="Banner Image 1"
                className="h-full w-full sm:object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={assets.bannerImage2}
                alt="Banner Image 2"
                className="h-full w-full sm:object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={assets.bannerImage3}
                alt="Banner Image 3"
                className="h-full w-full sm:object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Banner Right */}
        <div className="w-full sm:w-1/2 sm:aspect-square sm:max-h-[600px] sm:flex items-center justify-center p-6 sm:px-10 xl:pl-15 xl:pr-15 2xl:pr-6">
          <div className="text-[#414141] ">
            <h1 className="heading-font  max-xl:text-4xl xl:text-5xl [@media(min-width:1440px)]:text-6xl sm:mt-3 font-semibold leading-[1.2]">
              Illuminate Your Space with Serenity
            </h1>
            <p className="heading-font font-normal text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.5] ">
              Discover our handcrafted collection of scented candles, designed
              to evoke calm, comfort, and a touch of luxury. Each candle is a
              journey for your senses.
            </p>
            <Button text="Shop Now" onClick={onShopNowClick} />
          </div>
        </div>
      </div>
    </>
  );
}
