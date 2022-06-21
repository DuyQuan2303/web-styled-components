import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import "bootstrap/dist/css/bootstrap.min.css";

import img1 from "../../images/Mobile app -01.png";
import img2 from "../../images/Mobile app -02.png";
import img3 from "../../images/Mobile app -03.png";
import img4 from "../../images/Mobile app -04.png";
import img5 from "../../images/Mobile app -05.png";
import { ProductCard } from "./Card";

const ProductSlider = () => {
  return (
    <div className="container py-4 px-4 justify-content-center">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
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
