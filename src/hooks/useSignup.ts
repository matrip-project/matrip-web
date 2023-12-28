
import {useState, useCallback, ChangeEvent} from 'react';
import {SignupInputProps} from '../pages/Signup';
const useSignupInput = (initialState:SignupInputProps) => {
    const [input, setInput] = useState(initialState);

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInput((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    return {input, setInput, handleInputChange};
};

export default useSignupInput;
