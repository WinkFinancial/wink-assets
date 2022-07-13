import { ChainId } from '../chainIds';
import { INetworkByChainId } from '../types';

export const networksByChainId: INetworkByChainId = {
  [ChainId.Ethereum]: {
    name: 'Ethereum',
    chainId: ChainId.Ethereum,
    payrollAddress: '0x5bCe0AbAbA89e1d0e063978d87CfF2f8f5145942',
    routerAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564', // uniswap v3
    wCurrencyAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    isSwapV2: false,
    addressExplorerUrl: 'https://etherscan.io/address/',
    txExplorerUrl: 'https://etherscan.io/tx/',
    isMainnet: true,
  },
  [ChainId.Rinkeby]: {
    name: 'Rinkeby',
    chainId: ChainId.Rinkeby,
    payrollAddress: '0x977AfF4027BeFCcB5D5a476c69447382232Ef339',
    routerAddress: '0xE592427A0AEce92De3Edee1F18E0157C05861564', // uniswap v3
    wCurrencyAddress: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
    isSwapV2: false,
    addressExplorerUrl: 'https://rinkeby.etherscan.io/address/',
    txExplorerUrl: 'https://rinkeby.etherscan.io/tx/',
    isMainnet: false,
  },
  [ChainId.BSC]: {
    name: 'Binance Smart Chain',
    chainId: ChainId.BSC,
    payrollAddress: '0xe2EBFC705d473C3dDd52CB49AF0bdE3132E8831e',
    routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E', // pancakeswap v2
    wCurrencyAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    isSwapV2: true,
    addressExplorerUrl: 'https://bscscan.com/address/',
    txExplorerUrl: 'https://bscscan.com/tx/',
    isMainnet: true,
  },
  [ChainId.BSCTestnet]: {
    name: 'BSC Testnet',
    chainId: ChainId.BSCTestnet,
    payrollAddress: '0x4d995D5B936889B9A26A12B7b48a22A80F226fde',
    routerAddress: '0x3380aE82e39E42Ca34EbEd69aF67fAa0683Bb5c1', // apeswap v2 or 0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3 pancake.kiemtienonline360
    wCurrencyAddress: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    isSwapV2: true,
    addressExplorerUrl: 'https://testnet.bscscan.com/address/',
    txExplorerUrl: 'https://testnet.bscscan.com/tx/',
    isMainnet: false,
  },
  [ChainId.Telos]: {
    name: 'Telos EVM Mainnet',
    chainId: ChainId.Telos,
    payrollAddress: '0x0000000000000000000000000000000000000000',
    routerAddress: '0xB9239AF0697C8efb42cBA3568424b06753c6da71', // zappy.finance v2
    wCurrencyAddress: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
    isSwapV2: true,
    addressExplorerUrl: 'https://www.teloscan.io/address/',
    txExplorerUrl: 'https://www.teloscan.io/tx/',
    isMainnet: true,
  },
  [ChainId.TelosTestnet]: {
    name: 'Telos EVM Testnet',
    chainId: ChainId.TelosTestnet,
    payrollAddress: '0xdcF72c0De33a53BACfa7562ab86375e4Fe90bC65',
    routerAddress: '0xd03d102C9dfCE013eA4671B5c282D65Cf1eB1DC5', // demo.telos.finance v2
    wCurrencyAddress: '0xaE85Bf723A9e74d6c663dd226996AC1b8d075AA9',
    isSwapV2: true,
    addressExplorerUrl: 'https://testnet.teloscan.io/address/',
    txExplorerUrl: 'https://testnet.teloscan.io/tx/',
    isMainnet: false,
  },
  [ChainId.RSK]: {
    name: 'RSK Mainnet',
    chainId: ChainId.RSK,
    payrollAddress: '0x0000000000000000000000000000000000000000',
    routerAddress: '0xf55c496bb1058690DB1401c4b9C19F3f44374961', // rskswap v2
    wCurrencyAddress: '0x967F8799aF07dF1534d48A95a5C9FEBE92c53AE0',
    isSwapV2: true,
    addressExplorerUrl: 'https://explorer.rsk.co/address/',
    txExplorerUrl: 'https://explorer.rsk.co/tx/',
    isMainnet: true,
  },
  [ChainId.RSKTestnet]: {
    name: 'RSK Testnet',
    chainId: ChainId.RSKTestnet,
    payrollAddress: '0x18c42168D834c99E2e7a368a5Fbf39F5BB32e09D',
    routerAddress: '0xf55c496bb1058690DB1401c4b9C19F3f44374961', // rskswap v2
    wCurrencyAddress: '0x09B6Ca5E4496238a1F176aEA6bB607db96C2286E',
    isSwapV2: true,
    addressExplorerUrl: 'https://explorer.testnet.rsk.co/address/',
    txExplorerUrl: 'https://explorer.testnet.rsk.co/tx/',
    isMainnet: false,
  },
  [ChainId.Polygon]: {
    name: 'Polygon',
    chainId: ChainId.Polygon,
    payrollAddress: '0x0000000000000000000000000000000000000000',
    routerAddress: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', // quickswap.exchange v2
    wCurrencyAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    isSwapV2: true,
    addressExplorerUrl: 'https://polygonscan.com/address/',
    txExplorerUrl: 'https://polygonscan.com/tx/',
    isMainnet: true,
  },
  [ChainId.Mumbai]: {
    name: 'Mumbai',
    chainId: ChainId.Mumbai,
    payrollAddress: '0x46c60C1b5f756c8B6AA10A7d838380AD1B5F28BE',
    routerAddress: '0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff', // quickswap.exchange v2
    wCurrencyAddress: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    isSwapV2: true,
    addressExplorerUrl: 'https://mumbai.polygonscan.com/address/',
    txExplorerUrl: 'https://mumbai.polygonscan.com/tx/',
    isMainnet: false,
  },
};
