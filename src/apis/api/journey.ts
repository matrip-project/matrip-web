import { baseAPI } from '../axiosInstance';

export const getJourneyList = async () => {
  try {
    const { data } = await baseAPI.get('/journeys');
    return data;
  } catch (error) {
    console.log('get journey list fail:', error);
  }
};

export const getInterestList = async (id: number) => {
  try {
    const { data } = await baseAPI.get(`/journeys/interest?memberId=${id}`);
    return data;
  } catch (error) {
    console.log('get interest list fail:', error);
  }
};

export const getMyPostList = async (id: number) => {
  try {
    const { data } = await baseAPI.get(`/journeys/mypage?memberId=${id}`);
    return data;
  } catch (error) {
    console.log('get my post list fail:', error);
  }
};

export const getJourneyDetail = async (id: number) => {
  try {
    const { data } = await baseAPI.get(`/journeys/${id}`);
    return data;
  } catch (error) {
    console.log('get journey detail fail:', error);
  }
};

export const postJourney = async (body: object) => {
  try {
    const { data } = await baseAPI.post('/journeys', body);
    return data;
  } catch (error) {
    console.log('post journey fail:', error);
  }
};

export const putJourney = async (body: object) => {
  try {
    const { data } = await baseAPI.put('/journeys', body);
    return data;
  } catch (error) {
    console.log('put journey fail:', error);
  }
};
