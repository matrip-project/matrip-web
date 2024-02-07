import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import * as gs from '../../styles/GlobalStyles';
import * as ss from './signupStyle';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import BirthdayInput from '../../components/BirthdayInput';
import RequiredInputSelect from '../../components/RequiredInputSelect';
import {
  CheckBox,
  Spacer,
  InputLabel,
  ErrMessage
} from '../../components/@atoms';
import BottomAlert from '../../components/Alert';
import { validateInput } from '../../utils/signUpValidation';
import { submitSignup } from '../../utils/sybmitSignUp';
import useSignupInput from '../../hooks/useSignup';

export interface SignupInputProps {
  email: string;
  password: string;
  passwordCheck: string;
  gender: string;
  birthDate: Date | null;
  name: string;
  nickName: string;
}

const initialState = {
  email: '',
  password: '',
  passwordCheck: '',
  gender: '',
  birthDate: null,
  name: '',
  nickName: ''
};

const labelObj = {
  age: '만 14세이상 입니다',
  use: '이용약관 동의',
  privacy: '개인정보 수집 및 이용에 대한 동의',
  marketing: '개인정보 수집 및 이용안내'
};

function Signup() {
  const { input, setInput, handleInputChange } = useSignupInput(initialState);
  const [isValid, setIsValid] = useState({
    isPasswordValid: true,
    isNicknameValid: true
  });
  const [eventTerm, setEventTerm] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [term, setIsTerm] = useState({
    age: false,
    use: false,
    privacy: false,
    marketing: false
  });

  const handleAllCheck = () => {
    setEventTerm(!eventTerm);
    setIsTerm({
      age: !eventTerm,
      use: !eventTerm,
      privacy: !eventTerm,
      marketing: !eventTerm
    });
  };

  const handleTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setIsTerm((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleBirthdateChange = useCallback(
    (newBirthdate: Date) => {
      setInput((prevState) => ({ ...prevState, birthDate: newBirthdate }));
    },
    [setInput]
  );

  const handleSelectedChange = (selected: number) => {
    console.log(`Selected index: ${selected}`);
  };

  const handleSignup = async () => {
    if (!validateInput(input)) {
      return;
    }
    try {
      const response = await submitSignup(input);
      console.log(response);
      setIsAlertOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <ss.SignupForm>
          <FormInput
            label='이메일'
            placeHolder='본인소유의 이메일을 입력해 주세요'
            formType='email'
            name='email'
            onChange={handleInputChange}
            value={input.email}
            isCompulsory={true}
          />
          <Spacer height={33} />
          <FormInput
            label='비밀번호'
            placeHolder='영문+숫자+특수문자 조합 8~16자리'
            formType='password'
            name='password'
            onChange={handleInputChange}
            value={input.password}
            isCompulsory={true}
          />
          <Spacer height={33} />
          <FormInput
            label='비밀번호 확인'
            placeHolder='영문+숫자+특수문자 조합 8~16자리 '
            formType='password'
            name='passwordCheck'
            onChange={handleInputChange}
            value={input.passwordCheck}
            isCompulsory={true}
          />
          <ErrMessage errMsg='다시 확인' isError={!isValid.isPasswordValid} />
          <Spacer height={33} />
          <FormInput
            label='이름'
            placeHolder='ex) 홍길동 '
            formType='text'
            name='name'
            onChange={handleInputChange}
            value={input.name}
            isCompulsory={true}
          />
          <Spacer height={33} />
          <BirthdayInput
            onBirthdateChange={handleBirthdateChange}
            label='생년월일'
          />
          <Spacer height={33} />
          <FormInput
            label='닉네임'
            placeHolder='ex) 잔망루피'
            formType='text'
            name='nickName'
            onChange={handleInputChange}
            value={input.nickName}
          />
          <Spacer height={80} />
          <RequiredInputSelect
            onSelectedChange={handleSelectedChange}
            label='이벤트 정보'
            values={['수신', '비수신']}
          />
          <Spacer height={33} />
          <InputLabel label='사이트 이용을 위한 약관에 동의' />
          <Spacer height={12} />
          <CheckBox
            name='all'
            label='전체 동의'
            isChecked={eventTerm}
            handleCheck={handleAllCheck}
            contents='전체 동의는 필수 및 선택정보에 대한 동의도 포함되어있으며,
            개별적으로도 동의를 선택하실 수 있습니다. 선택항목에 대한
            동의를 거부하는 경우에도 회원가입 서비스 이용 가능합니다.'
          />
          {Object.keys(term).map((key) => {
            const termKey = key as keyof typeof term;
            return (
              <div key={key}>
                <CheckBox
                  name={termKey}
                  label={labelObj[termKey]}
                  isChecked={term[termKey]}
                  handleCheck={handleTermChange}
                />
                <Spacer height={8} />
              </div>
            );
          })}
          <Spacer height={30} />

          {/* 약관 동의 추가 필요 */}
          <ss.SubmitBtn onClick={handleSignup}>확인</ss.SubmitBtn>
          <Overlay modalOpen={isAlertOpen} />
          <BottomAlert
            header='회원가입 완료'
            body='회원가입이 성공적으로 완료되었습니다'
            buttonText='확인'
            onClose={handleCloseAlert}
            modalOpen={isAlertOpen}
          />
        </ss.SignupForm>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Signup;

interface OverlayProps {
  modalOpen: boolean;
}

const Overlay = styled.div<OverlayProps>`
  display: ${({ modalOpen }) => (modalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;
