export type IfoStatus = 'coming_soon' | 'live' | 'finished'

export interface Ifo {
  id: string
  isActive: boolean
  address: Address
  name: string
  token: string
  maxContribution: string
  minContribution: string
  subTitle?: string
  description?: string
  saleAmount: string
  raiseAmount: string
  projectSiteUrl: string
  currency: string
  currencyAddress: string
  tokenDecimals: number
}

export enum QuoteToken {
  'BNB' = 'BNB',
  'WBNB' = 'WBNB',
  'SALT' = 'SALT',
  'SUSHI' = 'SUSHI',
  'CAKE' = 'CAKE',
  'SYRUP' = 'SYRUP',
  'BUSD' = 'BUSD',
  'ETH' = 'ETH',
  'TWT' = 'TWT',
  'UST' = 'UST',
  'SALTBLUE' = 'SALT-BLUE',
  'SALTSLME' = 'SALT-SLME',
  'SALTBUSD' = 'SALT-BUSD',
  'SALTMOMO' = 'SALT-MOMO',
  'SALTPALM' = 'SALT-PALM',
  'SALTMCH' = 'SALT-MCH',
}

export enum PoolCategory {
  'COMMUNITY' = 'Community',
  'CORE' = 'Core',
  'BINANCE' = 'Binance', // Pools using native BNB behave differently than pools using a token
}

export interface Address {
  97?: string
  56: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  rewardTokenAddresses?: Address
  isMasterChef: boolean
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}

export interface PoolConfig {
  sousId: number
  image?: string
  tokenName: string
  stakingTokenName: QuoteToken
  stakingLimit?: number
  stakingTokenAddress?: Address
  contractAddress: Address
  rewardTokenAddress: Address
  poolCategory: PoolCategory
  projectLink: string
  tokenPerBlock: string
  sortOrder?: number
  harvest?: boolean
  isFinished?: boolean
  tokenDecimals: number
  burnFee: number
}

export type NftImages = {
  blur?: string
} & Images

export type NftVideo = {
  webm: string
  mp4: string
}

export type NftSource = {
  [key in NftType]: {
    address: Address
    identifierKey: string
  }
}

export enum NftType {
  PANCAKE = 'pancake',
  MIXIE = 'mixie',
}

export type Nft = {
  description: string
  name: string
  images: NftImages
  sortOrder: number
  type: NftType
  video?: NftVideo

  // Uniquely identifies the nft.
  // Used for matching an NFT from the config with the data from the NFT's tokenURI
  identifier: string

  // Used to be "bunnyId". Used when minting NFT
  variationId?: number | string
}

export type TeamImages = {
  alt: string
} & Images

export type Team = {
  id: number
  name: string
  description: string
  isJoinable?: boolean
  users: number
  points: number
  images: TeamImages
  background: string
  textColor: string
}

export type CampaignType = 'ifo' | 'teambattle'

export type Campaign = {
  id: string
  type: CampaignType
  title?: TranslatableText
  description?: TranslatableText
  badge?: string
}

export type PageMeta = {
  title: string
  description?: string
  image?: string
}
