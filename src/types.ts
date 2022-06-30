import { INetwork, IToken } from './interfaces';

export type INetworkByChainId = { [chainId: number]: INetwork };
export type ITokensByChainId = { [chainId: number]: IToken[] };
