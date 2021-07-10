import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const farms: FarmConfig[] = [
 
  {
    pid: 20,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isMasterChef: true,
  },

  
]

export default farms
