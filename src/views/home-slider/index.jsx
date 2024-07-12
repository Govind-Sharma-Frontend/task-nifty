import { useState } from "react";

import Image from "next/image";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import sliderImage1 from "@/@core/assets/slider-images/open-screener.webp";
import sliderImage2 from "@/@core/assets/slider-images/live-market-screener.webp";
import sliderImage3 from "@/@core/assets/slider-images/oprion-chain.webp";
import sliderImage4 from "@/@core/assets/slider-images/option-simulator.webp";
import sliderImage5 from "@/@core/assets/slider-images/advance-stock-screener.webp";

const HomeSlider = () => {
  const sliderImages = [
    {
      sliderSrc: sliderImage1,
      heading: "Options Screener",
    },
    {
      sliderSrc: sliderImage2,
      heading: "Live Market Screener",
    },
    {
      sliderSrc: sliderImage3,
      heading: "Option Chain",
    },
    {
      sliderSrc: sliderImage4,
      heading: "Options Simulator",
    },
    {
      sliderSrc: sliderImage5,
      heading: "Advance Stock Screener",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.realIndex;
    setActiveSlideIndex(activeIndex);
  };

  return (
    <div className="bg-[#111111] relative h-[250px] md:h-[350px] lg:h-[600px]">
      <div
        className="absolute w-full h-full z-10"
        style={{
          background:
            "linear-gradient(90deg,#111111 0%,rgba(255, 255, 255, 0) 30%,rgba(255, 255, 255, 0) 70%,#111111 100%)",
        }}
      ></div>
      <h4 className="text-white font-semibold text-center text-xl lg:text-3xl pt-5">
        {sliderImages[activeSlideIndex]?.heading}
      </h4>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 55,
          stretch: 1,
          depth: -85,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={handleSlideChange}
        className="mySwiper h-full"
      >
        {sliderImages?.map((item, index) => (
          <SwiperSlide>
            <Image src={item?.sliderSrc} alt={`${item?.heading} Image`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
