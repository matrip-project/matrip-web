import {getUserData} from '../apis/api/userData';

const id: string | null = sessionStorage.getItem('myId');

export const fetchUserDataWithSessionStorage = async (data:any) => {
    try{
        sessionStorage.setItem('userData', JSON.stringify(data));
        console.log(data);
        return;
    }catch (e) {
        console.log(e);
    }
};
