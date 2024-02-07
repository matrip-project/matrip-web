import { baseAPI } from '../axiosInstance';

interface FilterProps {
  place: string | null;
  age: number | 0;
  status: string | 'ACTIVE';
  startDate: string | null;
  endDate: string | null;
}

export const getJourneyList = async () => {
  try {
    const { data } = await baseAPI.get('/journeys');
    return data;
  } catch (error) {
    console.log('get journey list fail:', error);
  }
};

export const getSearchResult = async (keyword: string) => {
  try {
    const { data } = await baseAPI.get(`/journeys?keyword=${keyword}`);
    return data;
  } catch (error) {
    console.log('get search result fail:', error);
  }
};

export const getPopularTravelList = async (place: string) => {
  try {
    const { data } = await baseAPI.get(`/journeys?city=${place}`);
    return data;
  } catch (error) {
    console.log('get popular travel list fail:', error);
  }
};

export const getFilteredList = async ({
  place,
  age,
  status,
  startDate,
  endDate
}: FilterProps) => {
  let query = `/journeys?status=${status}&`;

  if (place) {
    query += `city=${place}&`;
  }
  if (age > 0) {
    query += `age=${age}&`;
  }
  if (startDate) {
    query += `startDate=${startDate}&endDate=${endDate}&`;
  }

  try {
    const { data } = await baseAPI.get(query);
    return data;
  } catch (error) {
    console.log('get filtered list fail:', error);
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
