import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'RIF Dollar On Chain',
    address: '0x2d919F19D4892381D58edeBeca66D5642Cef1a1f',
    chainId: ChainId.RSK,
    enabled: true,
    decimals: 18,
    logoURL: 'https://www.rsk.co/stablecoins/img/stablecoins/rdoc.png',
    symbol: 'RDOC',
  },
];
