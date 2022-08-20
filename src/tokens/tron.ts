import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TRON',
    address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
    coingeckoId: 'tron',
  },
  {
    name: 'Tether',
    address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
]
