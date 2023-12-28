import { postSignup } from '../apis/api/signupApi';
import {SignupInputProps} from '../pages/Signup';

export const submitSignup = async (input: SignupInputProps) => {
    const { email, password, name, birthDate: birth, nickName: nickname } = input;
    if (birth === null) {
        console.error('Birth date is not selected');
        return;
    }
    const response = await postSignup({
        email,
        password,
        name,
        birth,
        nickname
    });

    return response;
};
