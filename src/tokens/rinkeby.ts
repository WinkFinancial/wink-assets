import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'USDT',
    address: '0xd0CdDBee19A25D65B0D905F7053Fdd19947ab370',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    logoURL:
      'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
  },
  {
    name: 'Dai Token',
    address: '0x659b25Cbf47128BF952EFB97f27b0821F169A1E5',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    logoURL: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
    coingeckoId: 'dai',
  },
  {
    name: 'WBTC',
    address: '0x879947a97a662E8294aFD601a901383D7731484e',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    logoURL:
      'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Rinkeby,
    enabled: false,
    decimals: 18,
    symbol: 'ETH',
    logoURL: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    coingeckoId: 'ethereum',
  },
  {
    name: 'USDC',
    address: '0xb18d016cDD2d9439A19f15633005A6b2cd6Aa774',
    chainId: 4,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    logoURL:
      'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
    coingeckoId: 'usd-coin',
  },
];
