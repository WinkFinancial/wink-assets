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
    logoURL: 'https://assets.coingecko.com/coins/images/1094/small/tron-logo.png',
    coingeckoId: 'tron',
  },
  {
    name: 'USDT',
    address: 'TSsjPxRVQxN5CKk59Gfxyme5vhgp3ymSKq',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    logoURL: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
  },
  {
    name: 'ADA',
    address: 'TTMuLqv8eLSVUbdR8U6rPH99HZKGAfX7J2',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'ADA',
    logoURL: 'https://assets.coingecko.com/coins/images/975/small/cardano.png',
    coingeckoId: 'cardano',
  },
  {
    name: 'XRP',
    address: 'TFZRqUYzHxRwptTac3jxgHqRZQotjY46gB',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'XRP',
    logoURL: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
    coingeckoId: 'ripple',
  },
]
