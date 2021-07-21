import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'KOLO',
  description:
    'KOLO.FiNANCE  is the First Multichain Yield Farms & Stakes on Binance Smart Chain (BSC) & Polygon.',
  
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | KOLO',
  },
  '/competition': {
    title: 'Trading Battle | KOLO',
  },
  '/prediction': {
    title: 'Prediction | KOLO',
  },
  '/farms': {
    title: 'Farms | KOLO',
  },
  '/pools': {
    title: 'Pools | KOLO',
  },
  '/lottery': {
    title: 'Lottery | KOLO',
  },
  '/collectibles': {
    title: 'Collectibles | KOLO',
  },
  '/ifo': {
    title: 'Initial Farm Offering | KOLO',
  },
  '/teams': {
    title: 'Leaderboard | KOLO',
  },
  '/profile/tasks': {
    title: 'Task Center | KOLO',
  },
  '/profile': {
    title: 'Your Profile | KOLO',
  },
}
