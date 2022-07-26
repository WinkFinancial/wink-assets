import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TLOS',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Telos,
    enabled: true,
    decimals: 18,
    symbol: 'TLOS',
    logoURL: 'https://assets.coingecko.com/coins/images/7588/small/TLOS_200.png',
    coingeckoId: 'telos',
    mainColor: '#a06cec',
  },
  {
    name: 'USDT',
    address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
    chainId: ChainId.Telos,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
    logoURL: 'https://assets.coingecko.com/coins/images/325/small/Tether-logo.png',
    coingeckoId: 'tether',
    mainColor: '#03ac84',
  },
]
