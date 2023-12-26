import { useQuery } from '@tanstack/react-query';
import { baseAPI } from '../apis/axiosInstance';

export const useUserInfoQuery = (userId : number) => {
  const queryKey = ['userData', userId];

  const { data, isLoading, error } = useQuery({
    queryKey: [queryKey], 
    queryFn: async () => {
    const response = await baseAPI.get(`/member/${userId}`);
    return response.data; 
  }});

  return { data, isLoading, error };
};
