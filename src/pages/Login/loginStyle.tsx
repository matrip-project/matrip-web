import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LoginForm = styled.form`
  width: 100%;
`;

export const InputBox = styled.div`
  margin-bottom: 30px;
`;

export const InputLabel = styled.p`
  //   font-weight: 600;
`;

export const OptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 30px 0;
  // color: #9c9c9c;
  font-size: 14px;
  font-weight: 600;
`;

export const SignupBtn = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Or = styled.p`
  color: #9c9c9c;
  font-size: 14px;
  font-weight: 600;
  margin: 40px 0;
`;

export const SnsLoginBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const SnsIconWrap = styled.div`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const SnsIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid 1px #dcdcdc;
  border-radius: 50%;
`;

export const GoogleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: solid 1px #dcdcdc;
  border-radius: 50%;
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
