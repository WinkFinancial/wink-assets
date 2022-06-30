import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const polygonTokens: IToken[] = [
  {
    name: 'USDC',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
  },
  {
    name: 'USDT',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
  },
  {
    name: 'Dai Token',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
  },
  {
    name: 'ETH',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
  },
  {
    name: 'MATIC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'MATIC',
  },
];
