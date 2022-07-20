import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'MATIC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'MATIC',
    logoURL: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png',
    coingeckoId: 'matic-network',
  },
  {
    name: 'USDT',
    address: '0x90596469bB8f8434FBb98c02B6E856e83a30AE78',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    logoURL: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
  },
  {
    name: 'Dai Token',
    address: '0x88F6B2bC66f4c31a3669b9b1359524aBf79CfC4A',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    logoURL: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
    coingeckoId: 'dai',
  },
  {
    name: 'WBTC',
    address: '0x988777898643893f44E4F086D8f747eEF21429E1',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    logoURL: 'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png',
    coingeckoId: 'wrapped-bitcoin',
  },
]
