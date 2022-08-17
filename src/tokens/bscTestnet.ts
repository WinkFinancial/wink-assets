import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'Tether',
    address: '0x863C2c19208aC736324e438DF9a49F39c3dbA843',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'Wraped Bitcoin',
    address: '0xCbBbdc113F480a83050C7Cd2420E100Cf6305858',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'Dai',
    address: '0xD2E96745ddd7c6641866C9335909AeC605eF07A4',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.BSCTestnet,
    enabled: false,
    decimals: 18,
    symbol: 'BNB',
    coingeckoId: 'binancecoin',
  },
  {
    name: 'Dogecoin',
    address: '0x2D4934559Cea42C779E7d934fB4163E30f35109c',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 8,
    symbol: 'DOGE',
    coingeckoId: 'dogecoin',
  },
  {
    name: 'USD Coin',
    address: '0xEF37B5A896668BCF5dA88aec28F16E9167996D67',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 6,
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
  },
]
