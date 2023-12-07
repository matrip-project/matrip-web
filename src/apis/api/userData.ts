import { baseAPI } from '../axiosInstance';

export const getMyUserData = async (memberId: number) => {
    try {
        const { data } = await baseAPI.get(`/member/${memberId}`);
        const storageDate = JSON.stringify(data);
        sessionStorage.setItem('userData', storageDate);
        return data;
    } catch (error) {
        console.log('get journey detail fail:', error);
    }
};
