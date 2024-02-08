import {ChangeEvent, useRef, useState} from 'react';
import {uploadImage} from '../utils/uploadImage';
import {useAddUserProfilePic, useDeleteUserProfilePic} from '../query-hooks/useImageMutation';

import {UserProps} from '../types/userData';

export const useImage = (userData: UserProps) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);

    const { mutateAsync: addUserProfilePic } = useAddUserProfilePic();
    const { mutateAsync: deleteUserProfilePic } = useDeleteUserProfilePic();


    const myId = localStorage.getItem('myId');

    const onAddClick = () => {
        fileInput.current?.click();
    };
    const handleAddPic = async (e: ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = e.target.files;
        if (files) {
            setFile(files[0]);
            const filePath = await uploadImage(files[0]);
            if (filePath){
                await addUserProfilePic({memberId: Number(myId), path: filePath});
                // !!TODO 이미지 추가 및 삭제 즉각 반영 로직 이 필요함.


            }
        }
    };

    const handleDeletePic = async (imageId: number) => {
        try {
            await deleteUserProfilePic(imageId);
        } catch (error) {
            console.error(error);
        }
    };

    return { fileInput, onAddClick, handleAddPic, handleDeletePic };
};
