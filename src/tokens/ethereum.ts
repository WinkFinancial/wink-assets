import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const ethereumTokens: IToken[] = [
  {
    name: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    chainId: ChainId.Ethereum,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
  },
  {
    name: 'USDT',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    chainId: ChainId.Ethereum,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
  },
  {
    name: 'Dai Token',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    chainId: ChainId.Ethereum,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
  },
  {
    name: 'Wrapped BTC',
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    chainId: ChainId.Ethereum,
    enabled: true,
    decimals: 8,
    symbol: 'WBTC',
  },
  {
    name: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Ethereum,
    enabled: false,
    decimals: 18,
    symbol: 'ETH',
  },
];
