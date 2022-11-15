import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Tether',
    address: '0xD84B87568C215f7d03D9bc1B05D106028498Dc8e',
    chainId: ChainId.Goerli,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'tether',
  },
  {
    name: 'Dai',
    address: '0x13BFE45D0D0f605b020fb62Cc5dd154b62D22d67',
    chainId: ChainId.Goerli,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    isNativeToken: false,
    coingeckoId: 'dai',
  },
  {
    name: 'Wrapped Bitcoin',
    address: '0xd76715fc071e5020A71ec48C2E9260C492e95Dd7',
    chainId: ChainId.Goerli,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    isNativeToken: false,
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'Ethereum',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Goerli,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
    isNativeToken: true,
    coingeckoId: 'ethereum',
  },
]
