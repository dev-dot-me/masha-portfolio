import cover1 from '../assets/article1.png'
import cover2 from '../assets/article2.png'
import cover3 from '../assets/article3.png'
import coverRepeat from '../assets/mi-trabajo1.png'
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
    slug: 'que-es-smm-marketing-redes',
    tagTone: 'smm',
    tagKey: 'smm',
    publishedAt: '2026-05-01',
    readMinutes: 14,
    views: 2410,
    cover: cover1,
  },
  {
    slug: 'ia-smm-herramientas-tiempo',
    tagTone: 'ai',
    tagKey: 'ai',
    publishedAt: '2026-04-29',
    readMinutes: 11,
    views: 890,
    cover: cover2,
  },
  {
    slug: 'instagram-analitica-leer-datos',
    tagTone: 'smm',
    tagKey: 'smm',
    publishedAt: '2026-04-26',
    readMinutes: 12,
    views: 1820,
    cover: cover3,
  },
  {
    slug: 'dark-net-mify-ta-realnist',
    tagTone: 'interesting',
    tagKey: 'interesting',
    publishedAt: '2026-04-22',
    readMinutes: 4,
    views: 156,
    cover: coverRepeat,
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
