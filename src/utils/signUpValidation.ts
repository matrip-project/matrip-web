import {SignupInputProps} from '../pages/Signup';

export const validateInput = (input:SignupInputProps) => {
    if (input.birthDate === null) {
        console.log('Birth date is not selected');
        return false;
    }
    if (!input.password || !input.passwordCheck || input.password !== input.passwordCheck){
        console.log('Pawssword Invalid');
        return false;
    }

    return true;
};
