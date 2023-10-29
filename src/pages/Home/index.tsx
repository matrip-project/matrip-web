import React, { useState, useRef, useEffect } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as hs from './homeStyle';

import { AiOutlineBell, AiOutlineSearch, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { RecommendTextSub } from './homeStyle';




const Home: React.FC = () => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState<number>(0);

    const moveSliderLeft = () => {
        if (sliderPosition === 0) { return; }
        setSliderPosition(sliderPosition - 1);
    };

    const moveSliderRight = () => {
        if (sliderPosition === reccCards.length - 1) { return; }
        setSliderPosition(sliderPosition + 1);
    };

    // const [sliderWidth, setSliderWidth] = useState(0);


    // 넓이 감지 로직
    // useEffect(() => {
    //     if (sliderRef.current) {
    //       // 초기 너비 설정
    //       setSliderWidth(sliderRef.current.clientWidth);

    //       // resize 이벤트에 대한 이벤트 핸들러
    //       const handleResize = () => {
    //         if (sliderRef.current) {
    //           setSliderWidth(sliderRef.current.clientWidth);
    //         }
    //       };

    //       window.addEventListener('resize', handleResize);

    //       return () => {
    //         window.removeEventListener('resize', handleResize);
    //       };
    //     }
    //   }, [sliderRef]);


    const mainCard = {
        name: '송크란 뮤직페스티벌 - S2O KOREA',
        date: '2023.07.09 ~ 2023.07.12',
    };

    const onClickSuggestBtn = () => {
        console.log('clicked');
    };

    const reccCards = [
        {
            id: 0,
            img: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/278399089_693007222116942_8394828879432967312_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R2SMImVXlPoAX-mccUc&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB7Gfe39Y_QbHr_fbd-tyPIzbC9S8TpD7kZKAwO3qfRpg&oe=64B81BDA',
            title: 'S2O 송크란 축제',
            date: '2023.07.09 ~ 2023.07.12',
        },
        {
            id: 1,
            img: 'https://img.allurekorea.com/allure/2023/03/style_641d4293094a6.jpeg',
            title: '보령 머드축제',
            date: '2023.07.09 ~ 2023.07.12',
        },
        {
            id: 2,
            img: 'https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/8955/Mgz_Main_Top_20200910162109.jpg/dims/resize/Q_80,0',
            title: '보령 머드축제',
            date: '2023.07.09 ~ 2023.07.12',
        },
        {
            id: 3,
            img: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t39.30808-6/278399089_693007222116942_8394828879432967312_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R2SMImVXlPoAX-mccUc&_nc_ht=scontent-ssn1-1.xx&oh=00_AfB7Gfe39Y_QbHr_fbd-tyPIzbC9S8TpD7kZKAwO3qfRpg&oe=64B81BDA',
            title: '보령 머드축제',
            date: '2023.07.09 ~ 2023.07.12',
        }
    ];



    return (
        <>
            <gs.MainContainer>
                <gs.MainBox>
                    <hs.HomeHeader>
                        <hs.HeaderTextCtnr>
                            <hs.HeaderTextMain>
                                마음에 맞는 사람들과
                            </hs.HeaderTextMain>
                            <hs.HeaderTextMain>
                                마음에 맞는 사람들과
                            </hs.HeaderTextMain>
                            <hs.HeaderTextSub>
                                지금 핫플레이스를 확인해 보세요
                            </hs.HeaderTextSub>
                        </hs.HeaderTextCtnr>
                        <hs.HeaderIconCtnr>
                            <AiOutlineBell size={30} />
                            <AiOutlineSearch size={30} />
                        </hs.HeaderIconCtnr>
                    </hs.HomeHeader>

                    <hs.SuggetCardCtnr>
                        <hs.SuggetCard>
                            <hs.SuggetCardImg
                                src='https://ak-d.tripcdn.com/images/fd/tg/g1/M04/5F/2C/CghzfFW4TKGAaaOlAAX9H1cljyU402_C_880_350_R5.jpg?proc=source%2ftrip'
                            />
                            <hs.SuggetCardBtnCtnr>
                                <hs.SuggetCardTextCtnr>
                                    <hs.SuggetCardTextName>
                                        {mainCard.name}
                                    </hs.SuggetCardTextName>
                                    <hs.SuggetCardTextDate>
                                        {mainCard.date}
                                    </hs.SuggetCardTextDate>
                                </hs.SuggetCardTextCtnr>

                                <hs.BookmarkBtn
                                    onClick={onClickSuggestBtn}
                                >
                                    <BsBookmark size={25} />
                                </hs.BookmarkBtn>

                            </hs.SuggetCardBtnCtnr>

                        </hs.SuggetCard>
                    </hs.SuggetCardCtnr>

                    <hs.RecommedSliderWrapper ref={sliderRef}>
                        <hs.RecommedSliderCtnr sliderPosition={sliderPosition}>

                            {reccCards.map((card, idx) => (
                                <hs.RecommedSliderCard key={idx}>
                                    <hs.RecommedSliderCardImgCtnr >
                                        <hs.RecommedSliderCardImg
                                            src={card.img}
                                        />
                                    </hs.RecommedSliderCardImgCtnr>
                                    <hs.RecommedSliderCardTextCtnr>
                                        <hs.RecommendTextMain>{card.title}</hs.RecommendTextMain>
                                        <hs.RecommendTextSub>{card.date}</hs.RecommendTextSub>
                                    </hs.RecommedSliderCardTextCtnr>
                                </hs.RecommedSliderCard>

                            ))
                            }

                        </hs.RecommedSliderCtnr>
                        {sliderPosition > 0 && 
                            <hs.SliderLeft onClick={moveSliderLeft}>
                                <AiOutlineLeft size={30}/>
                            </hs.SliderLeft>
                        }
                        <hs.SliderRight onClick={moveSliderRight}>
                        <AiOutlineRight size={30}/>
                        </hs.SliderRight>
                    </hs.RecommedSliderWrapper>

                </gs.MainBox>
            </gs.MainContainer>
        </>
    );
};

export default Home;