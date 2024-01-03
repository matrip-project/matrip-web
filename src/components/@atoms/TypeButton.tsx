import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { ReactComponent as List } from '../../asset/listIcon.svg';
import { ReactComponent as Tile } from '../../asset/tileIcon.svg';

interface TypeButtonProps {
  setIsListType: React.Dispatch<React.SetStateAction<boolean>>;
}

function TypeButton({ setIsListType }: TypeButtonProps) {
  const theme = useTheme();
  const [isActive, setIsActive] = useState<number>(0);

  const handleClick = (bool: boolean) => {
    setIsListType(bool);
    setIsActive(bool ? 0 : 1);
  };

  return (
    <TypeButtonBox>
      <ListIcon
        onClick={() => handleClick(true)}
        stroke={isActive === 0 ? theme.colors.primary : theme.colors.neutral3}
      />
      <TileIcon
        onClick={() => handleClick(false)}
        stroke={isActive === 1 ? theme.colors.primary : theme.colors.neutral3}
      />
    </TypeButtonBox>
  );
}

const TypeButtonBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 20px;
  justify-content: right;
  align-items: center;
  margin-right: 24px;
  gap: 8px;
`;

const ListIcon = styled(List)`
  cursor: pointer;
`;

const TileIcon = styled(Tile)`
  cursor: pointer;
`;

export default TypeButton;
