import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import * as gs from '../../styles/GlobalStyles';
import * as ls from './loginStyle';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import InputLabel from '../../components/@atoms/InputLabel';
import Spacer from '../../components/@atoms/Spacer';
import Text from '../../components/@atoms/Text';
import CheckBox from '../../components/@atoms/CheckBox';
import Image from '../../components/@atoms/Image';

import naverLogo from '../../asset/naver.png';
import kakaoLogo from '../../asset/kakao.jpg';



function Login() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    return() => {
      setTimeout(()=>{
        setIsPasswordCorrect(false);
      },3000);
    };
  }, [isPasswordCorrect]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, password } = input;
    try{
      console.log( email, password );
    }catch (e){
      // TODO 에러 핸들링 분기처리
      setIsPasswordCorrect(true);
    }
  };

  const handleCheck = () => {
    setIsAutoLogin(!isAutoLogin);
  };

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <Image height={100}/>
        <ls.LoginForm onSubmit={handleLogin}>
          <ls.InputBox>
            <InputLabel label='이메일' />
            <Spacer height={10}/>
            <FormInput
              name='email'
              formType='email'
              value={input.email}
              onChange={handleInputChange}
              placeHolder='이메일을 입력해주세요'
            />
          </ls.InputBox>
          <ls.InputBox>
            <InputLabel label='비밀번호' />
            <Spacer height={10}/>
            <FormInput
              formType='password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
              placeHolder='비밀번호를 입력해주세요'
            />
          </ls.InputBox>
          {isPasswordCorrect &&
            <Text type='subtitle1' color='primary'>비밀번호가 일치하지 않습니다.</Text>
          }
          <ls.OptionBox>
            <CheckBox isChecked={isAutoLogin} label='자동 로그인' handleCheck={handleCheck}/>
          </ls.OptionBox>

          <ls.SubmitBtn type='submit'>
            <Text type='title1' color='white'>로그인</Text>
          </ls.SubmitBtn>
          <Spacer height={8} />
          <ls.SignupBtn >
          <Text type='title1' color='white'>회원가입</Text>
          </ls.SignupBtn>
        </ls.LoginForm>
        <Spacer height={12}/>
        <div>
          <ls.TextBtn>아이디 찾기</ls.TextBtn>
          <ls.TextBtn>비밀번호 재설정</ls.TextBtn>
        </div>
        {/* <ls.Or>또는</ls.Or>
        <ls.SnsLoginBox>
          <ls.SnsIconWrap>
            <ls.SnsIcon src={naverLogo} alt='네이버 로그인' />
          </ls.SnsIconWrap>
          <ls.SnsIconWrap>
            <ls.GoogleIcon>
              <svg
                width='36'
                height='36'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90912H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7637 23.04 12.2614Z'
                  fill='#4285F4'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 23.4998C15.105 23.4998 17.7081 22.47 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.9259 12 18.9259C9.00474 18.9259 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z'
                  fill='#34A853'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z'
                  fill='#FBBC05'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z'
                  fill='#EA4335'
                />
              </svg>
            </ls.GoogleIcon>
          </ls.SnsIconWrap>
          <ls.SnsIconWrap>
            <ls.SnsIcon src={kakaoLogo} alt='카카오 로그인' />
          </ls.SnsIconWrap>
        </ls.SnsLoginBox> */}
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Login;

