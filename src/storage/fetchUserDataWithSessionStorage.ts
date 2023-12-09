import {getMyUserData} from '../apis/api/userData';

const id: string | null = sessionStorage.getItem('myId');

export const fetchUserDataWithSessionStorage = async () => {
    try{
        const data  = await getMyUserData(Number(id));
        sessionStorage.setItem('userData', JSON.stringify(data));
        console.log(data);
        return;
    }catch (e) {
        console.log(e);
    }
};
