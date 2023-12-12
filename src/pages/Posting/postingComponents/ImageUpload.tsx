import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as None } from '../../../asset/imageNone.svg';
import { PostingContainer } from '..';
import { useDispatch } from 'react-redux';
import { setImage, setPreview } from '../../../redux/modules/postSlice';

interface UploadProps {
  url?: string;
}

function ImageUpload({ url }: UploadProps) {
  const dispatch = useDispatch();
  const [previewPath, setPreviewPath] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      dispatch(setPreview(file));
      setPreviewPath(URL.createObjectURL(file));
      dispatch(
        setImage([{ id: 0, path: URL.createObjectURL(file), sequence: 0 }])
      );
    }
  };

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
  width: 100%;
  cursor: pointer;
`;

const ImageWrap = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
`;

export default ImageUpload;
