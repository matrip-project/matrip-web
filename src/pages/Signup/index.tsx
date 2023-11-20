import React, { ChangeEvent, useCallback, useState } from 'react';
import * as gs from '../../styles/GlobalStyles';
import * as ss from './signupStyle';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import BirthdayInput from '../../components/BirthdayInput';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

function Signup() {
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordChk: '',
    gender: '',
    birthDate: '',
    name: ''
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleBirthdateChange = useCallback((newBirthdate:any) => {
    setInput((prevState) => ({ ...prevState, birthDate: newBirthdate }));
  },[]);

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <ss.SignupForm>
          <ss.InputBox>
            <p>이메일</p>
            <FormInput
              formType='email'
              name='email'
              value={input.email}
              onChange={handleInputChange}
            />
          </ss.InputBox>
          <ss.InputBox>
            <p>비밀번호</p>
            <FormInput
              formType='password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
            />
          </ss.InputBox>
          <ss.InputBox>
            <p>비밀번호 확인</p>
            <FormInput
              formType='password'
              name='passwordChk'
              value={input.passwordChk}
              onChange={handleInputChange}
            />
          </ss.InputBox>
          <FormInput 
            lable='이름' 
            placeHolder='홍길동'
            formType='text'  
            name='name'
            onChange={handleInputChange}
            value={input.name}
          />
          <ss.GenderInputBox>
            <p>성별</p>
            <ss.GenderBox>
              <ss.GenderWrap>
                <ss.GenderInput
                  type='radio'
                  name='gender'
                  value='man'
                  onChange={handleInputChange}
                />
                <ss.InputSpan>남자</ss.InputSpan>
              </ss.GenderWrap>
              <ss.GenderWrap>
                <ss.GenderInput
                  type='radio'
                  name='gender'
                  value='woman'
                  onChange={handleInputChange}
                />
                <ss.InputSpan>여자</ss.InputSpan>
              </ss.GenderWrap>
            </ss.GenderBox>
          </ss.GenderInputBox>
          <BirthdayInput onBirthdateChange={handleBirthdateChange}/>
          <ss.InputBox>
            <p>생년월일</p>
            <ss.BirthWrap>
              <ss.BirthIcon>
                <BsFillCalendarWeekFill size='24' color='#056676' />
              </ss.BirthIcon>
              {/* <FormInput
                formType='date'
                name='birth'
                value={input.birth}
                onChange={handleInputChange}
              /> */}
            </ss.BirthWrap>
          </ss.InputBox>
          {/* 약관 동의 추가 필요 */}
          <ss.SubmitBtn>가입하기</ss.SubmitBtn>
        </ss.SignupForm>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Signup;
