import { baseAPI } from '../axiosInstance';

export const getMyUserData = async (memberId: number) => {
    try {
        const { data } = await baseAPI.get(`/member/${memberId}`);
        return data;
    } catch (error) {
        console.log('get journey detail fail:', error);
    }
};
