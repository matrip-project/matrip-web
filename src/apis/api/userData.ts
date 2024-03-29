import { baseAPI, authAPI } from '../axiosInstance';

export const getUserData = async (memberId: number) => {
  try {
    const { data } = await baseAPI.get(`/member/${memberId}`);
    return data;
  } catch (error) {
    console.log('GET USER DATA FAILED:', error);
  }
};
