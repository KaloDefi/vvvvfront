import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'KOLO-MATIC LP',
    lpAddresses: {
      97: '',
      137: '0x54c6F4f97496481E4cd14Aa91aa3AaD00125DfDB',
    },
    token: tokens.kolo,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'KOLO-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x601dCEf2dB87622f79B25C92977CDAF3fb12A41E',
    },
    token: tokens.kolo,
    quoteToken: tokens.usdt,
  },
   {
    pid: 3,
    lpSymbol: 'USDT-USDC LP',
    lpAddresses: {
      97: '',
      137: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.usdc,
  },
  {
    pid: 4,
    lpSymbol: 'MATIC-USDT LP',
    lpAddresses: {
      97: '',
      137: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.usdt,
    quoteToken: tokens.matic,
  },
  {
    pid: 5,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: tokens.wmatic.address[137],
    },
    token: tokens.wmatic,
    quoteToken: tokens.wmatic,
  },
]

export default farms
