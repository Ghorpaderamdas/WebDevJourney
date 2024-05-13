// CourseSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css/swiper.css'; // Import Swiper CSS
import 'swiper/swiper.scss';



const CourseSlider = ({ courses }) => {
  return (
    <Swiper
      // Swiper configurations
    >
      {courses.map((course, index) => (
        <SwiperSlide key={index}>
          {/* Render your course component here */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CourseSlider;
