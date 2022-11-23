import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Telos',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Telos,
    enabled: true,
    decimals: 18,
    symbol: 'TLOS',
    isNativeToken: true,
    coingeckoId: 'telos',
  },
  {
    name: 'Tether',
    address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
    chainId: ChainId.Telos,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'tether',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.Telos,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'Tether',
    chainId: ChainId.Telos,
    enabled: true,
    symbol: 'USDT',
    isFiat: false,
  },
]
