import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'EVMOS',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Evmos,
    enabled: true,
    decimals: 18,
    symbol: 'EVMOS',
    isNativeToken: true,
    coingeckoId: 'evmos',
  },
]
