import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import TrendingMovieCard from "./TrendingMovieCard";


const Slider = ({ data }) => {
    return (
        <Swiper
        loop={true}
        speed={800}
        slidesPerView={4}
        centeredSlides={true}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 30, 
          stretch: 0, 
          depth: 100, 
          modifier: 1,
          scale: 0.8, // Scale of the slide
          slideShadows: true, // Enables slides shadows
          shadow: true, // Enables shadow
          shadowOffset: 20, // Shadow offset
          shadowScale: 0.94, // Shadow scale
        }}
        grabCursor={true}
        parallax={true}
        rewind={true}
        modules={[Navigation, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
            {data?.map((movie) => (
                <SwiperSlide key={movie.id}>
                    <TrendingMovieCard movieData={movie} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
