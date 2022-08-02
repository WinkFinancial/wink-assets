import type { INetwork } from '../interfaces'
import { networksByChainId } from '../networks'

export const allNetworks: INetwork[] = Object.values(networksByChainId)

export const networks: INetwork[] = allNetworks.filter((network) => network.enabled)

export const allMainnetNetworks: INetwork[] = allNetworks.filter((network) => network.isMainnet)

export const mainnetNetworks: INetwork[] = allMainnetNetworks.filter((network) => network.enabled)

export const allTestnetNetworks: INetwork[] = allNetworks.filter((network) => !network.isMainnet)

export const testnetNetworks: INetwork[] = allTestnetNetworks.filter((network) => network.enabled)
