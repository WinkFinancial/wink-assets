import { ChainId } from '../chainIds'
import { IPaymentToken, IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Celo',
    address: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'CELO',
    isNativeToken: true,
    coingeckoId: 'celo',
  },
  {
    name: 'Celo Dollar',
    address: '0x765de816845861e75a25fca122bb6898b8b1282a',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'cUSD',
    isNativeToken: false,
    coingeckoId: 'celo-dollar',
  },
  {
    name: 'Celo Euro',
    address: '0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'cEUR',
    isNativeToken: false,
    coingeckoId: 'celo-euro',
  },
  {
    name: 'Celo Brazilian Real',
    address: '0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787',
    chainId: ChainId.Celo,
    enabled: false,
    decimals: 18,
    symbol: 'cREAL',
    isNativeToken: false,
    coingeckoId: 'celo-real-creal',
  },
  {
    name: 'Optics WETH v2',
    address: '0x122013fd7dF1C6F636a5bb8f03108E876548b455',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'WETH',
    isNativeToken: false,
    coingeckoId: 'weth',
  },
  {
    name: 'USDC',
    address: '0xef4229c8c3250C675F21BCefa42f58EfbfF6002a',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    isNativeToken: false,
    coingeckoId: 'usd-coin',
  },
  {
    name: 'DAI Stablecoin',
    address: '0x90Ca507a5D4458a4C6C6249d186b6dCb02a5BCCd',
    chainId: ChainId.Celo,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    isNativeToken: false,
    coingeckoId: 'dai',
  },
]

export const paymentTokens: IPaymentToken[] = [
  {
    name: 'United States Dollar',
    chainId: ChainId.Celo,
    enabled: true,
    symbol: 'USD',
    isFiat: true,
  },
  {
    name: 'USD Coin',
    chainId: ChainId.Celo,
    enabled: true,
    symbol: 'USDC',
    isFiat: false,
  },
  {
    name: 'Dai',
    chainId: ChainId.Celo,
    enabled: true,
    symbol: 'DAI',
    isFiat: false,
  },
]
