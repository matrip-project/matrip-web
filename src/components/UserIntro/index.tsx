import { ReactNode } from 'react';
import { ReactComponent as ProfileIcon } from '../../asset/profileNone.svg';
import styled from 'styled-components';

interface UserIntroProps {
  iconSize: number;
  children: ReactNode;
}

function UserIntro({ iconSize, children }: UserIntroProps) {
  return (
    <InfoContainer>
      <ProfileIcon width={iconSize} height={iconSize} />
      {children}
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default UserIntro;
