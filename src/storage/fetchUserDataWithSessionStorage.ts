import { getUserData } from '../apis/api/userData';

const id: string | null = localStorage.getItem('myId');

export const fetchUserDataWithlocalStorage = async (data: any) => {
  try {
    localStorage.setItem('userData', JSON.stringify(data));
    console.log(data);
    return;
  } catch (e) {
    console.log(e);
  }
};
