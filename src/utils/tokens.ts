import type { IToken } from '../interfaces'
import { AddressZero } from '@ethersproject/constants'
import { tokensByChainId } from '../tokens'

function isNativeToken(token: IToken): boolean {
  return token.address === AddressZero
}

function getNativeTokenByChainId(chainId: number): IToken | undefined {
  return tokensByChainId[chainId].find((token) => isNativeToken(token))
}

export { isNativeToken, getNativeTokenByChainId }
