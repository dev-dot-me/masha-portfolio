import cover1 from '../assets/large-project.png'
import cover2 from '../assets/case1.png'
import cover3 from '../assets/case2.png'
import cover4 from '../assets/author-photo.png'
import cover5 from '../assets/author-photo1.png'

/** @typedef {'smm' | 'research' | 'interesting' | 'ai'} BlogTagKey */
/** @typedef {'smm' | 'research' | 'interesting' | 'ai'} BlogTagTone */

/**
 * @typedef {object} BlogPostMeta
 * @property {string} slug
 * @property {BlogTagTone} tagTone
 * @property {BlogTagKey} tagKey
 * @property {string} publishedAt YYYY-MM-DD
 * @property {number} readMinutes
 * @property {number} views
 * @property {string} cover
 */

/** @type {BlogPostMeta[]} */
export const blogPostsMeta = [
  {
    slug: '10-idey-kontent-dnya-materi',
    tagTone: 'smm',
    tagKey: 'smm',
    publishedAt: '2026-05-01',
    readMinutes: 3,
    views: 44,
    cover: cover1,
  },
  {
    slug: 'doslidzhennya-instagram-45-brendiv',
    tagTone: 'research',
    tagKey: 'research',
    publishedAt: '2026-04-28',
    readMinutes: 2,
    views: 213,
    cover: cover2,
  },
  {
    slug: 'kontent-plan-smm-traven-2026',
    tagTone: 'smm',
    tagKey: 'smm',
    publishedAt: '2026-04-26',
    readMinutes: 5,
    views: 10034,
    cover: cover3,
  },
  {
    slug: 'dark-net-mify-ta-realnist',
    tagTone: 'interesting',
    tagKey: 'interesting',
    publishedAt: '2026-04-22',
    readMinutes: 4,
    views: 156,
    cover: cover2,
  },
  {
    slug: '50-promptiv-chatgpt-smm',
    tagTone: 'ai',
    tagKey: 'ai',
    publishedAt: '2026-04-18',
    readMinutes: 6,
    views: 892,
    cover: cover4,
  },
  {
    slug: 'podkast-smm-osobystyj-brend',
    tagTone: 'smm',
    tagKey: 'smm',
    publishedAt: '2026-04-12',
    readMinutes: 8,
    views: 327,
    cover: cover5,
  },
]

export function getBlogMetaBySlug(slug) {
  return blogPostsMeta.find((p) => p.slug === slug) ?? null
}
