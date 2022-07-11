import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'USDT',
    address: '0x863C2c19208aC736324e438DF9a49F39c3dbA843',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'WBTC',
    address: '0xCbBbdc113F480a83050C7Cd2420E100Cf6305858',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'Dai Token',
    address: '0xD2E96745ddd7c6641866C9335909AeC605eF07A4',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Rinkeby,
    enabled: false,
    decimals: 18,
    symbol: 'BNB',
    coingeckoId: 'binancecoin',
  },
];
