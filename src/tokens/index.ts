import { ChainId } from '../chainIds';
import { ITokensByChainId } from '../types';
import { ethereumTokens } from './ethereum';
import { rinkebyTokens } from './rinkeby';
import { bscTokens } from './bsc';
import { bscTestnetTokens } from './bscTestnet';
import { telosTokens } from './telos';
import { telosTestnetTokens } from './telosTestnet';
import { polygonTokens } from './polygon';
import { mumbaiTokens } from './mumbai';

export const tokensByChainId: ITokensByChainId = {
  [ChainId.Ethereum]: ethereumTokens,
  [ChainId.Rinkeby]: rinkebyTokens,
  [ChainId.BSC]: bscTokens,
  [ChainId.BSCTestnet]: bscTestnetTokens,
  [ChainId.Telos]: telosTokens,
  [ChainId.TelosTestnet]: telosTestnetTokens,
  [ChainId.Polygon]: polygonTokens,
  [ChainId.Mumbai]: mumbaiTokens,
};
