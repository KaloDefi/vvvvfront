import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kolo,
    earningToken: tokens.kolo,
    contractAddress: {
      97: '',
      137: '0x329d643e4a2e15f98d538a5d186a50dbd3da60ba',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.1',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
