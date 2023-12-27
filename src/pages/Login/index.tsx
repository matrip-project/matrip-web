import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import * as ls from './loginStyle';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import {
  Spacer,
  InputLabel,
  Text,
  CheckBox,
  Image
} from '../../components/@atoms';

import { postLogin } from '../../apis/api/loginApi';
import { getUserData } from '../../apis/api/userData';
import { useAppDispatch } from '../../redux/hooks';
import { loginSuccess, fetchUserData } from '../../redux/modules/userDataSlice';
import {useUserInfoQuery} from '../../query-hooks/userDataQueries';



function Login() {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();





  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsPasswordCorrect(false);
      }, 3000);
    };
  }, [isPasswordCorrect]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { email, password } = input;
      const res = await postLogin({ email, password });
      if (res) {
        localStorage.setItem('authToken', res.data.token);
        localStorage.setItem('myId', res.data.id);
        const userData = await getUserData(res.data.id);
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/');
      }
    } catch (e) {
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
        <Image height={100} />
        <ls.LoginForm onSubmit={handleLogin}>
          <ls.InputBox>
            <InputLabel label='이메일' />
            <Spacer height={10} />
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
            <Spacer height={10} />
            <FormInput
              formType='password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
              placeHolder='비밀번호를 입력해주세요'
            />
          </ls.InputBox>
          {isPasswordCorrect && (
            <Text type='subtitle1' color='primary'>
              비밀번호가 일치하지 않습니다.
            </Text>
          )}
          <ls.OptionBox>
            <CheckBox
              isChecked={isAutoLogin}
              label='자동 로그인'
              handleCheck={handleCheck}
            />
          </ls.OptionBox>

          <ls.SubmitBtn type='submit'>
            <Text type='title1' color='white'>
              로그인
            </Text>
          </ls.SubmitBtn>
          <Spacer height={8} />
          <ls.SignupBtn>
            <Link to='/signup'>
              <Text type='title1' color='white'>
                회원가입
              </Text>
            </Link>
          </ls.SignupBtn>
        </ls.LoginForm>
        <Spacer height={12} />
        <div>
          <ls.TextBtn>아이디 찾기</ls.TextBtn>
          <ls.TextBtn>비밀번호 재설정</ls.TextBtn>
        </div>
      </gs.MainBox>
    </gs.MainContainer>
  );
}

export default Login;
