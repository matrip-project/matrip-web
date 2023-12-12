import { styled } from 'styled-components';

export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const SearchIcon = styled.div`
  position: absolute;
`;

export const SearchInput = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding-left: 45px;
  border-radius: 40px;
  border: 1px solid transparent;
  outline: none;
  box-sizing: border-box; // border 두께를 크기 계산에 포함

  background-color: #f0f0f0;
`;

export const DetailBox = styled.div`
  width: 80%;
  min-height: 650px;
  margin: 30px;
  box-sizing: border-box;
  border: solid 1px transparent;
  border-radius: 25px;
  box-shadow: 3px 5px 20px #d4d4d4;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 75%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px 25px 0 0;
`;

export const InfoBox = styled.div`
  padding: 15px 20px;
`;

export const NameWrap = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Code = styled.p`
  color: #808080;
  margin-left: 15px;
`;

export const Email = styled.p`
  color: #9c9c9c;
  margin-bottom: 20px;
`;

export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Introduction = styled.div`
  margin: 20px 0 10px 0;
  font-size: 14px;
  line-height: 18px;
`;

export const BtnBox = styled.div`
  display: flex;
`;

export const Btn = styled.button`
  border: none;
  width: 55px;
  height: 55px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
