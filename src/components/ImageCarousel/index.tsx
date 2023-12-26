import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface ImageCarouselProps {
    images: any;
    onRemove?: (index: number) => void;
    onAdd?: () => void;
    isEditable?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({images, onRemove, onAdd, isEditable}) => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '120px',
        slidesToShow: 1,
        speed: 500
    };
    console.log(images);

    return (
        <CarouselContainer>
            {isEditable && <AddImageButton onClick={onAdd}>사진 추가</AddImageButton>}
            {images.length !== 0 ?
                <Slider {...settings}>
                    {images.map((image:any) => (
                        <EachImage key={image.id}>
                            <SliderImage src={image.path} alt={`carousel-item-${image.id}`}/>
                            {onRemove && isEditable && <DeleteButton onClick={() => onRemove(image.id)}>X</DeleteButton>}
                        </EachImage>
                    ))}
                </Slider>
                :
                <NoimageText>no images</NoimageText>
            }

        </CarouselContainer>
    );
};

export default ImageCarousel;

const CarouselContainer = styled.div`
  position: relative;
  
`;

const AddImageButton = styled.button`
  position: absolute;
  left: -30px;
  top: 35px;
  width: 95px;
  height: 30px;
  z-index: 30;
  border-radius: 30px;
  background: ${props => props.theme.colors.neutral1};
  border: none;
  transform: rotate(-90deg);
`;

const EachImage = styled.div`
  margin: 0px 0px;
  position: relative;
`;

const SliderImage = styled.img`
  width: 137px;
  height: 105px;
  border-radius: 10px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0px;
  right: 15px;
  background-color: #fff;
  border-radius: 100px;
  border: none;
  width: 25px;
  height: 25px;
  z-index: 99;
`;

const NoimageText = styled.p`
  text-align: center;
`;
