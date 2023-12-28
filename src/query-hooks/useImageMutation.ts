import { useMutation, useQueryClient } from '@tanstack/react-query';
import { baseAPI } from '../apis/axiosInstance';

const userId = localStorage.getItem('myId');

export const useAddUserProfilePic = () => {
    const queryClient = useQueryClient();
    const queryKey = ['userData', userId];

    return useMutation({
        mutationFn: ({ memberId, path }: { memberId: number, path: any }) => {
            return baseAPI.post(`/member/${memberId}/profile`, { path });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
        onError: (error) => {
            console.error('Add user profile picture failed:', error);
        }
    });
};

export const useDeleteUserProfilePic = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (profileId: number) => {
            return baseAPI.delete(`/profile/${profileId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userData'] });
        },
        onError: (error) => {
            console.error('Delete user profile picture failed:', error);
        }
    });
};
