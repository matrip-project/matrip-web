import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const postwrapper = styled.div`
  display: flex;
  width: 100%;
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

export const postContent = styled.div`
  width: calc(100% - 100px);
  height: calc(100% - 20px);
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

export const postStatusWrap = styled.div`
  right: 40px;
`;

export const userIntroText = styled.div`
  ${(props) => props.theme.texts.username};
`;

// tile style

export const tileBox = styled(Link)`
  width: 164px;
  height: 163px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const tileContent = styled.div`
  ${(props) => props.theme.texts.tapTitle1};
  margin-top: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const tileImgBox = styled.div`
  width: 164px;
  height: 110px;
`;

export const tileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.15);
`;
