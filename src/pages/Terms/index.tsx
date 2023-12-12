import styled from 'styled-components';
import data from './data.json';

function Terms() {
  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <Title>{data.title}</Title>
          {data.detail.map((detail, index) => (
            <>
              <Subtitle key={index}>{detail.subtitle}</Subtitle>
              <Content>{detail.content}</Content>
            </>
          ))}
        </div>
      ))}
    </>
  );
}

const Title = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  margin: 10px 0;
`;

const Subtitle = styled.div`
  ${(props) => props.theme.texts.content1};
  margin: 5px 0;
`;

const Content = styled.p`
  ${(props) => props.theme.texts.content2};
  white-space: pre-wrap;
`;

export default Terms;
