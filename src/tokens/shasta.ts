import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TRON',
    address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
    isNativeToken: true,
    coingeckoId: 'tron',
  },
  {
    name: 'Tether',
    address: 'TSsjPxRVQxN5CKk59Gfxyme5vhgp3ymSKq',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'tether',
  },
  {
    name: 'Cardano',
    address: 'TTMuLqv8eLSVUbdR8U6rPH99HZKGAfX7J2',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'ADA',
    isNativeToken: false,
    coingeckoId: 'cardano',
  },
  {
    name: 'XRP',
    address: 'TFZRqUYzHxRwptTac3jxgHqRZQotjY46gB',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'XRP',
    isNativeToken: false,
    coingeckoId: 'ripple',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.Shasta,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'Tether',
    chainId: ChainId.Shasta,
    enabled: true,
    symbol: 'USDT',
    isFiat: false,
  },
]
