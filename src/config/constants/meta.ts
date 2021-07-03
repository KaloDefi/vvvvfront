import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PuSwap',
  description:
    'The most popular AMM on BSC by user count! Earn PuSwap through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PuSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://becoswap.com/images/hero.jpg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | PuSwap',
  },
  '/competition': {
    title: 'Trading Battle | PuSwap',
  },
  '/prediction': {
    title: 'Prediction | PuSwap',
  },
  '/farms': {
    title: 'Farms | PuSwap',
  },
  '/pools': {
    title: 'Pools | PuSwap',
  },
  '/lottery': {
    title: 'Lottery | PuSwap',
  },
  '/collectibles': {
    title: 'Collectibles | PuSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | PuSwap',
  },
  '/teams': {
    title: 'Leaderboard | PuSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | PuSwap',
  },
  '/profile': {
    title: 'Your Profile | PuSwap',
  },
}
