import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'TRX',
    address: 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
  },
  {
    name: 'USDT',
    address: 'TSsjPxRVQxN5CKk59Gfxyme5vhgp3ymSKq',
    chainId: ChainId.Shasta,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
  },
];
