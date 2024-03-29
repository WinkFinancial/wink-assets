import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Polygon',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'MATIC',
    isNativeToken: true,
    coingeckoId: 'matic-network',
  },
  {
    name: 'Tether',
    address: '0x90596469bB8f8434FBb98c02B6E856e83a30AE78',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'tether',
  },
  {
    name: 'Dai',
    address: '0x88F6B2bC66f4c31a3669b9b1359524aBf79CfC4A',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    isNativeToken: false,
    coingeckoId: 'dai',
  },
  {
    name: 'Wrapped Bitcoin',
    address: '0x988777898643893f44E4F086D8f747eEF21429E1',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    isNativeToken: false,
    coingeckoId: 'wrapped-bitcoin',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.Mumbai,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'Tether',
    chainId: ChainId.Mumbai,
    enabled: true,
    symbol: 'USDT',
    isFiat: false,
  },
  {
    name: 'Dai',
    chainId: ChainId.Mumbai,
    enabled: true,
    symbol: 'DAI',
    isFiat: false,
  },
]
