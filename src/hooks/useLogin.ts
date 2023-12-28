
import React, {ChangeEvent, useState} from 'react';
import { postLogin } from '../apis/api/loginApi';
import {useNavigate} from 'react-router-dom';

const useLogin = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();

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
        navigate('/');
      }
    } catch (e) {
      // Handle error here
    }
  };

  return { input, handleInputChange, handleLogin };
};
export default useLogin;
