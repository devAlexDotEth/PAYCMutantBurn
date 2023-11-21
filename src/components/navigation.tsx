import { FC, ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { CSSObject } from '@emotion/react';
import Logo from './logo';
import Box from './box';
import Menu from './icons/menu';
import Button from './button';

export type Props = {
  background?: string;
  children?: ReactNode;
  wallet?: ReactNode;
  localStyles?: CSSObject;
};

const El = styled.div(({ localStyles }: Props) => ({
  background: 'var(--dark-1000)',
  display: 'grid', 
  gridTemplateColumns: '1fr auto', 
  minHeight: 86, 
  alignItems: 'center',
  padding: '0 var(--scale-24)',
  borderBottom: '1px solid #FFFFFF40',
  width: '100%',
  '@media (min-width: 1080px)' :{
    padding: '0 var(--scale-36)',
  },
  '@media (min-width: 1200px)' :{
    gridTemplateColumns: 'auto 1fr auto',
    padding: '0 var(--scale-48)',
  },
  ...(localStyles)
}));

const DesktopMenu = styled.div(({
  display: 'none',
  gap: 6,
  '@media (min-width: 1200px)' :{
    display: 'flex',
  }
}));

const MobileMenu = styled.div(({
  padding: 'var(--scale-8) var(--scale-6)',
  display: 'grid',
  gap: 6,
  position: 'fixed',
  top: 86,
  left: 0,
  zIndex: 1,
  background: 'var(--dark-1000)',
  width: '100%',
  '@media (min-width: 700px)' :{
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  '@media (min-width: 1200px)' :{
    display: 'none',
  }
}));

const MenuButton = styled(Button)(({
  display: 'inline-flex',
  marginLeft: 'var(--scale-12)',
  '@media (min-width: 1200px)' :{
    display: 'none',
  }
}));



const Navigation: FC<Props> = ({ children, wallet, localStyles, ...props }) => {

  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <El localStyles={localStyles} {...props}>
        <Box localStyles={{display: 'flex', alignItems: 'center', marginRight: 'var(--scale-36)'}}>
          <Logo />
          <MenuButton iconOnly size='S' variant='TERTIARY' onClick={() => setIsOn(!isOn)}>
            <Menu size="S" theme="LIGHT"/>
          </MenuButton> 
        </Box>
        <DesktopMenu>{children}</DesktopMenu>
        {wallet}
        {isOn ? (<MobileMenu>{children}</MobileMenu>) : ("")}
      </El>
    </>
  );
}

export default Navigation;