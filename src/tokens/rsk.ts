import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'rBTC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    symbol: 'RBTC',
    isNativeToken: true,
    coingeckoId: 'rootstock',
  },
  {
    name: 'RIF Dollar On Chain',
    address: '0x2d919F19D4892381D58edeBeca66D5642Cef1a1f',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    isNativeToken: false,
    symbol: 'RDOC',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.RSK,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
]
