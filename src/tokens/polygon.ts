import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'USDC',
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    logoURL: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
    coingeckoId: 'usd-coin',
    mainColor: '#2775ca',
  },
  {
    name: 'USDT',
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    logoURL: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
    mainColor: '#03ac84',
  },
  {
    name: 'Dai Token',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    logoURL: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
    coingeckoId: 'dai',
    mainColor: '#fab21f',
  },
  {
    name: 'ETH',
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
    logoURL: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    coingeckoId: 'ethereum',
    mainColor: '#62688f',
  },
  {
    name: 'MATIC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'MATIC',
    logoURL: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png',
    coingeckoId: 'matic-network',
    mainColor: '#8345e6',
  },
  {
    name: 'BUSD',
    address: '0xdAb529f40E671A1D4bF91361c21bf9f0C9712ab7',
    chainId: ChainId.Polygon,
    enabled: true,
    decimals: 18,
    symbol: 'BUSD',
    logoURL: 'https://assets.coingecko.com/coins/images/9576/small/BUSD.png',
    coingeckoId: 'binance-usd',
    mainColor: '#f0b90a',
  },
]
