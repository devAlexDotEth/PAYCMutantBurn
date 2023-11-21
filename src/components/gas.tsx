import React, { useState, useEffect } from 'react';
import Fast from './icons/fast';
import Medium from './icons/medium';
import Slow from './icons/slow';
import Eth from './icons/eth';
import Stack from './stack';
import Body from './body';

interface GasData {
  fast: number;
  standard: number;
  slow: number;
}

interface EthereumPriceData {
  usd: number;
}

const GasTracker: React.FC = () => {
  const [gasData, setGasData] = useState<GasData | null>(null);
  const [ethereumPrice, setEthereumPrice] = useState<EthereumPriceData | null>(null);

  useEffect(() => {
    // Fetch gas price data from Etherscan
    const fetchGasData = async () => {
      try {
        const response = await fetch(
          'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=45KHI7UXA3EV6CWK8S2E56RXCTTPPJAC66'
        );
        const data = await response.json();

        if (data.status === '1') {
          const gasPrices: GasData = {
            fast: parseInt(data.result.FastGasPrice, 10),
            standard: parseInt(data.result.ProposeGasPrice, 10),
            slow: parseInt(data.result.SafeGasPrice, 10),
          };
          setGasData(gasPrices);
        } else {
          console.error('Error fetching gas data:', data.message);
        }
      } catch (error) {
        console.error('Error fetching gas data:', error);
      }
    };

    // Fetch current Ethereum price from CoinGecko
    const fetchEthereumPrice = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'
        );
        const data = await response.json();

        if (data.ethereum && data.ethereum.usd) {
          setEthereumPrice({ usd: data.ethereum.usd });
        } else {
          console.error('Error fetching Ethereum price data');
        }
      } catch (error) {
        console.error('Error fetching Ethereum price data:', error);
      }
    };

    // Call the API functions
    fetchGasData();
    fetchEthereumPrice();
  }, []);

  return (
    <Stack 
      direction='HORIZONTAL' 
      space={'var(--scale-16)'} 
      localStyles={{
        margin: '0 auto',
        justifyContent: 'center',
        '@media (min-width: 1080px)': {
          justifyContent: 'end'
        }
      }}>
      <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center', width: 'auto'}}>
        <Eth theme="LIGHT" size="S" />
        {ethereumPrice !== null ? (
          <Body size='S'>${ethereumPrice.usd}</Body>
        ) : (
          <Body size='S'>Loading Ethereum price...</Body>
        )}
      </Stack>
      {gasData !== null ? (
        <Stack direction='HORIZONTAL' space={'var(--scale-12)'} localStyles={{width: 'auto'}}>
          <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
            <Fast theme="LIGHT" size="S" />
            <Body size='S'>{gasData.fast}</Body>
          </Stack>
          <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
            <Medium theme="LIGHT" size="S" />
            <Body size='S'>{gasData.standard}</Body>
          </Stack>
          <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{alignItems: 'center'}}>
            <Slow theme="LIGHT" size="S" />
            <Body size='S'>{gasData.slow}</Body>
          </Stack>
        </Stack>
        ) : (
          <Stack direction='HORIZONTAL' space={'var(--scale-4)'} localStyles={{width: 'auto', textAlign: 'center'}}>
            <Body size='S'>Loading gas...</Body>
          </Stack>
        )
    }
    </Stack>
  );
};

export default GasTracker;
