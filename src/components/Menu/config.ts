import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy PUSX',
    icon: 'TradeIcon',
    href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3594a1674250bcC658AA18BAbF028C894e463B25',
  },
  {
    label: 'Add Liquidity',
    icon: 'TradeIcon',
    href: 'https://exchange.pancakeswap.finance/#/pool',
  },
  {
    label: 'Stakes',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  
  {
    label: 'Analytics & Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Bogged',
        href: 'https://charts.bogged.finance/?token=0x3594a1674250bcC658AA18BAbF028C894e463B25',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x3594a1674250bcc658aa18babf028c894e463b25',
      },
      {
        label: 'Dex.guru',
        href: 'https://dex.guru/token/0x3594a1674250bcc658aa18babf028c894e463b25-bsc',
      },
      {
        label: 'BSCScan',
        href: 'https://bscscan.com/token/0x3594a1674250bcc658aa18babf028c894e463b25',
      },
      {
        label: 'Pancakeswap',
        href: 'https://pancakeswap.info/token/0x3594a1674250bcc658aa18babf028c894e463b25',
      },
    ],
  },
  {
    label: 'Reviews & Audits',
    icon: 'NftIcon',
    items: [
      {
        label: 'By RugDoc',
        href: 'https://rugdoc.io/project/puswap/',
      },
     
      
    ],
  },
  {
    label: 'IFO (SOON)',
    icon: 'IfoIcon',
    href: '#',
  },
  {
    label: 'NFT (SOON)',
    icon: 'NftIcon',
    href: '#',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'https://www.binance.org/en/bridge',
  },

 
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Telegram Group',
        href: 'https://t.me/PuSwapGroup',
      },
      {
        label: 'Telegram ANN',
        href: 'https://t.me/PuSwap',
      },
      {
        label: 'Docs',
        href: 'https://puswap.gitbook.io',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/PuSwap',
      },
    ],
  },
]

export default config
