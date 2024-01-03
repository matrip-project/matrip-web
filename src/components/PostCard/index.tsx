import React from 'react';
import * as ps from './postCardStyle';
import recruitingImage from '../../asset/recruiting.svg';
import recruitingEndImage from '../../asset/recruitingEnd.svg';
import { JourneyProps } from '../../types/journeyData';
import UserIntro from '../UserIntro';
import { encodeEmail } from '../../utils/encodeEmail';

interface Journeys {
  data: JourneyProps;
}

const PostCard: React.FC<
  React.PropsWithChildren<Journeys & { isListType: boolean }>
> = ({ data, isListType }) => {
  return (
    <>
      {isListType ? (
        <ps.postwrapper>
          <ps.postBox to={`/trip/${data.id}`}>
            <ps.contentsTopBox>
              <ps.postStatusWrap>
                {data.status === 'CLOSED' ? (
                  <img src={recruitingEndImage} alt='모집마감' />
                ) : (
                  <img src={recruitingImage} alt='모집중' />
                )}
              </ps.postStatusWrap>
              <ps.postPeriod>
                {data.startDate}~{data.endDate}
              </ps.postPeriod>
            </ps.contentsTopBox>
            <ps.contentsBox>
              <ps.postContent>
                <ps.postTitle>
                  [{data.city}] {data.title}
                </ps.postTitle>
              </ps.postContent>
              <ps.postImgBox>
                <ps.postImg
                  src={data.journeyImgRequestDtoList[0].path}
                  alt='post img'
                />
              </ps.postImgBox>
            </ps.contentsBox>
            <UserIntro iconSize={15}>
              <ps.userIntroText>
                {data.memberName}({encodeEmail(data.memberEmail!)}){' '}
                {data.memberAge}살 {data.memberSex}
              </ps.userIntroText>
            </UserIntro>
          </ps.postBox>
        </ps.postwrapper>
      ) : (
        <ps.tileBox to={`/trip/${data.id}`}>
          <ps.tileImgBox>
            <ps.tileImg
              src={data.journeyImgRequestDtoList[0].path}
              alt='대표 이미지'
            />
          </ps.tileImgBox>

          <ps.tileContent>
            [{data.city}] {data.title}
          </ps.tileContent>
        </ps.tileBox>
      )}
    </>
  );
};

export default PostCard;
