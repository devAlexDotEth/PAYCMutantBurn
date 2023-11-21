import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Body from './body';

type Props = {
  as?: any;
  size?: 'S' | 'M' | 'L';
  variant?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
  children?: ReactNode;
  href?: string;
  target?: string;
  before?: ReactNode;
  after?: ReactNode;
  iconOnly?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  localStyles?: CSSObject;
}

const El = styled.button(({ size = 'S', iconOnly = false, active, disabled, variant, localStyles }: Props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
  background: 'transparent',
  border: '1px solid transparent',
  borderRadius: 4,
  margin: 0,
  textDecoration: 'none',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  fontFamily:  'Inter, sans-serif',
  lineHeight: 1,
  cursor: 'pointer',
  ...(size === "S" && {
    padding: '8px 12px',
    ...(iconOnly && {
      padding: '8px',
    })
  }),
  ...(size === "M" && {
    padding: '12px 16px',
    gap: 14,
  }),
  ...(size === "L" && {
    padding: '16px',
    ...(iconOnly && {
      padding: '12px',
    })
  }),
  ...(variant === 'PRIMARY' && {
    background: 'var(--light-1000)',
  }),
  ...(variant === 'SECONDARY' && {
    background: 'transparent',
    border: '1px solid var(--button-border)',
  }),
  ...(variant === 'TERTIARY' && {
    background: 'transparent',
    ...(active && {
      border: '1px solid var(--button-border)',
    }), 
  }),
  ...(disabled && {
    cursor: 'not-allowed',
    background: 'var(--dark-100)',
  }),
  ...(localStyles)
}));

const Button: FC<Props> = ({ size = 'S', children, variant = 'SECONDARY', before, as, iconOnly = false, after, localStyles, ...props }) => {
  return (
    <>
      {variant === 'PRIMARY' &&
        <El size={size} variant={variant} iconOnly={iconOnly} as={as} localStyles={localStyles} {...props}>
          {iconOnly ? 
            <>
            {size === 'S' && <>{children}</>}
            {size === 'M' && <>{children}</>}
            {size === 'L' && <>{children}</>}
            </>
            : 
            <>
            {before && <span style={{display: 'flex'}}>{before}</span>}
            {size === 'S' && <Body theme="DARK" size="S" weight="NORMAL" localStyles={{lineHeight: 1}}>{children}</Body>}
            {size === 'M' && <Body theme="DARK" size="M" weight="BOLD" localStyles={{lineHeight: 1}}>{children}</Body>}
            {size === 'L' && <Body theme="DARK" size="L" weight="BOLD" localStyles={{lineHeight: 1}}>{children}</Body>}
            {after && <span style={{display: 'flex'}}>{after}</span>} 
            </> 

          }
        </El>
      }
      {variant === 'SECONDARY' &&       
        <El size={size} variant={variant} iconOnly={iconOnly} as={as} localStyles={localStyles} {...props}>
          {iconOnly ? 
            <>
            {size === 'S' && <>{children}</>}
            {size === 'M' && <>{children}</>}
            {size === 'L' && <>{children}</>}
            </>
            :
            <>
            {before && <span style={{display: 'flex'}}>{before}</span>}
            {size === 'S' && <Body size="S" weight="NORMAL" localStyles={{lineHeight: 1}}>{children}</Body>}
            {size === 'M' && <Body size="M" weight="BOLD" localStyles={{lineHeight: 1}}>{children}</Body>}
            {size === 'L' && <Body size="L" weight="BOLD" localStyles={{lineHeight: 1}}>{children}</Body>}
            {after && <span style={{display: 'flex'}}>{after}</span>}
            </>
          }
        </El>
      }
      {variant === 'TERTIARY' &&       
        <El size={size} variant={variant} iconOnly={iconOnly} as={as} localStyles={localStyles} {...props}>
          {iconOnly ? 
            <>
            {size === 'S' && <>{children}</>}
            {size === 'M' && <>{children}</>}
            {size === 'L' && <>{children}</>}
            </>
            :
            <>
            {before && <span style={{display: 'flex'}}>{before}</span>}
            {size === 'S' && <Body size="S" weight="NORMAL" localStyles={{lineHeight: 1}}>{children}</Body>}
            {size === 'M' && <Body size="M" weight="BOLD" localStyles={{lineHeight: 1}}>{children}</Body>}
            {size === 'L' && <Body size="L" weight="BOLD" localStyles={{lineHeight: 1}} >{children}</Body>}
            {after && <span style={{display: 'flex'}}>{after}</span>}
            </>
          }
        </El>
      }
    </>
  );
}

export default Button;
