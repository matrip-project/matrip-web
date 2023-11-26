import React, { ChangeEvent, useCallback, useState } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as ss from './signupStyle';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import BirthdayInput from '../../components/BirthdayInput';
import RequiredInputSelect from '../../components/RequiredInputSelect';
import {CheckBox, Spacer} from '../../components/@atoms';

import BottomAlert from '../../components/Alert';


function Signup() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    gender: '',
    birthDate: '',
    name: '',
    nickName: ''
  });

  const [eventTerm, setEventTerm] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [term, setIsTerm] = useState({
    age: false,
    use: false,
    privacy: false,
    marketing: false
  });

  const labelObj = {
    age: '14세이상 어쩌고',
    use: '개인정보 사용 어쩌고',
    privacy: '개인정보 동의 어쩌고',
    marketing: '마케팅 활용 어쩌고'
};



  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAllCheck = (event: ChangeEvent<HTMLInputElement>) => {
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

  const handleBirthdateChange = useCallback((newBirthdate: any) => {
    setInput((prevState) => ({ ...prevState, birthDate: newBirthdate }));
  }, []);

  const handleSelectedChange = (selected: number) => {
    console.log(`Selected index: ${selected}`);
  };

  const handleSignup = () => {
    setIsAlertOpen(true);
    // 유효성 검사 로직 추가
    // 배경 블러처리, 클릭 막기
    
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
            lable='이메일'
            placeHolder='matrip@naver.com'
            formType='email'
            name='email'
            onChange={handleInputChange}
            value={input.email}
          />
          <Spacer height={33} />
          <FormInput
            lable='비밀번호'
            placeHolder='00000000'
            formType='password'
            name='password'
            onChange={handleInputChange}
            value={input.password}
          />
          <Spacer height={33} />
          <FormInput
            lable='비밀번호 확인'
            placeHolder='00000000'
            formType='password'
            name='passwordCheck'
            onChange={handleInputChange}
            value={input.passwordCheck}
          />
          <Spacer height={33} />
          <FormInput
            lable='이름'
            placeHolder='홍길동'
            formType='text'
            name='name'
            onChange={handleInputChange}
            value={input.name}
          />
          <Spacer height={33} />
          <BirthdayInput
            onBirthdateChange={handleBirthdateChange}
            label='생년월일'
          />
          <Spacer height={33} />
          <FormInput
            lable='닉네임'
            placeHolder='잔망루피'
            formType='text'
            name='nickName'
            onChange={handleInputChange}
            value={input.nickName}
          />
          <Spacer height={80} />
          <RequiredInputSelect 
            onSelectedChange={handleSelectedChange}
            label='이벤트 정보'
            values={['수신','비수신']}
          /> 
          <Spacer height={33} />
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
              <>
                <CheckBox
                  name={termKey}
                  label={labelObj[termKey]}
                  isChecked={term[termKey]}
                  handleCheck={handleTermChange}
                />
                <Spacer height={8}/>
              </>
            );
          })}
          <Spacer height={30}/>
          
          {/* 약관 동의 추가 필요 */}
          <ss.SubmitBtn onClick={handleSignup}>확인</ss.SubmitBtn>
          <BottomAlert 
            header='head'
            body='head'
            buttonText='head'
            onClose={handleCloseAlert}
            modalOpen={isAlertOpen}
          />
        </ss.SignupForm>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Signup;
