import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'TRX',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.Tron,
    enabled: true,
    decimals: 6,
    symbol: 'TRX',
  },
];
