import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'IoTeX',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.IoTeX,
    enabled: true,
    decimals: 18,
    symbol: 'IOTX',
    isNativeToken: true,
    coingeckoId: 'iotex',
  },
  {
    name: 'Crosschain IOTX',
    address: '0x99B2B0eFb56E62E36960c20cD5ca8eC6ABD5557A',
    chainId: ChainId.IoTeX,
    enabled: true,
    decimals: 18,
    symbol: 'CIOTX',
    isNativeToken: false,
    coingeckoId: 'crosschain-iotx',
  },
  {
    name: 'Tether',
    address: '0x6fbCdc1169B5130C59E72E51Ed68A84841C98cd1',
    chainId: ChainId.IoTeX,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'iousdt',
  },
  {
    name: 'USD Coin',
    address: '0x3B2bf2b523f54C4E454F08Aa286D03115aFF326c',
    chainId: ChainId.IoTeX,
    enabled: false,
    decimals: 6,
    symbol: 'USDC',
    isNativeToken: false,
    coingeckoId: 'iousdc',
  },
  {
    name: 'Binance USD',
    address: '0xacEE9B11CD4B3f57e58880277aC72c8c41ABe4e4',
    chainId: ChainId.IoTeX,
    enabled: false,
    decimals: 18,
    symbol: 'BUSD',
    isNativeToken: false,
    coingeckoId: 'iobusd',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.IoTeX,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'Tether',
    chainId: ChainId.IoTeX,
    enabled: true,
    symbol: 'USDT',
    isFiat: false,
  },
  {
    name: 'USD Coin',
    chainId: ChainId.IoTeX,
    enabled: true,
    symbol: 'USDC',
    isFiat: false,
  },
]
