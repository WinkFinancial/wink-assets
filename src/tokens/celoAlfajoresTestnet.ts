import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Celo',
    address: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    chainId: ChainId.CeloAlfajoresTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'CELO',
    coingeckoId: 'celo',
  },
  {
    name: 'Celo Dollar',
    address: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
    chainId: ChainId.CeloAlfajoresTestnet,
    enabled: false,
    decimals: 18,
    symbol: 'cUSD',
    coingeckoId: 'celo-dollar',
  },
  {
    name: 'Celo Euro',
    address: '0x10c892A6EC43a53E45D0B916B4b7D383B1b78C0F',
    chainId: ChainId.CeloAlfajoresTestnet,
    enabled: false,
    decimals: 18,
    symbol: 'cEUR',
    coingeckoId: 'celo-euro',
  },
  {
    name: 'Wrapped Bitcoin',
    address: '0xC71b05ba6A163aC512A920e81ef795E5b105448d',
    chainId: ChainId.CeloAlfajoresTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'Tether',
    address: '0xe2EBFC705d473C3dDd52CB49AF0bdE3132E8831e',
    chainId: ChainId.CeloAlfajoresTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'DAI Stablecoin',
    address: '0xb3D06103af1A68026615E673d46047FAB77DB0Fa',
    chainId: ChainId.CeloAlfajoresTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
]
