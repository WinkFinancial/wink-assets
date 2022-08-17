import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Ethereum',
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
    coingeckoId: 'ethereum',
  },
  {
    name: 'USD Coin',
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
  },
  {
    name: 'Tether',
    address: '0x55d398326f99059fF775485246999027B3197955',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'XRP',
    address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'XRP',
    coingeckoId: 'ripple',
  },
  {
    name: 'Binance USD',
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'BUSD',
    coingeckoId: 'binance-usd',
  },
  {
    name: 'Cardano',
    address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'ADA',
    coingeckoId: 'cardano',
  },
  {
    name: 'Dogecoin',
    address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    chainId: ChainId.BSC,
    enabled: false,
    decimals: 8,
    symbol: 'DOGE',
    coingeckoId: 'dogecoin',
  },
  {
    name: 'Bitcoin',
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'BTC',
    coingeckoId: 'binance-bitcoin',
  },
  {
    name: 'Wrapped BNB',
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'WBNB',
    coingeckoId: 'wbnb',
  },
  {
    name: 'Dai',
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.BSC,
    enabled: false,
    decimals: 18,
    symbol: 'BNB',
    coingeckoId: 'binancecoin',
  },
  {
    name: 'Binance Beacon ETH',
    address: '0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B',
    chainId: ChainId.BSC,
    enabled: false,
    decimals: 18,
    symbol: 'BETH',
    coingeckoId: 'binance-eth',
  },
]
