import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TRX',
    address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
    logoURL: 'https://assets.coingecko.com/coins/images/1094/small/tron-logo.png',
    coingeckoId: 'tron',
  },
  {
    name: 'USDT',
    address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    logoURL: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
  },
]
