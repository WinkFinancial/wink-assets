import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'USDC Coin',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
  },
  {
    name: 'Tether',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'Dai',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'Ethereum',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
    coingeckoId: 'ethereum',
  },
  {
    name: 'Polygon',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Polygon,
    enabled: false,
    decimals: 18,
    symbol: 'MATIC',
    coingeckoId: 'matic-network',
  },
  {
    name: 'Binance USD',
    address: '0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7',
    chainId: ChainId.Polygon,
    enabled: false,
    decimals: 18,
    symbol: 'BUSD',
    coingeckoId: 'binance-usd',
  },
]
