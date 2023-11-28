import { useState } from 'react';
import styled from 'styled-components';
import { StateProps } from '..';

interface LimitProps {
  limit: number;
}

type TextFieldType = LimitProps & StateProps;

function TextField({ limit, state, setState }: TextFieldType) {
  const [TextCnt, setTextCnt] = useState(0);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState?.(e.target.value);
    setTextCnt(e.target.value.length);
  };

  return (
    <TextFieldContainer>
      <StyledTextArea
        value={state}
        rows={Math.floor(limit / 25)}
        maxLength={limit}
        onChange={handleInput}
      />
      <TextCntWrap>
        {TextCnt}/{limit}
      </TextCntWrap>
    </TextFieldContainer>
  );
}

const TextFieldContainer = styled.div`
  width: 90%;
  vertical-align: middle;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.neutral1};
`;

const StyledTextArea = styled.textarea`
  ${(props) => props.theme.texts.tapTitle1};
  width: calc(100% - 14px);
  padding: 7px;
  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TextCntWrap = styled.div`
  ${(props) => props.theme.texts.menuNone};
  position: absolute;
  right: 3%;
  bottom: 8px;
`;

export default TextField;
