import axios from 'axios';

const API_URL = 'http://ec2-3-39-190-233.ap-northeast-2.compute.amazonaws.com';

export const baseAPI = () => {
  return axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
  });
};

export const authAPI = () => {
  // const token = getItem('jwt_token')
  return axios.create({
    baseURL: API_URL,
    headers: {
      // TODO 추후 토큰값 받아오는 로직 추가
      // Authorization: `bearer ${token}`,
    },
    withCredentials: true
  });
};
