import styled from 'styled-components';
import Text from '../../components/@atoms/Text';
import * as gs from '../../styles/GlobalStyles';
import Collapsible from '../../components/@atoms/Collapsible';
import { getColor } from '../../utils/colorUtils';
import Button from '../../components/@atoms/Button';

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
    <gs.MainContainer>
      <gs.MainBox>
        <EmailBtnWrap>
          <EmailBtn>
            <Text type='subtitle2'>이메일로 문의하기</Text>
          </EmailBtn>
        </EmailBtnWrap>
        <ListBox>
          <ListTitle>
            <Text type='headline1'>자주하는 질문</Text>
          </ListTitle>
          {data.map((faq, index) => {
            return (
              <Collapsible key={index} header={faq.header} body={faq.body} />
            );
          })}
        </ListBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

const EmailBtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const EmailBtn = styled.button`
  width: 100%;
  height: 36px;
  border: transparent;
  border-radius: 8px;
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ListTitle = styled.div`
  border-bottom: solid 1px ${getColor('neutral3')};
  padding: 10px 0;
`;

export default FAQ;
