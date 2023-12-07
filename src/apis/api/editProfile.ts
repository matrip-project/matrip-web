import { baseAPI } from '../axiosInstance';

export const updateUserProfile = async (memberId: number, profileData: any) => {
    try {
        const response = await baseAPI.put(`/member/${memberId}`, profileData);
        return response;
    } catch (error) {
        console.log('update user profile fail:', error);
    }
};
