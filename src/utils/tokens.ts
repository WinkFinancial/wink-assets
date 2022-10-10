import type { IToken } from '../interfaces'
import { tokensByChainId, allTokens } from '../tokens'

/*
 * @deprecated isNativeToken() should not be used, use token.isNativeToken property instead
 */
function isNativeToken(token: IToken): boolean {
  return token.isNativeToken
}

function getNativeTokenByChainId(chainId: number): IToken | undefined {
  return tokensByChainId[chainId].find((token) => token.isNativeToken)
}

export const allNativeTokens: IToken[] = allTokens.filter((token) => token.isNativeToken)

export { isNativeToken, getNativeTokenByChainId }
