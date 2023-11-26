import React, {ButtonHTMLAttributes} from 'react';
import styled from 'styled-components';

type ButtonType = 'primary' | 'secondary' | 'ghost';
type ButtonColor = 'black' | 'white' | 'black';
type ButtonSize = 'small' | 'medium' | 'large';


interface ContainerProps {
  type?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
}

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps
  extends ContainerProps,
    Omit<ButtonAttributes, 'type' | 'color'> {
  htmlType?: ButtonAttributes['type'];
}

const StyledInterestButton = styled.button<ButtonProps>`

  background: ${(props) => (props.type === 'primary' ? props.theme.colors.white : props.theme.colors.primary)};
  color: ${(props) => (props.type === 'primary' ?  props.theme.colors.black :  props.theme.colors.white)};
  padding: ${(props) => (props.size === 'large' ? '10px 20px' : props.size === 'medium' ? '4px 18px' : '2px 5px')};
  border-radius: 20px;
  border: 1px solid #D9D9D9;
  // TODO 스타일 추가!
`;

const InterestButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type = 'primary',
  color = 'black',
  size = 'medium',
  children,
  ...rest
}) => {
  return (
    <StyledInterestButton
      type={type}
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </StyledInterestButton>
  );
};

export default InterestButton;