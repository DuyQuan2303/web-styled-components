import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import  { Autoplay } from 'swiper';


import "bootstrap/dist/css/bootstrap.min.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {  Pagination,  A11y } from 'swiper';

import img1 from "../../images/Mobile app -01.png";
import img2 from "../../images/Mobile app -02.png";
import img3 from "../../images/Mobile app -03.png";
import img4 from "../../images/Mobile app -04.png";
import img5 from "../../images/Mobile app -05.png";
import { ProductCard } from "./Card";

const ProductSlider = () => {
  return (
    <div className="container  justify-content-center">
      <Swiper
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
       }}
      >
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img1 }} />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard data={{ imgSrc: img2 }} />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard data={{ imgSrc: img3 }} />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard data={{ imgSrc: img4 }} />
        </SwiperSlide>

        <SwiperSlide>
          <ProductCard data={{ imgSrc: img5 }} />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard data={{ imgSrc: img1 }} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
