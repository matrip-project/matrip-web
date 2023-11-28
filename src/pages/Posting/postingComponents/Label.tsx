import styled from 'styled-components';

interface LabelProps {
  label: string;
  essential: boolean;
}

function Label({ label, essential }: LabelProps) {
  return (
    <LabelContainer>
      <LabelWrap>{label}</LabelWrap>
      <IsEssesntial $essential={essential}>
        ({essential ? '필수' : '선택'})
      </IsEssesntial>
    </LabelContainer>
  );
}

const LabelContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const LabelWrap = styled.div`
  ${(props) => props.theme.texts.mainTitle};
  margin-right: 8px;
`;

const IsEssesntial = styled.div<{ $essential: boolean }>`
  ${(props) => props.theme.texts.menuNone};
  color: ${(props) => props.$essential && props.theme.colors.primary};
`;

export default Label;
