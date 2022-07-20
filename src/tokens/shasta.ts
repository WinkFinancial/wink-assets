import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TRX',
    address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
    coingeckoId: 'tron',
  },
  {
    name: 'USDT',
    address: 'TSsjPxRVQxN5CKk59Gfxyme5vhgp3ymSKq',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'ADA',
    address: 'TTMuLqv8eLSVUbdR8U6rPH99HZKGAfX7J2',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'ADA',
    coingeckoId: 'cardano',
  },
  {
    name: 'XRP',
    address: 'TFZRqUYzHxRwptTac3jxgHqRZQotjY46gB',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'XRP',
    coingeckoId: 'ripple',
  },
]