import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Celo',
    address: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'CELO',
    coingeckoId: 'celo',
  },
  {
    name: 'Celo Dollar',
    address: '0x765de816845861e75a25fca122bb6898b8b1282a',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'cUSD',
    coingeckoId: 'celo-dollar',
  },
  {
    name: 'Celo Euro',
    address: '0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'cEUR',
    coingeckoId: 'celo-euro',
  },
  {
    name: 'Wrapped Ethereum',
    address: '0x122013fd7dF1C6F636a5bb8f03108E876548b455',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'WETH',
    coingeckoId: 'weth',
  },
  {
    name: 'USDC',
    address: '0xef4229c8c3250C675F21BCefa42f58EfbfF6002a',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
  },
  {
    name: 'DAI Stablecoin',
    address: '0x90Ca507a5D4458a4C6C6249d186b6dCb02a5BCCd',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
]
