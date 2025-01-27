import { Poster } from './types'

const Posters: Poster[] = [
  {
    slug: '1',
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in search of a new home for humanity.',
    imageUrl: '/posters/01.png',
    createdAt: new Date('2014-11-07'),
  },
  {
    slug: '2',
    title: 'Inception',
    description:
      'A thief who enters the dreams of others to steal secrets gets a chance at redemption.',
    imageUrl: '/posters/02.png',
    createdAt: new Date('2010-07-16'),
  },
  {
    slug: '3',
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in search of a new home for humanity.',
    imageUrl: '/posters/03.png',
    createdAt: new Date('2014-11-07'),
  },
  {
    slug: '4',
    title: 'Inception',
    description:
      'A thief who enters the dreams of others to steal secrets gets a chance at redemption.',
    imageUrl: '/posters/04.png',
    createdAt: new Date('2010-07-16'),
  },
  {
    slug: '5',
    title: 'Interstellar',
    description:
      'A team of explorers travel through a wormhole in search of a new home for humanity.',
    imageUrl: '/posters/05.png',
    createdAt: new Date('2014-11-07'),
  },
]

export function fetchPosterBySlug(slug: string): Poster {
  const poster = Posters.find(p => p.slug === slug)
  if (!poster) {
    throw new Error(`Poster not found for slug: ${slug}`)
  }
  return poster
}

export function fetchAdjacentPosters(slug: string): Poster[] {
  const currentIndex = Posters.findIndex(p => p.slug === slug)

  if (currentIndex === -1) {
    throw new Error(`Poster not found for slug: ${slug}`)
  }

  const postersLength = Posters.length

  if (postersLength < 2) {
    throw new Error('Need at least 2 posters to calculate adjacent items')
  }

  const prevIndex = (currentIndex - 1 + postersLength) % postersLength
  const nextIndex = (currentIndex + 1) % postersLength

  return [Posters[prevIndex] as Poster, Posters[nextIndex] as Poster]
}
export function fetchAllPosters(): Poster[] {
  return Posters.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}
