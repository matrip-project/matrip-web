  import styled from 'styled-components';
  import { getColor } from '../../utils/colorUtils';
  import { theme } from '../../styles/theme/theme';

  type TextType =
    | 'headline1'
    | 'title1'
    | 'title2'
    | 'subtitle1'
    | 'body1'
    | 'body2';

  interface TextProps {
    type?: TextType;
    color?: keyof typeof theme.colors;
  }

  const textStyles: Record<
    TextType,
    { fontSize: string; fontWeight: string; lineHeight: string }
  > = {
    headline1: {
      fontSize: '1.8rem',
      fontWeight: '700',
      lineHeight: '18px'
    },
    title1: {
      fontSize: '1.6rem',
      fontWeight: '500',
      lineHeight: '18px'
    },
    title2: {
      fontSize: '1.6rem',
      fontWeight: '700',
      lineHeight: '18px'
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: '400',
      lineHeight: '18px'
    },
    body1: {
      fontSize: '1.2rem',
      fontWeight: '400',
      lineHeight: '14.52px'
    },
    body2: {
      fontSize: '1.2rem',
      fontWeight: '500',
      lineHeight: '14.52px'
    }
  };

  const StyledText = styled.div<TextProps>`
    font-size: ${(props) =>
      props.type ? textStyles[props.type].fontSize : '16px'};
    font-weight: ${(props) =>
      props.type ? textStyles[props.type].fontWeight : 'normal'};
    line-height: ${(props) =>
      props.type ? textStyles[props.type].lineHeight : 'normal'};
    color: ${(props) =>
      props.color ? getColor(props.color) : props.theme.colors.black};
  `;

  const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    ...props
  }) => {
    return <StyledText {...props}>{children}</StyledText>;
  };

  export default Text;
