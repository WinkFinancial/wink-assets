import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'IoTeX',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'IOTX',
    isNativeToken: true,
    coingeckoId: 'iotex',
  },
  {
    name: 'Crosschain IOTX',
    address: '0x99B2B0eFb56E62E36960c20cD5ca8eC6ABD5557A',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'CIOTX',
    isNativeToken: false,
    coingeckoId: 'crosschain-iotx',
  },
  {
    name: 'Tether',
    address: '0x7aEc56b782c593b312a8c33eeFd8e50eEf975980',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'iousdt',
  },
  {
    name: 'Dai',
    address: '0x8c1901c031Cdf42a846c0C422A3B5A2c943F4944',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    isNativeToken: false,
    coingeckoId: 'dai',
  },
  {
    name: 'Wrapped BTC',
    address: '0xAC42761C37d4467ff69082249B9E67D6b35d50cb',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    isNativeToken: false,
    coingeckoId: 'iowbtc',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'Tether',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    symbol: 'USDT',
    isFiat: false,
  },
  {
    name: 'Dai',
    chainId: ChainId.IoTeXTestnet,
    enabled: true,
    symbol: 'DAI',
    isFiat: false,
  },
]
