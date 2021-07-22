import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
   {
    label: 'KOLO BSC',
    icon: 'BridgeIcon',
    href: 'https://kolo.finance',
  },

  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy KOLO',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0x236f2345030668ccb317b3ee8f7916b962be2321',
      },
      {
        label: 'Add KOLO-MATIC LP',
        href: 'https://quickswap.exchange/#/add/ETH/0x236f2345030668cCB317b3Ee8F7916B962BE2321',
      },
      
    ],
  },
  {
    label: 'Mines',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  
  {
    label: 'Earn Money',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Quickswap',
        href: 'https://info.quickswap.exchange/token/0x236f2345030668ccb317b3ee8f7916b962be2321',
      },
      {
        label: 'Poocoin',
        href: 'https://polygon.poocoin.app/tokens/0x236f2345030668ccb317b3ee8f7916b962be2321',
      },
      {
        label: 'Polygonscan',
        href: 'https://polygonscan.com/token/0x236f2345030668ccb317b3ee8f7916b962be2321',
      },
      {
        label: 'Docs',
        href: 'https://kolo-finance.gitbook.io/kolo-finance/',
      },
    ],
  },
//   {
//     label: 'Reviews / Audits',
//     icon: 'NftIcon',
//     items: [
//       {
//         label: 'Review by RugDoc',
//         href: 'https://rugdoc.io/project//',
//       },
     
      
//     ],
//   },
 
  {
    label: 'Community',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Telegram Chat',
        href: 'https://t.me/joinchat/OP7k_pIiAGA0YzU1',
      },
      
      {
        label: 'Telegram ANN',
        href: 'https://t.me/KoloFinance',
      },
      
      {
        label: 'Twitter',
        href: 'https://twitter.com/KoloFinance',
      },
    ],
  },
]

export default config
