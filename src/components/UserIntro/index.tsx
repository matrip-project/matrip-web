import { ReactNode } from 'react';
import { ReactComponent as ProfileIcon } from '../../asset/profileNone.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface UserIntroProps {
  iconSize: number;
  children?: ReactNode;
  id?: number;
}

function UserIntro({ iconSize, children, id }: UserIntroProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/profileView/${id}`);
    } else {
      return;
    }
  };

  return (
    <InfoContainer onClick={handleClick}>
      <ProfileIconWrap width={iconSize} height={iconSize} />
      {children}
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProfileIconWrap = styled(ProfileIcon)`
  margin-right: 5px;
`;

export default UserIntro;
