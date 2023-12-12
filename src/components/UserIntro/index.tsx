import { ReactNode } from 'react';
import { ReactComponent as ProfileIcon } from '../../asset/profileNone.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface UserIntroProps {
  iconSize: number;
  children?: ReactNode;
  id:number;
}

function UserIntro({ iconSize, children, id }: UserIntroProps) {
  return (
    <InfoContainer to={`/profileView/${id}`}>
      <ProfileIconWrap width={iconSize} height={iconSize} />
      {children}
    </InfoContainer>
  );
}

const InfoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

const ProfileIconWrap = styled(ProfileIcon)`
  margin-right: 5px;
`;

export default UserIntro;
