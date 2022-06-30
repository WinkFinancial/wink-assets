export interface INetwork {
  name: string;
  rpcUrl?: string;
  chainId: number;
  payrollAddress: string;
  routerAddress: string;
  wCurrencyAddress: string;
  isSwapV2: boolean;
  addressExplorerUrl: string;
  txExplorerUrl: string;
}

export interface IToken {
  name: string;
  address: string;
  chainId: number;
  enabled: boolean;
  decimals: number;
  symbol: string;
}
