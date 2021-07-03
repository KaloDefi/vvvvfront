import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.vixa,
    earningToken: tokens.vixa,
    contractAddress: {
      97: '0xa9fe1666a06b63851f5e342741e16df08e0bf261',
      56: '0xa9fe1666a06b63851f5e342741e16df08e0bf261',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
