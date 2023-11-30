import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as None } from '../../../asset/imageNone.svg';
import { PostingContainer } from '..';
interface UploadProps {
  url?: string;
  setPreivew: React.Dispatch<React.SetStateAction<File | null>>;
}

function ImageUpload({ url, setPreivew }: UploadProps) {
  const [previewPath, setPreviewPath] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreivew(file);
      setPreviewPath(URL.createObjectURL(file));
    }
  };
  console.log('preview URL:', previewPath);

  return (
    <PostingContainer>
      <LabelWrap>대표 이미지 등록</LabelWrap>
      <ImageBox>
        <UploadWrap
          type='file'
          id='image'
          accept='image/*'
          onChange={handleUpload}
        />
        <label htmlFor='image'>
          {url ? (
            <ImageWrap src={url} />
          ) : previewPath ? (
            <ImageWrap src={previewPath} />
          ) : (
            <UploadBtn />
          )}
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

const ImageWrap = styled.img`
  width: 390px;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
`;

export default ImageUpload;
