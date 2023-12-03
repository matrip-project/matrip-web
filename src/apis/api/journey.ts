import { baseAPI } from '../axiosInstance';

export const getJourneyDetail = async (id: number) => {
  try {
    const { data } = await baseAPI.get(`/journeys/${id}`);
    return data;
  } catch (error) {
    console.log('get journey detail fail:', error);
  }
};
