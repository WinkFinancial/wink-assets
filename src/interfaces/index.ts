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
  minNativeToken: string // minNativeToken is subtracted from native token balance to be used in transactions
  index: number
}

export interface IToken {
  name: string
  address: string
  chainId: number
  enabled: boolean
  decimals: number
  symbol: string
  isNativeToken: boolean
  coingeckoId?: string
}

export interface IPaymentToken {
  name: string
  chainId: number
  enabled: boolean
  symbol: string
  isFiat: boolean
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

export interface ICurrency {
  name: string
  code: string
  symbol: string
}

export interface IUserType {
  name: string
  code: string
}

export interface IFrecuency {
  name: string
  code: string
}
