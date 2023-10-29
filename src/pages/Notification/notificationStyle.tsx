import { styled } from 'styled-components';

export const NotificationBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  .msg {
    &:last-child {
      border-bottom: none;
    }
  }
`;

export const ProfileIconBox = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const ProfileImg = styled.img`
  border: solid #dcdcdc 1px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const NotificationMsgBox = styled.div`
  display: flex;
  align-items: center;
  height: 55px;
  line-height: 55px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-bottom: solid #dcdcdc 1px;
`;

export const NotificationTitle = styled.h3`
  // font-size: 20px;
  // font-weight: 600;
  color: #9c9c9c;
`;

export const NotificationTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
