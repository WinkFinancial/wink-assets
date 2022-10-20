import { ChainId } from '../chainIds'
import { IToken } from '../interfaces'

export const tokens: IToken[] = [
  {
    name: 'TEVMOS',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.EvmosTestnet,
    enabled: false,
    decimals: 18,
    symbol: 'TEVMOS',
    isNativeToken: true,
    coingeckoId: 'evmos',
  },
  {
    name: 'Tether',
    address: '0x5D6A72B51D5702A339C85CA9eB88914CA8b555cc',
    chainId: ChainId.EvmosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    isNativeToken: false,
    coingeckoId: 'tether',
  },
  {
    name: 'Dai',
    address: '0x623F71f6d0339E4c639d7cA6303B54ACe40Be2aC',
    chainId: ChainId.EvmosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    isNativeToken: false,
    coingeckoId: 'dai',
  },
  {
    name: 'WBTC',
    address: '0xf508585DF344C140B7a7E9bae540E054Cae82De8',
    chainId: ChainId.EvmosTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    isNativeToken: false,
    coingeckoId: 'wrapped-bitcoin',
  },
]
