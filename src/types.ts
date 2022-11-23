import { INetwork, IPaymentToken, IToken } from './interfaces'

export type INetworkByChainId = { [chainId: number]: INetwork }
export type ITokensByChainId = { [chainId: number]: IToken[] }
export type IPaymentTokensByChainId = { [chainId: number]: IPaymentToken[] }
