import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'rBTC',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.RSK,
    enabled: false,
    decimals: 18,
    symbol: 'RBTC',
    coingeckoId: 'rootstock',
  },
  {
    name: 'RIF Dollar On Chain',
    address: '0x2d919F19D4892381D58edeBeca66D5642Cef1a1f',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    symbol: 'RDOC',
  },
]
