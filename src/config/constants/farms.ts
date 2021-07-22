import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'KOLO-BNB LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    token: tokens.kolo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'KOLO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    token: tokens.kolo,
    quoteToken: tokens.busd,
  },
   {
    pid: 3,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  {
    pid: 4,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 20,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: tokens.wbnb.address[56],
    },
    token: tokens.wbnb,
    quoteToken: tokens.wbnb,
    single: true,
  },
]

export default farms
