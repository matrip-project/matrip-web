import styled from 'styled-components';
import { getColor } from '../../utils/colorUtils';
import { theme } from '../../styles/theme/theme';

type TextType = 'headline1' | 'headline2' | 'title1' | 'subtitle1' | 'body1';

interface TextProps {
  type?: TextType;
  color?: keyof typeof theme.colors;
}

const textStyles: Record<
  TextType,
  { fontSize: string; fontWeight: string; lineHeight: string }
> = {
  headline1: {
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '19.36px'
  },
  headline2: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '18px'
  },
  title1: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18px'
  },
  subtitle1: {
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '14.52px'
  },
  body1: {
    fontSize: '10px',
    fontWeight: '400',
    lineHeight: '14px'
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
