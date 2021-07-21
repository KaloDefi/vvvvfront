import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.kolo,
    earningToken: tokens.kolo,
    contractAddress: {
      97: '0xed7459319b9a6ccf3b8e6f96f1e5b70ea83a0b6d',
      56: '0xed7459319b9a6ccf3b8e6f96f1e5b70ea83a0b6d',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.2',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
