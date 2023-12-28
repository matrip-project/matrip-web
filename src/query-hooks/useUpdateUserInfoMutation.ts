import { useMutation, useQueryClient } from '@tanstack/react-query';
import {baseAPI} from '../apis/axiosInstance';

type ProfileData = {
    nickname: string,
    intro: string,

};

export default function useUpdateUserInfoMutation() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ memberId, profileData }: { memberId: number, profileData: ProfileData }) => {
            return baseAPI.put(`/member/${memberId}`, profileData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['userData'] });
        }
    });
}
