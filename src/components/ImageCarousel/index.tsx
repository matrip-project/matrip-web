import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '120px',
        slidesToShow: 1,
        speed: 500
    };

    return (
        <>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <EachImage key={index}>
                        <SliderImage src={image} alt={`carousel-item-${index}`}  />
                    </EachImage>
                ))}
            </Slider>
        </>
    );
};

export default ImageCarousel;

const EachImage = styled.div`
    margin: 0px 0px;
`;

const SliderImage = styled.img`
    width: 137px;
    height: 105px;
    border-radius: 10px;
    
`;