import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const postwrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 22px;
  border-radius: 16px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
`;

export const postBox = styled(Link)`
  width: 337px;
  height: 98px;
  justify-content: center;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const contentsTopBox = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 11px;
  align-items: center;
`;

export const contentsBox = styled.div`
  display: flex;
  align-items: center;
`;

export const postImgBox = styled.div`
  width: 85px;
  aspect-ratio: 17 / 13;
`;

export const postImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20%;
`;

export const Nickname = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin: 0;
`;

export const postContent = styled.div`
  width: calc(100% - 100px);
  height: 100%;
  height: calc(100% - 20px);
  padding-bottom: 20px;
  display: flex;
  text-decoration: none;
  margin-right: 10px;
  ${(props) => props.theme.texts.tapTitle1};
`;

export const postTitle = styled.div`
  ${(props) => props.theme.texts.tapTitle1};
  margin-bottom: 4px;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const postPeriod = styled.div`
  margin-left: 6px;
  align-items: center;

  ${(props) => props.theme.texts.menuSelect};
`;

export const postDibsBtn = styled.div`
  right: 40px;
`;

export const userImgNone = styled.img`
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;

export const postNickname = styled.div`
  ${(props) => props.theme.texts.username};
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 12px;
  position: absolute;
`;

// title
export const titleContentsBox = styled(Link)`
  width: 164px;
  height: 163px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 30px;
`;

export const titlePostContent = styled.div`
  ${(props) => props.theme.texts.tapTitle1};
  margin-top: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 최대 2줄까지 표시 */
  -webkit-box-orient: vertical;
`;

export const titlePostImgBox = styled.div`
  width: 164px;
  height: 110px;
`;

export const titlePostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
`;
