import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'TLOS',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.TelosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'TLOS',
    coingeckoId: 'telos',
  },
  {
    name: 'USDT',
    address: '0x623F71f6d0339E4c639d7cA6303B54ACe40Be2aC',
    chainId: ChainId.TelosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'Dai Token',
    address: '0xC50C7a502e6aE874A6299f385F938aF5C30CB91d',
    chainId: ChainId.TelosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'WBTC',
    address: '0xB34fc9b45dd1E2eADC78E25f81e57e14AdA94C92',
    chainId: ChainId.TelosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
];
