import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'RBTC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'RBTC',
    coingeckoId: 'rootstock',
  },
  {
    name: 'USDT',
    address: '0x8672aDF72de0a0650c4001aaD8083042A4D18E88',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'Dai Token',
    address: '0x4ec48Cb892Fa8D66bF87A43A5583c748fe8c1613',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
];
