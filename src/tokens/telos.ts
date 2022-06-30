import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'TLOS',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Telos,
    enabled: true,
    decimals: 18,
    symbol: 'TLOS',
  },
  {
    name: 'USDT',
    address: '0xeFAeeE334F0Fd1712f9a8cc375f427D9Cdd40d73',
    chainId: ChainId.Telos,
    enabled: true,
    decimals: 6,
    symbol: 'USDT',
  },
];
