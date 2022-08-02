import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'MATIC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Mumbai,
    enabled: false,
    decimals: 18,
    symbol: 'MATIC',
    coingeckoId: 'matic-network',
  },
  {
    name: 'USDT',
    address: '0x90596469bB8f8434FBb98c02B6E856e83a30AE78',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'DAI',
    address: '0x88F6B2bC66f4c31a3669b9b1359524aBf79CfC4A',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'WBTC',
    address: '0x988777898643893f44E4F086D8f747eEF21429E1',
    chainId: ChainId.Mumbai,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
]
