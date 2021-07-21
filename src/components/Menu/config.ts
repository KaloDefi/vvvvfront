import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
//    {
//     label: 'Polygon',
//     icon: 'BridgeIcon',
//     href: 'https://polygon.kolo.finance',
//   },

  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://pancakeswap.finance/swap?outputCurrency=',
      },
      {
        label: 'Liquidity',
        href: 'https://pancakeswap.finance/liquidity',
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
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Pancakeswap',
        href: 'https://pancakeswap.info/token/',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/',
      },
      {
        label: 'BSCScan',
        href: 'https://bscscan.com/token/',
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
        label: 'Telegram ANN',
        href: 'https://t.me/KoloFinance',
      },
      {
        label: 'Docs',
        href: 'https://kolo-finance.gitbook.io/kolo-finance/',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/KoloFinance',
      },
    ],
  },
]

export default config
