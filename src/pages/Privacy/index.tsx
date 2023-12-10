import styled from 'styled-components';
import data from './data.json';

function Privacy() {
  return (
    <>
      {data.map((data, index) => (
        <div key={index}>
          <Title>{data.title}</Title>
          <Content>{data.detail}</Content>
        </div>
      ))}
    </>
  );
}

const Title = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  margin: 10px 0;
`;

const Content = styled.p`
  ${(props) => props.theme.texts.content2};
  margin-bottom: 5px;
  white-space: pre-wrap;
`;

export default Privacy;
