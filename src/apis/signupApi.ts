import { baseAPI } from './axiosInstance';

type SignupProps = {
    email: string
    password: string,
    name: string,
    birth: Date,
    nickname: string
};

export const postSignup = async({email, password, name, birth, nickname}: SignupProps) => {
    try{
        const response = await baseAPI.post('/join', {
            email,
            password,
            name,
            birth,
            nickname
        });
        return response;
    } catch (err) {
        console.log(err);
    }
};