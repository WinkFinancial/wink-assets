import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'RBTC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    symbol: 'RBTC',
    coingeckoId: 'rootstock',
  },
  {
    name: 'USDT',
    address: '0xEf213441a85DF4d7acBdAe0Cf78004E1e486BB96',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'Dai Token',
    address: '0x6B1a73d547F4009A26B8485b63D7015D248AD406',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
];
