import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          // disableOnInteraction: false,
          // pauseOnMouseEnter: false,
          // stopOnLastSlide: false,
        }}
        speed={1000}
        loop
      >
        <SwiperSlide className="s1">Slide 1</SwiperSlide>
        <SwiperSlide className="s2">Slide 2</SwiperSlide>
        <SwiperSlide className="s3">Slide 3</SwiperSlide>
        <SwiperSlide className="s4">Slide 4</SwiperSlide>
        <SwiperSlide className="s5">Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
