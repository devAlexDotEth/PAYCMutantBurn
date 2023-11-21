import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';

type Props = {
  size?: 'S' | 'M' | 'L';
  theme?: 'LIGHT' | 'DARK';
  weight?: 'NORMAL' | 'BOLD';
  children?: ReactNode;
  localStyles?: CSSObject;
}

const El = styled.p(({ size = 'S', theme = 'LIGHT', weight = 'NORMAL', localStyles }: Props) => ({
  margin: 0,
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  fontFamily:  'Inter, sans-serif',
  lineHeight: 1.5,
  ...(theme === 'LIGHT' && {
    color: 'var(--light-1000)',
  }),
  ...(theme === 'DARK' && {
    color: 'var(--dark-1000)',
  }),
  ...(weight === 'NORMAL' && {
    fontWeight: '400',
  }),
  ...(weight === 'BOLD' && {
    fontWeight: '700',
  }),
  ...(size === 'S' && {
    fontSize: 14,
  }),
  ...(size === 'M' && {
    fontSize: 16,
  }),
  ...(size === 'L' && {
    fontSize: 21,
  }),
  ...(localStyles)
}));

const Body: FC<Props> = ({ size = 'S', children, theme = 'LIGHT', weight = 'NORMAL', localStyles, ...props }) => {
  return (
    <El size={size} weight={weight} theme={theme} localStyles={localStyles} {...props}>
      {children}
    </El>
  );
}

export default Body;