import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'EVMOS',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Evmos,
    enabled: false,
    decimals: 18,
    symbol: 'EVMOS',
    coingeckoId: 'evmos',
  },
]
