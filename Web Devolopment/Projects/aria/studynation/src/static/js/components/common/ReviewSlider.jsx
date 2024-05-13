// ReviewSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css/swiper.css'; // Import Swiper CSS
import 'swiper/swiper.scss';



const ReviewSlider = ({ reviews }) => {
  return (
    <Swiper
      // Swiper configurations
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          {/* Render your review component here */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlider;
