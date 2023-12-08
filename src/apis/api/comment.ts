import { baseAPI } from '../axiosInstance';

export const getComments = async (journeyId: number, memberId: number) => {
  try {
    const { data } = await baseAPI.get(
      `/comments?journeyId=${journeyId}&memberId=${memberId}`
    );
    return data;
  } catch (error) {
    console.log('get comments fail:', error);
  }
};

export const postComments = async (body: object) => {
  try {
    const { data } = await baseAPI.post('/comments', body);
    return data;
  } catch (error) {
    console.log('post comments fail:', error);
  }
};
