import React from "react";
import "../../css/banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/carousel1.jpg";
import img2 from "../../assets/carousel2.jpg";
import img3 from "../../assets/carousel3.jpg";
import sector from "../../assets/Section.jpg";
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <Swiper
          loop={true}
          navigation={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Navigation, Autoplay]}
          className="banner__swiper"
        >
          <SwiperSlide className="banner__item">
            <img src={sector} alt="" />
            <div className="banner__content">
              <h2>Fresh Vegetables Big discount</h2>
              <p>Save up to 50% off on your first order</p>
              <div className="banner_input">
                <input type="text" placeholder="Your emaill address" />
                <button>Subscribe</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={sector} alt="" />
            <div className="banner__content">
              <h2>Fresh Vegetables Big discount</h2>
              <p>Save up to 50% off on your first order</p>
              <div className="banner_input">
                <input type="text" placeholder="Your emaill address" />
                <button>Subscribe</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="banner__item">
            <img src={sector} alt="" />
            <div className="banner__content">
              <h2>Fresh Vegetables Big discount</h2>
              <p>Save up to 50% off on your first order</p>
              <div className="banner_input">
                <input type="text" placeholder="Your emaill address" />
                <button>Subscribe</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
