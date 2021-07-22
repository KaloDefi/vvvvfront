import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kolo,
    earningToken: tokens.kolo,
    contractAddress: {
      97: '',
      56: '',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
