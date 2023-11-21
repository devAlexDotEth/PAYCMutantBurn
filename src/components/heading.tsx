import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

type Props = {
  level?: '1' | '2' | '3' | '4' | '5' | '6';
  theme?: 'LIGHT' | 'DARK';
  children?: ReactNode;
  style?: any;
  localStyles?: CSSObject;
};

const Heading: FC<Props> = ({ level = '1', children, theme = 'LIGHT', localStyles, ...props}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const Inner = styled(HeadingTag)(({ level = '1', theme = 'LIGHT', localStyles }: Props) => ({
    margin: 0,
    '-webkit-font-smoothing': 'antialiased',
    fontWeight: '500',
    '-moz-osx-font-smoothing': 'grayscale',
    fontFamily:  'Akshar, sans-serif',
    lineHeight: 1,
    color: 'var(--dark-1000)',
    textTransform: 'uppercase',
    ...(theme === 'LIGHT' && {
      color: 'var(--light-1000)',
    }),
    ...(theme === 'DARK' && {
      color: 'var(--dark)',
    }),
    ...(level === '1' && {
      fontSize: 72,
      letterSpacing: -3,
    }),
    ...(level === '2' && {
      fontSize: 60,
      letterSpacing: -2,
    }),
    ...(level === '3' && {
      fontSize: 48,
      letterSpacing: -1.5,
    }),
    ...(level === '4' && {
      fontSize: 36,
      letterSpacing: -1,
    }),
    ...(level === '5' && {
      fontSize: 24,
    }),
    ...(level === '6' && {
      fontSize: 21,
    }),
    ...(localStyles)
  }));

  return (
    <Inner level={level} theme={theme} localStyles={localStyles} {...props}>{children}</Inner>
  );
}

export default Heading;