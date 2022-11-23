import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

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

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.Evmos,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
]
