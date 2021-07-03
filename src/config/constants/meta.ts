import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ViXA',
  description:
    'ViXA.FiNANCE is the first high yield farming & staking on Binance Smart Chain.',
  
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | ViXA',
  },
  '/competition': {
    title: 'Trading Battle | ViXA',
  },
  '/prediction': {
    title: 'Prediction | ViXA',
  },
  '/farms': {
    title: 'Farms | ViXA',
  },
  '/pools': {
    title: 'Pools | ViXA',
  },
  '/lottery': {
    title: 'Lottery | ViXA',
  },
  '/collectibles': {
    title: 'Collectibles | ViXA',
  },
  '/ifo': {
    title: 'Initial Farm Offering | ViXA',
  },
  '/teams': {
    title: 'Leaderboard | ViXA',
  },
  '/profile/tasks': {
    title: 'Task Center | ViXA',
  },
  '/profile': {
    title: 'Your Profile | ViXA',
  },
}
