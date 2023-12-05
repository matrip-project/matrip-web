import { baseAPI } from './axiosInstance';

type LoginProps = {
    email: string
    password: string,
};

export const postLogin = async({email, password}: LoginProps) => {
    try{
        const response = await baseAPI.post('/join', {
            email,
            password,
        });
        return response;
    } catch (err) {
        console.log(err);
    }
};