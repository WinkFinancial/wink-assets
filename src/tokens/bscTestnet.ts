import { ChainId } from '../chainIds';
import { IToken } from '../interfaces';

export const tokens: IToken[] = [
  {
    name: 'USDT',
    address: '0x863C2c19208aC736324e438DF9a49F39c3dbA843',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT',
    coingeckoId: 'tether',
  },
  {
    name: 'WBTC',
    address: '0xCbBbdc113F480a83050C7Cd2420E100Cf6305858',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
  },
  {
    name: 'Dai Token',
    address: '0xD2E96745ddd7c6641866C9335909AeC605eF07A4',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI',
    coingeckoId: 'dai',
  },
  {
    name: 'BNB',
    address: '0x0000000000000000000000000000000000000000',
    chainId: ChainId.BSCTestnet,
    enabled: false,
    decimals: 18,
    symbol: 'BNB',
    coingeckoId: 'binancecoin',
  },
  {
    name: 'DAI2',
    address: '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'DAI2',
    coingeckoId: 'dai',
  },
  {
    name: 'USDC',
    address: '0x64544969ed7EBf5f083679233325356EbE738930',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
  },
  {
    name: 'USDT2',
    address: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'USDT2',
    coingeckoId: 'tether',
  },
  {
    name: 'BUSD',
    address: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'BUSD',
    coingeckoId: 'binance-usd',
  },
  {
    name: 'BTCB',
    address: '0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'BTCB',
    coingeckoId: 'binance-bitcoin',
  },
  {
    name: 'ETH',
    address: '0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'ETH',
    coingeckoId: 'ethereum',
  },
  {
    name: 'XRP',
    address: '0xa83575490D7df4E2F47b7D38ef351a2722cA45b9',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'XRP',
    coingeckoId: 'ripple',
  },
  {
    name: 'Wrapped BNB',
    address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    chainId: ChainId.BSCTestnet,
    enabled: true,
    decimals: 18,
    symbol: 'WBNB',
    coingeckoId: 'wbnb',
  },
];
