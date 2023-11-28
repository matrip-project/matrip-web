import styled from 'styled-components';
import { ReactComponent as None } from '../../../asset/imageNone.svg';
import { PostingContainer } from '..';

type UploadType = {
  url?: string;
};

function ImageUpload({ url }: UploadType) {
  return (
    <PostingContainer>
      <LabelWrap>대표 이미지 등록</LabelWrap>
      <ImageBox>
        <UploadWrap type='file' id='image' accept='image/*' />
        <label htmlFor='image'>
          {url === undefined ? <UploadBtn /> : <ImageWrap src={url} />}
        </label>
      </ImageBox>
    </PostingContainer>
  );
}

const LabelWrap = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  width: 90%;
  margin-bottom: 10px;
`;

const ImageBox = styled.div`
  width: 100%;
  border: none;
  background: none;
`;

const UploadWrap = styled.input`
  display: none;
`;

const UploadBtn = styled(None)`
  cursor: pointer;
`;

const ImageWrap = styled.img``;

export default ImageUpload;
