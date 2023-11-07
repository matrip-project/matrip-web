import React, {ButtonHTMLAttributes} from 'react';
import styled from 'styled-components';

type ButtonType = 'primary' | 'secondary' | 'ghost';
type ButtonColor = 'blue' | 'ocher' | 'black';
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

const StyledButton = styled.button<ButtonProps>`
  background: ${(props) => (props.type === 'primary' ? props.theme.colors.primary : props.theme.colors.white)};
  color: ${(props) => (props.color ? props.color : 'black')};
  padding: ${(props) => (props.size === 'large' ? '10px 20px' : props.size === 'medium' ? '5px 10px' : '2px 5px')};
  border-radius: 11px;
  // TODO 스타일 추가!
`;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  type = 'primary',
  color = 'blue',
  size = 'medium',
  children,
  ...rest
}) => {
  return (
    <StyledButton
      type={type}
      color={color}
      size={size}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;