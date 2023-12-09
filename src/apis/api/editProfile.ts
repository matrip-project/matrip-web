import { baseAPI } from '../axiosInstance';

export const updateUserProfile = async (memberId: number, profileData: any) => {
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
<<<<<<< HEAD
        console.log(response);
=======
>>>>>>> ce332a8616b7348a5d5162b0d89db2e27800e743
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
export const addUserSocialLink = async (memberId: number, linkData: any) => {
    try {
        const response = await baseAPI.post(`/member/${memberId}/link`, linkData);
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
