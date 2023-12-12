import styled from 'styled-components';

type UrlProps = {
  url: string;
};

function Thumbnail({ url }: UrlProps) {
  return (
    <ThumbnailContainer>
      <ThumbnailWrap src={url} alt='대표 이미지' />
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const ThumbnailWrap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Thumbnail;
