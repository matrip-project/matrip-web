import Text from '../../components/@atoms/Text';
import DropdownList from '../../components/DropdownList';
import * as gs from '../../styles/GlobalStyles';
import * as fs from './faqStyle';

function FAQ() {
  const dummyDetail =
    '메이트립 자주하는 질문 상세 메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트립 자주하는 질문 상세메이트트';
  return (
    <gs.MainContainer>
      <gs.MainBox>
        <fs.ListBox>
          <Text type='headline1'>자주하는 질문</Text>
          <DropdownList detail={dummyDetail}>자주하는 질문 목록</DropdownList>
        </fs.ListBox>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default FAQ;
