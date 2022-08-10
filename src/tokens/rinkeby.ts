import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'USDT',
    address: '0xd0CdDBee19A25D65B0D905F7053Fdd19947ab370',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'DAI',
    address: '0x659b25Cbf47128BF952EFB97f27b0821F169A1E5',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'WBTC',
    address: '0x879947a97a662E8294aFD601a901383D7731484e',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'ETH',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Rinkeby,
    enabled: false,
    decimals: 18,
    symbol: 'ETH',
    coingeckoId: 'ethereum',
  },
  {
    name: 'USDC',
    address: '0xD7147aa27eA246B2145B19B956f2342Fb6a0E667',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
  },
  {
    name: 'DOGE',
    address: '0xB860F43eE3325f4B7f5aE80113C0Ff7bc1cFbcE2',
    chainId: ChainId.Rinkeby,
    enabled: true,
    decimals: 8,
    symbol: 'DOGE',
    coingeckoId: 'dogecoin',
  },
]
