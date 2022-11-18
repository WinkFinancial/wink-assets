import { ChainId } from '../chainIds'
import { ITokensByChainId } from '../types'
import * as ethereum from './ethereum'
import * as rinkeby from './rinkeby'
import * as goerli from './goerli'
import * as bsc from './bsc'
import * as bscTestnet from './bscTestnet'
import * as telos from './telos'
import * as telosTestnet from './telosTestnet'
import * as rsk from './rsk'
import * as rskTestnet from './rskTestnet'
import * as polygon from './polygon'
import * as mumbai from './mumbai'
import * as shasta from './shasta'
import * as tron from './tron'
import * as evmos from './evmos'
import * as evmosTestnet from './evmosTestnet'
import * as celo from './celo'
import * as celoAlfajoresTestnet from './celoAlfajoresTestnet'
import * as iotex from './iotex'
import * as iotexTestnet from './iotexTestnet'
import { IToken } from '../interfaces'

export const ethereumTokens = ethereum.tokens
export const rinkebyTokens = rinkeby.tokens
export const goerliTokens = goerli.tokens
export const bscTokens = bsc.tokens
export const bscTestnetTokens = bscTestnet.tokens
export const telosTokens = telos.tokens
export const telosTestnetTokens = telosTestnet.tokens
export const rskTokens = rsk.tokens
export const rskTestnetTokens = rskTestnet.tokens
export const polygonTokens = polygon.tokens
export const mumbaiTokens = mumbai.tokens
export const shastaTokens = shasta.tokens
export const tronTokens = tron.tokens
export const evmosTokens = evmos.tokens
export const evmosTestnetTokens = evmosTestnet.tokens
export const celoTokens = celo.tokens
export const celoAlfajoresTestnetTokens = celoAlfajoresTestnet.tokens
export const iotexTokens = iotex.tokens
export const iotexTestnetTokens = iotexTestnet.tokens

export const tokensByChainId: ITokensByChainId = {
  [ChainId.Ethereum]: ethereumTokens,
  [ChainId.Rinkeby]: rinkebyTokens,
  [ChainId.Goerli]: goerliTokens,
  [ChainId.BSC]: bscTokens,
  [ChainId.BSCTestnet]: bscTestnetTokens,
  [ChainId.Telos]: telosTokens,
  [ChainId.TelosTestnet]: telosTestnetTokens,
  [ChainId.RSK]: rskTokens,
  [ChainId.RSKTestnet]: rskTestnetTokens,
  [ChainId.Polygon]: polygonTokens,
  [ChainId.Mumbai]: mumbaiTokens,
  [ChainId.Shasta]: shastaTokens,
  [ChainId.Tron]: tronTokens,
  [ChainId.Evmos]: evmosTokens,
  [ChainId.EvmosTestnet]: evmosTestnetTokens,
  [ChainId.Celo]: celoTokens,
  [ChainId.CeloAlfajoresTestnet]: celoAlfajoresTestnetTokens,
  [ChainId.IoTeX]: iotexTokens,
  [ChainId.IoTeXTestnet]: iotexTestnetTokens,
}

export const allTokens: IToken[] = [
  ...ethereumTokens,
  ...rinkebyTokens,
  ...goerliTokens,
  ...bscTokens,
  ...bscTestnetTokens,
  ...telosTokens,
  ...telosTestnetTokens,
  ...rskTokens,
  ...rskTestnetTokens,
  ...polygonTokens,
  ...mumbaiTokens,
  ...shastaTokens,
  ...tronTokens,
  ...evmosTokens,
  ...evmosTestnetTokens,
  ...celoTokens,
  ...celoAlfajoresTestnetTokens,
  ...iotexTokens,
  ...iotexTestnetTokens,
]
