import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Body from './body';

type Props = {
  size?: 'S' | 'M' | 'L';
  theme?: 'LIGHT' | 'DARK';
  children?: ReactNode;
  href?: string;
  target?: string;
  before?: ReactNode;
  after?: ReactNode;
  localStyles?: CSSObject;
  iconOnly?: boolean;
}

const Inner = styled.a(({ size = 'S', theme = 'LIGHT', localStyles }: Props) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  margin: 0,
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  fontFamily:  'Inter, sans-serif',
  lineHeight: 1.5,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  ...(theme === 'LIGHT' && {
    color: 'var(--light-1000)',
  }),
  ...(theme === 'DARK' && {
    color: 'var(--dark-1000)',
  }),
  ...(size === 'S' && {
    fontSize: 14,
    fontWeight: '400',
  }),
  ...(size === 'M' && {
    fontSize: 16,
    fontWeight: '700',
  }),
  ...(size === 'L' && {
    fontSize: 21,
    fontWeight: '700',
  }),
  ...(localStyles)
}));

const Anchor: FC<Props> = ({ size = 'S', children, theme = 'LIGHT', before, after, target, iconOnly, localStyles, ...props }) => {
  return (
    <Inner size={size} theme={theme} localStyles={localStyles} target={target} {...props}>
      <>
      {iconOnly ? 
          <>
          {size === 'S' && <>{children}</>}
          {size === 'M' && <>{children}</>}
          {size === 'L' && <>{children}</>}
          </>
          : 
          <>
          {before && <>{before}</>}
          {size === 'S' && <Body size="S">{children}</Body>}
          {size === 'M' && <Body size="M">{children}</Body>}
          {size === 'L' && <Body size="L">{children}</Body>}
          {after && <>{after}</> }
          </> 
        }      
      </>
    </Inner>
  );
}

export default Anchor;