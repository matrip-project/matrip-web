import styled from 'styled-components';
import Collapsible from '../../components/@atoms/Collapsible';
import { getColor } from '../../utils/colorUtils';

const data = [
  {
    header: '제목1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    header: '제목2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

function FAQ() {
  return (
    <>
      <EmailBtnWrap>
        <EmailBtn>이메일로 문의하기</EmailBtn>
      </EmailBtnWrap>
      <ListBox>
        <ListTitle>
          <MainTitle>자주하는 질문</MainTitle>
        </ListTitle>
        {data.map((faq, index) => {
          return (
            <Collapsible key={index} header={faq.header} body={faq.body} />
          );
        })}
      </ListBox>
    </>
  );
}

const MainTitle = styled.div`
  ${(props) => props.theme.texts.mainTitle};
`;

const EmailBtnWrap = styled.div`
  width: 77%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const EmailBtn = styled.button`
  width: 100%;
  height: 36px;
  background-color: ${getColor('primary')};
  border: transparent;
  border-radius: 50px;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListTitle = styled.div`
  padding: 10px 0;
`;

export default FAQ;
