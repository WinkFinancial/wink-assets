import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'rBTC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'RBTC',
    isNativeToken: true,
    coingeckoId: 'rootstock',
  },
  {
    name: 'Tether',
    address: '0x8672aDF72de0a0650c4001aaD8083042A4D18E88',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'tether',
  },
  {
    name: 'Dai',
    address: '0x4ec48Cb892Fa8D66bF87A43A5583c748fe8c1613',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    isNativeToken: false,
    coingeckoId: 'dai',
  },
  {
    name: 'RIF Dollar On Chain',
    address: '0xC3De9F38581f83e281f260d0DdbaAc0e102ff9F8',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    isNativeToken: false,
    symbol: 'RDOC',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'Tether',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    symbol: 'USDT',
    isFiat: false,
  },
  {
    name: 'Dai',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    symbol: 'DAI',
    isFiat: false,
  },
]
