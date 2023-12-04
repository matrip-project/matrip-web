import React, { useState, ChangeEvent } from 'react';
import * as gs from '../../styles/GlobalStyles';
import styled from 'styled-components';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import { Text, Spacer, Button } from '../../components/@atoms';


const ResetPassword = () => {
    const [email, setEmail] = useState('');

    const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleReset = () => {
        console.log('sss');
    };

    return (
        <gs.MainContainer>
            <Header edit={false} />
            <gs.MainBox>
                <Spacer height={40}/>
                <Text>비밀번호를 잊어버리셨나요?</Text>
                <Text>가입시 입력한 이메일을 입력해주세요.</Text>
                <Text>인증번호를 보내드립니다.</Text>
                <Spacer height={60}/>
                <InputContainer>
                    <FormInput
                        formType='email'
                        name='email'
                        placeHolder='email'
                        label='이메일'
                        onChange={emailChange}
                        value={email}
                    />
                </InputContainer>
                <Spacer height={46}/>
                <Button
                    onClick={handleReset}
                >
                    <Text color='white'>확인</Text>
                </Button>
                <Spacer height={16}/>
                <Text 
                    type='subtitle1' 
                    color='neutral2'
                >*가입하신 이메일로 접속하시면 재설정 메일을 확인하실수 있습니다.
미발송시 스팸메일도 확인해주시기 바랍니다.</Text>
            </gs.MainBox>
        </gs.MainContainer>
    );
};

export default ResetPassword;

const InputContainer = styled.div`
    width: 100%;
`;