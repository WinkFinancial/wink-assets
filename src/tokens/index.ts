import { ChainId } from '../chainIds'
import { ITokensByChainId } from '../types'
import * as ethereum from './ethereum'
import * as rinkeby from './rinkeby'
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
import { IToken } from '../interfaces'

export const tokensByChainId: ITokensByChainId = {
  [ChainId.Ethereum]: ethereum.tokens,
  [ChainId.Rinkeby]: rinkeby.tokens,
  [ChainId.BSC]: bsc.tokens,
  [ChainId.BSCTestnet]: bscTestnet.tokens,
  [ChainId.Telos]: telos.tokens,
  [ChainId.TelosTestnet]: telosTestnet.tokens,
  [ChainId.RSK]: rsk.tokens,
  [ChainId.RSKTestnet]: rskTestnet.tokens,
  [ChainId.Polygon]: polygon.tokens,
  [ChainId.Mumbai]: mumbai.tokens,
  [ChainId.Shasta]: shasta.tokens,
  [ChainId.Tron]: tron.tokens,
}

export const allTokens: IToken[] = [
  ...ethereum.tokens,
  ...rinkeby.tokens,
  ...bsc.tokens,
  ...bscTestnet.tokens,
  ...telos.tokens,
  ...telosTestnet.tokens,
  ...rsk.tokens,
  ...rskTestnet.tokens,
  ...polygon.tokens,
  ...mumbai.tokens,
  ...shasta.tokens,
  ...tron.tokens,
]

export const ethereumTokens = ethereum.tokens
export const rinkebyTokens = rinkeby.tokens
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
