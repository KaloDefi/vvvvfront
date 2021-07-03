import { MenuEntry } from '@becoswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3594a1674250bcc658aa18babf028c894e463b25',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
      {
        label: 'Buy ViXA',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x3594a1674250bcc658aa18babf028c894e463b25',
      },
      {
        label: 'Add ViXA-BNB LP',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x5f2f05e03fd34792473fdfd83863339c3a1ebfb5',
      },
    ],
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
    label: 'Price Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Pancakeswap',
        href: 'https://pancakeswap.info/token/0x5f2f05e03fd34792473fdfd83863339c3a1ebfb5',
      },
      {
        label: 'Bogged',
        href: 'https://charts.bogged.finance/?token=0x5f2f05e03fd34792473fdfd83863339c3a1ebfb5',
      },
      {
        label: 'Poocoin',
        href: 'https://poocoin.app/tokens/0x5f2f05e03fd34792473fdfd83863339c3a1ebfb5',
      },
      {
        label: 'BSCScan',
        href: 'https://bscscan.com/token/0x5f2f05e03fd34792473fdfd83863339c3a1ebfb5',
      },
      
    ],
  },
  {
    label: 'Audits',
    icon: 'NftIcon',
    items: [
      {
        label: 'RugDoc',
        href: 'https://rugdoc.io/project/',
      },
     
      
    ],
  },
 
  {
    label: 'Polygon (Soon)',
    icon: 'BridgeIcon',
    href: '#',
  },

 
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      
      {
        label: 'Telegram ANN',
        href: 'https://t.me/ViXAFinance,
      },
      {
        label: 'Docs',
        href: 'https://vixafinance.gitbook.io',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/ViXAFinance',
      },
    ],
  },
]

export default config
