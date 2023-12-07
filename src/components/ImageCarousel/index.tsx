import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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
            {images.length !== 0 ?
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <EachImage key={index}>
                            <SliderImage src={image} alt={`carousel-item-${index}`}  />
                        </EachImage>
                    ))}
                </Slider>
             :
             <NoimageText>no images</NoimageText>
            }

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

const NoimageText = styled.p`
  text-align: center;
`;
