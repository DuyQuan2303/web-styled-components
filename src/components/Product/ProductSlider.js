import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
        modules={[ Pagination, A11y]}
        spaceBetween={30}
        // navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
       breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
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
      </Swiper>
    </div>
  );
};

export default ProductSlider;
