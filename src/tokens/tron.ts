import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TRX',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
    coingeckoId: 'tron',
  },
  {
    name: 'USDT',
    address: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
]
