import { baseAPI } from '../axiosInstance';

export const updateUserProfile = async ({ memberId, profileData }: { memberId: number, profileData: any }) => {
    try {
        const response = await baseAPI.put(`/member/${memberId}`, profileData);
        return response;
    } catch (error) {
        console.log('update user profile fail:', error);
    }
};

// 사진 추가
export const addUserProfilePic = async (memberId: number, path: any) => {
    try {
        const response = await baseAPI.post(`/member/${memberId}/profile`, {
            path
        });
        console.log(response);
        return response;
    } catch (error) {
        console.log('Add user profile picture fail:', error);
    }
};

// 사진 삭제
export const deleteUserProfilePic = async (profileId: number) => {
    try {
        const response = await baseAPI.delete(`/profile/${profileId}`);
        return response;
    } catch (error) {
        console.log('Delete user profile picture fail:', error);
    }
};

// 소셜링크 추가
export const addUserSocialLink = async (memberId: number, path: string) => {
    try {
        const response = await baseAPI.post(`/member/${memberId}/link`, {
            path
        });
        return response;
    } catch (error) {
        console.log('Add user social link fail:', error);
    }
};

// 소셜링크 삭제
export const deleteUserSocialLink = async (linkId: number) => {
    try {
        const response = await baseAPI.delete(`/link/${linkId}`);
        return response;
    } catch (error) {
        console.log('Delete user social link fail:', error);
    }
};
