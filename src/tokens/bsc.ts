import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const bscTokens: IToken[] = [
  {
    name: 'ETH',
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
  },
  {
    name: 'USDC',
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'USDC',
  },
  {
    name: 'USDT',
    address: '0x55d398326f99059fF775485246999027B3197955',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
  },
  {
    name: 'XRP',
    address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'XRP',
  },
  {
    name: 'BUSD',
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'BUSD',
  },
  {
    name: 'Cardano',
    address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'ADA',
  },
  {
    name: 'Dogecoin',
    address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 8,
    symbol: 'DOGE',
  },
  {
    name: 'BTCB',
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'BTCB',
  },
  {
    name: 'WBNB',
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'WBNB',
  },
  {
    name: 'Dai Token',
    address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    chainId: ChainId.BSC,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
  },
  {
    name: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.BSC,
    enabled: false,
    decimals: 18,
    symbol: 'BNB',
  },
];
