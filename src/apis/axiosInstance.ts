import axios from 'axios';

const baseURL = 'http://ec2-3-39-190-233.ap-northeast-2.compute.amazonaws.com';

export const baseAPI = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export const authAPI = () => {
  // const token = getItem('jwt_token')
  return axios.create({
    baseURL: baseURL,
    headers: {
      // TODO 추후 토큰값 받아오는 로직 추가
      // Authorization: `bearer ${token}`,
      Authorization: sessionStorage.getItem('authToken')
    },
    withCredentials: true
  });
};
