import axios from 'axios';

export const baseAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export const authAPI = () => {
  // const token = getItem('jwt_token')
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      // TODO 추후 토큰값 받아오는 로직 추가
      // Authorization: `bearer ${token}`,
    },
    withCredentials: true
  });
};
