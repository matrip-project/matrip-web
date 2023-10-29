import {styled} from 'styled-components';



export const HomeHeader = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin-top: 30px;
    
`;

export const HeaderTextCtnr = styled.div`
    
`;

export const HeaderTextMain = styled.p`
    font-size: 30px;
    font-weight: 700;
    margin: 5px 0px;
`;

export const HeaderTextSub = styled.div`
    font-size: 13px;
    color: grey;
    margin: 10px 0px;
`;

export const HeaderIconCtnr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const SuggetCardCtnr = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
    
`;

export const SuggetCard = styled.div`
    width: 80%;
    padding-bottom: 90%;
    background-color: #fff;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const SuggetCardImg = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%; 
    height: 100%; 
`;

export const SuggetCardBtnCtnr = styled.div`
    background-color: #fff;
    z-index: 9999;
    position: absolute;
    width: 90%;
    height: 80px;
    left: 5%;
    bottom: 20px;
    border-radius: 25px;
    background-color: rgb(255,255,255,0.79);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    
`;

export const SuggetCardTextCtnr= styled.div`
    margin-left: 25px;
    
    
`;

export const SuggetCardTextName = styled.div`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    
`;
export const SuggetCardTextDate = styled.p`
    font-size: 19px;
`;

export const BookmarkBtn = styled.div`
    background-color:#fff ;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    right: 25px;
    position: absolute;
`;

export const RecommedSliderWrapper = styled.div`
    width: 80%;
    height: 260px;
    overflow-x: hidden;
    position: relative;
    
`;

interface RecommedSliderCtnrProps {
    sliderPosition: number;
  }

export const RecommedSliderCtnr = styled.div<RecommedSliderCtnrProps>`
    position: absolute;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: row;

    transform: ${(props) => `translateX(${-195 * props.sliderPosition}px)`};
    transition: transform 0.5s ease;
`;

export const RecommedSliderCard = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 25px;
    overflow: hidden;
    margin-right: 15px;
`;

export const RecommedSliderCardImgCtnr = styled.div`
    width: 180px;
    height: 180px;
    
    
    background-color: #fff;
    
    overflow: hidden;
    position: relative;
`;

export const RecommedSliderCardImg = styled.img`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const RecommedSliderCardTextCtnr = styled.div`
    background-color: #fff;
    width: 100%;
    height: 60px;
    z-index: 999;
    left: 10px;
    bottom: 15px;
    
    display: flex;
    
    flex-direction: column;
`;

export const RecommendTextMain = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 9px 0px 3px 10px;
`;

export const RecommendTextSub = styled.div`
    font-size: 7px;
    color: grey;
    margin: 5px 0px 3px 10px;
`;

export const SliderLeft= styled.button`
    position:absolute;
    left:0px; 
    top: 105px;
    background-color: rgba(255, 255, 255, 0.7);
    z-Index:9999;

    height: 50px;
    width: 50px;
    border-radius: 100px;
`;

export const SliderRight= styled.button`
    position:absolute;
    right: 0px;
    top: 105px;
    background-color: rgba(255, 255, 255, 0.7);
    z-Index:9999;
    
    height: 50px;
    width: 50px;
    border-radius: 100px;
`;