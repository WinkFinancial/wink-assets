import { ChainId } from '../chainIds'
import type { INetworkAttributes } from '../interfaces'

export const NetworksAttributes: { [chainId: number]: INetworkAttributes } = {
  [ChainId.Ethereum]: {
    chainId: ChainId.Ethereum,
    logoURL: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    mainColor: '#454a75',
  },
  [ChainId.Rinkeby]: {
    chainId: ChainId.Rinkeby,
    logoURL: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    mainColor: '#2a3f54',
  },
  [ChainId.Goerli]: {
    chainId: ChainId.Goerli,
    logoURL: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    mainColor: '#2a3f54',
  },
  [ChainId.BSC]: {
    chainId: ChainId.BSC,
    logoURL: 'https://assets.coingecko.com/markets/images/469/small/Binance.png',
    mainColor: '#f1bd12',
  },
  [ChainId.BSCTestnet]: {
    chainId: ChainId.BSCTestnet,
    logoURL: 'https://assets.coingecko.com/markets/images/469/small/Binance.png',
    mainColor: '#f1bd12',
  },
  [ChainId.Telos]: {
    chainId: ChainId.Telos,
    logoURL: 'https://www.teloscan.io/img/evm_logo.b258c0a0.png',
    mainColor: '#7c4fb8',
  },
  [ChainId.TelosTestnet]: {
    chainId: ChainId.TelosTestnet,
    logoURL: 'https://www.teloscan.io/img/evm_logo.b258c0a0.png',
    mainColor: '#7c4fb8',
  },
  [ChainId.RSK]: {
    chainId: ChainId.RSK,
    logoURL: 'https://assets.coingecko.com/coins/images/5070/small/rsk-logo.jpg',
    mainColor: '#00b520',
  },
  [ChainId.RSKTestnet]: {
    chainId: ChainId.RSKTestnet,
    logoURL: 'https://assets.coingecko.com/coins/images/5070/small/rsk-logo.jpg',
    mainColor: '#00b520',
  },
  [ChainId.Polygon]: {
    chainId: ChainId.Polygon,
    logoURL: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    mainColor: '#7b3fe4',
  },
  [ChainId.Mumbai]: {
    chainId: ChainId.Mumbai,
    logoURL: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    mainColor: '#8247e5',
  },
  [ChainId.Shasta]: {
    chainId: ChainId.Shasta,
    logoURL: 'https://cryptologos.cc/logos/tron-trx-logo.png',
    mainColor: '#3136a7',
  },
  [ChainId.Tron]: {
    chainId: ChainId.Tron,
    logoURL: 'https://cryptologos.cc/logos/tron-trx-logo.png',
    mainColor: '#eb0128',
  },
  [ChainId.Evmos]: {
    chainId: ChainId.Evmos,
    logoURL: 'https://assets.coingecko.com/coins/images/24023/small/evmos.png',
    mainColor: '#1d0f32',
  },
  [ChainId.EvmosTestnet]: {
    chainId: ChainId.EvmosTestnet,
    logoURL: 'https://assets.coingecko.com/coins/images/24023/small/evmos.png',
    mainColor: '#1d0f32',
  },
  [ChainId.Celo]: {
    chainId: ChainId.Celo,
    logoURL: 'https://cryptologos.cc/logos/celo-celo-logo.png',
    mainColor: '#35D07E',
  },
  [ChainId.CeloAlfajoresTestnet]: {
    chainId: ChainId.CeloAlfajoresTestnet,
    logoURL: 'https://cryptologos.cc/logos/celo-celo-logo.png',
    mainColor: '#35D07E',
  },
  [ChainId.IoTeX]: {
    chainId: ChainId.IoTeX,
    logoURL: 'https://assets.coingecko.com/coins/images/3334/small/iotex-logo.png',
    mainColor: '#171E27',
  },
  [ChainId.IoTeXTestnet]: {
    chainId: ChainId.IoTeXTestnet,
    logoURL: 'https://assets.coingecko.com/coins/images/3334/small/iotex-logo.png',
    mainColor: '#171E27',
  },
}
