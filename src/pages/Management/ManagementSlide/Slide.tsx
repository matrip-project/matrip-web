import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { styled } from 'styled-components';
// import { Pagination } from 'swiper';

const Slide: React.FC = () => {
  return (
    <>
      <StyledWrapper>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={40}
          grabCursor={true}
          pagination={{
            clickable: true
          }}
          className='mySwiper'
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </StyledWrapper>
    </>
  );
};
export default Slide;

const StyledWrapper = styled.div`
  padding-top: 25px;
  margin-bottom: 5px;
  width: 100%;
  position: relative;

  .swiper-slide {
    width: 200px;
    height: 350px;
    margin: auto;
    position: relative;
    border-radius: 36px;
    box-shadow: 3px 5px 20px #d4d4d4;
  }

  .swiper, swiper-container{
    padding: 20px 0px;
  }
`;
