import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
   {
    label: 'KOLO Polygon',
    icon: 'BridgeIcon',
    href: 'https://polygon.kolo.finance',
  },

  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy KOLO',
        href: 'https://pancakeswap.finance/swap?outputCurrency=0x236f2345030668ccb317b3ee8f7916b962be2321',
      },
      {
        label: 'Add KOLO-BNB LP',
        href: 'https://pancakeswap.finance/add/BNB/0x236f2345030668cCB317b3Ee8F7916B962BE2321',
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
        label: 'Pancakeswap',
        href: 'https://pancakeswap.info/token/0x236f2345030668cCB317b3Ee8F7916B962BE2321',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x236f2345030668cCB317b3Ee8F7916B962BE2321',
      },
      {
        label: 'BSCScan',
        href: 'https://bscscan.com/token/0x236f2345030668cCB317b3Ee8F7916B962BE2321',
      },
      {
        label: 'Docs',
        href: 'https://kolo-finance.gitbook.io/kolo-finance/',
      },
    ],
  },

 
  {
    label: 'Community',
    icon: 'MoreIcon',
    items: [
      
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
  
    {
    label: 'Reviews / Audits',
    icon: 'NftIcon',
    items: [
      {
        label: 'Review by RugDoc',
        href: 'https://rugdoc.io/project/kolo-finance/',
      },
     
      
    ],
  },
  
  {
    label: 'DappRadar',
    icon: 'NftIcon',
    href: 'https://dappradar.com/binance-smart-chain/defi/kolo-finance',
  },
  
   
]

export default config
