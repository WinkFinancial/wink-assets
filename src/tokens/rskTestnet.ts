import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'RBTC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'RBTC',
    logoURL: 'https://assets.coingecko.com/coins/images/5070/small/rsk-logo.jpg',
    coingeckoId: 'rootstock',
    mainColor: '#119755',
  },
  {
    name: 'USDT',
    address: '0x8672aDF72de0a0650c4001aaD8083042A4D18E88',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    logoURL: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
    mainColor: '#03ac84',
  },
  {
    name: 'Dai Token',
    address: '0x4ec48Cb892Fa8D66bF87A43A5583c748fe8c1613',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    logoURL: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
    coingeckoId: 'dai',
    mainColor: '#fab21f',
  },
  {
    name: 'RDOC',
    address: '0xC3De9F38581f83e281f260d0DdbaAc0e102ff9F8',
    chainId: ChainId.RSKTestnet,
    enabled: true,
    decimals: 18,
    logoURL: 'https://www.rsk.co/stablecoins/img/stablecoins/rdoc.png',
    symbol: 'RDOC',
    mainColor: '#0083ff',
  },
]
