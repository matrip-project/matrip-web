import { styled } from 'styled-components';

export const SignupForm = styled.div`
  width: 100%;
`;

export const InputBox = styled.div`
  margin-bottom: 30px;
`;
export const GenderInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const GenderBox = styled.fieldset`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

export const GenderWrap = styled.label`
  margin-right: 15px;
`;

export const InputSpan = styled.span`
  font-size: 16px;
  width: 70px;
  height: 40px;
  border-radius: 25px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #d9d9d9;
  color: #9c9c9c;
`;

export const GenderInput = styled.input.attrs({ type: 'radio' })`
&:checked {
    display: inline-block;
    background: none;
    padding: 0px 10px;
    text-align: center;
    height: 35px;
    line-height: 33px;
    font-weight: 500;
    display: none;
  }
  &:checked + ${InputSpan} {
    background: #5EAAA8;
    color: #fff;
  }
  display: none;
  }
`;

export const BirthWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const BirthIcon = styled.div`
  position: absolute;
  margin-left: 10px;
`;

export const SubmitBtn = styled.button`
  background-color: #056676;
  border: solid 1px #056676;
  border-radius: 35px;
  width: 100%;
  color: #fff;
  height: 56px;
  font-size: 18px;
`;
