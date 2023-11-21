import { FC } from 'react';
import styled from '@emotion/styled';
import Button from './button';
import Box from './box';
import ChevronDown from './icons/chevron';
import Body from './body';

export type Props = {
  balance?: number;
  profile?: string;
  address?: string;
};

const Eth = styled.div(({
  gap: 4,
  background: 'transparent',
  border: '1px solid var(--button-border)',
  height: 35,
  display: 'none',
  alignItems: 'center',
  padding: '8px 12px',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  '@media (min-width: 600px)' :{
    display: 'flex',
  },
}));

const Address = styled.div(({
  width: '8ch',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}));

const LocalButton = styled(Button)(({
  '@media (min-width: 600px)' :{
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    marginLeft: -1,
  },
}));

const Wallet: FC<Props> = ({ balance = '0', address = '0x00000000000000000000000000000000000', profile }) => {

  const handleClick = () => {
    alert('Change Wallet!');
  };

  return (
    <Box localStyles={{display: 'flex', alignItems: 'center'}}>
      <Eth><Body>{balance} ETH</Body></Eth>
      <LocalButton 
        variant='SECONDARY'
        size='S'
        before={profile && <img width={17} height={17} src={profile} alt="Profile" />} 
        after={<ChevronDown />}
        onClick={handleClick}
      >
        <Address>{address}</Address>
      </LocalButton>
    </Box>
  );
}

export default Wallet;
