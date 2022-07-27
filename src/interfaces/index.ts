export interface INetwork {
  name: string
  rpcUrl?: string
  chainId: number
  payrollAddress: string
  routerAddress: string
  wCurrencyAddress: string
  isSwapV2: boolean
  addressExplorerUrl: string
  txExplorerUrl: string
  isMainnet: boolean
  enabled: boolean
  multicallAddress?: string
}

export interface INetworkAttributes {
  chainId: number
  logoURL: string
  mainColor: string
}

export interface IToken {
  name: string
  address: string
  chainId: number
  enabled: boolean
  decimals: number
  symbol: string
  coingeckoId?: string
}

export interface ITokenAttributes {
  symbol: string
  logoURL: string
  mainColor: string
}
