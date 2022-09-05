export interface INetwork {
  name: string
  rpcUrl?: string
  chainId: number
  payrollAddress: string
  routerAddress: string
  wrappedTokenAddress: string
  isSwapV2: boolean
  addressExplorerUrl: string
  txExplorerUrl: string
  isMainnet: boolean
  enabled: boolean
  multicallAddress?: string
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

export interface ICurrency {
  name: string
  code: string
  symbol: string
}

export interface IAssetAttributes {
  logoURL: string
  mainColor: string
}

export interface INetworkAttributes extends IAssetAttributes {
  chainId: number
}

export interface ITokenAttributes extends IAssetAttributes {
  symbol: string
}
