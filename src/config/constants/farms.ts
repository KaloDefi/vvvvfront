import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'KOLO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x54c6F4f97496481E4cd14Aa91aa3AaD00125DfDB',
    },
    token: tokens.kolo,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'KOLO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x601dCEf2dB87622f79B25C92977CDAF3fb12A41E',
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
    pid: 5,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: tokens.wbnb.address[56],
    },
    token: tokens.wbnb,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: tokens.btcb.address[56],
    },
    token: tokens.btcb,
    quoteToken: tokens.btcb,
  },
  
  {
    pid: 7,
    lpSymbol: 'BUSD-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  
  {
    pid: 8,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  
   {
    pid: 9,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    token: tokens.dai,
    quoteToken: tokens.busd,
  },
  {
    pid: 10,
    lpSymbol: 'TUSD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2E28b9B74D6d99D4697e913b82B41ef1CAC51c6C',
    },
    token: tokens.tusd,
    quoteToken: tokens.busd,
  },
  {
    pid: 11,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4df11afacb85a5c7f98b624072eccddbb1',
    },
    token: tokens.usdc,
    quoteToken: tokens.busd,
  },
]

export default farms
