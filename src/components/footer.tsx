import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Body from './body';
import Stack from './stack';
import Button from './button';
import GasTracker from './gas';

export type Props = {
  localStyles?: CSSObject;
  socials?: ReactNode;
  contactLink?:  string;
  ethPrice?: number | string | ReactNode;
  highGas?: number | string | ReactNode;
  mediumGas?: number | string | ReactNode;
  lowGas?: number | string | ReactNode;
};

const El = styled.div(({ localStyles }: Props) => ({
  background: 'var(--dark-1000)',
  alignItems: 'center',
  width: '100%',
  borderTop: '1px solid #FFFFFF40',
  padding: 'var(--scale-12) var(--scale-24)',
  '@media (min-width: 1080px)' :{
    display: 'grid',
    minHeight: 50,
    gridTemplateColumns: '1fr auto',
    padding: '0 var(--scale-36)',
  },
  '@media (min-width: 1200px)' :{
    padding: '0 var(--scale-48)',
  },
  ...(localStyles)
}));


export const Footer: FC<Props> = ({socials, contactLink, ethPrice = '1,701.55', highGas = '11', mediumGas = '8', lowGas = '6', localStyles}) => {
  return (
    <El localStyles={localStyles}>
      <Stack direction='HORIZONTAL' space={'var(--scale-12)'} localStyles={{alignItems: 'center'}} >
        <Body localStyles={{
          display: 'none', 
          '@media (min-width: 1080px)': {
            display: 'flex',
            marginRight: 'var(--scale-16)'
          }
        }}>
          Pepe Ape Yacht Club ™
        </Body>
        <Button as="a" size='S' variant='SECONDARY' href={contactLink} 
          localStyles={{
            width: '100%', 
            marginBottom: 'var(--scale-16)',
            '@media (min-width: 1080px)': {
              display: 'none'
            }
          }}>
            Contact us
        </Button>
        <Stack 
          direction='HORIZONTAL' 
          space={'var(--scale-16)'} 
          localStyles={{
            width: 'auto', 
            alignItems: 'center',
            display: 'none', 
            '@media (min-width: 1080px)': {
              display: 'flex'
            },
          }}>
          {socials}
        </Stack>
      </Stack>
      <GasTracker />
    </El>
  );
}

export default Footer;