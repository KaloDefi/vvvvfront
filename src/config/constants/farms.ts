import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'VIXA-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7aBf1463b27CDA4174573aCd3eC6c8db5f385A7d',
    },
    token: tokens.vixa,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'VIXA-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc2a9540F68dF7e2b037850981e7cA156D1244A97',
    },
    token: tokens.vixa,
    quoteToken: tokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'VIXA-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x83181965acD0CfDB076ce0925a40d7aEcfB4d29b',
    },
    token: tokens.vixa,
    quoteToken: tokens.usdt,
  }, 
  {
    pid: 21,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
  },
  
  
   {
    pid: 20,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
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
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    token: tokens.usdt,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    token: tokens.eth,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'BTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    token: tokens.btcb,
    quoteToken: tokens.wbnb,
  }, 
  {
    pid: 8,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    token: tokens.usdt,
    quoteToken: tokens.busd,
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
  {
    pid: 12,
    lpSymbol: 'BTC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    token: tokens.btcb,
    quoteToken: tokens.busd,
  },
   {
    pid: 13,
    lpSymbol: 'LINK-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
    },
    token: tokens.link,
    quoteToken: tokens.wbnb,
  },
    {
    pid: 14,
    lpSymbol: 'DOGE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xac109c8025f272414fd9e2faa805a583708a017f',
    },
    token: tokens.doge,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 15,
    lpSymbol: 'TRX-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3cd338c3BB249B6b3C55799F85a589FEbBBFf9Dd',
    },
    token: tokens.trx,
    quoteToken: tokens.wbnb,
  },
  
  {
    pid: 16,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    token: tokens.dot,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 17,
    lpSymbol: 'LTC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC',
    },
    token: tokens.ltc,
    quoteToken: tokens.wbnb,
  },

  {
    pid: 18,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 19,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91B974ec2af3c843270886528a9E6',
    },
    token: tokens.cake,
    quoteToken: tokens.busd,
  },

  
]

export default farms
