import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as gs from '../../styles/GlobalStyles';
import * as ls from './loginStyle';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import { Spacer, InputLabel, Text, CheckBox } from '../../components/@atoms';
import useLogin from '../../hooks/useLogin';

function Login() {
  const { input, handleInputChange, handleLogin } = useLogin();
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setIsPasswordCorrect(false);
      }, 3000);
    };
  }, [isPasswordCorrect]);

  const handleCheck = () => {
    setIsAutoLogin(!isAutoLogin);
  };

  return (
    <gs.MainContainer>
      <Header edit={false} />
      <gs.MainBox>
        <ls.LoginLogo />
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
