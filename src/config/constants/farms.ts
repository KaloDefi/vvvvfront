import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'KOLO-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x4dcbf9c202Df9E44670640DBe7BB746751ACa4da',
    },
    token: tokens.kolo,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'KOLO-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x708125736389Cc1C0B5f0e4de35F381F12524fcd',
    },
    token: tokens.kolo,
    quoteToken: tokens.usdt,
  },
   {
    pid: 3,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      97: '0x2cF7252e74036d1Da831d11089D326296e64a728',
      137: '0x2cF7252e74036d1Da831d11089D326296e64a728',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
  },
  {
    pid: 5,
    lpSymbol: 'MATIC-USDT LP',
    lpAddresses: {
      97: '0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3',
      137: '0x604229c960e5CACF2aaEAc8Be68Ac07BA9dF81c3',
    },
    token: tokens.usdt,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 4,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      137: tokens.wmatic.address[137],
    },
    token: tokens.wmatic,
    quoteToken: tokens.wmatic,
  },
]

export default farms
