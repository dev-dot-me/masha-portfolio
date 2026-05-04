import { normalizeBlogBody } from './blogBodyBlocks.js'

/**
 * @param {unknown} body
 * @returns {{ lead: string[], sections: { title: string, blocks: ReturnType<typeof normalizeBlogBody> }[] }}
 */
export function segmentAboutPage(body) {
  const blocks = normalizeBlogBody(body)
  const lead = []
  let i = 0
  while (i < blocks.length && blocks[i].kind === 'p') {
    lead.push(blocks[i].text)
    i++
  }
  const sections = []
  while (i < blocks.length) {
    const b = blocks[i]
    if (b.kind === 'h2') {
      const title = b.text
      i++
      const chunk = []
      while (i < blocks.length && blocks[i].kind !== 'h2') {
        chunk.push(blocks[i])
        i++
      }
      sections.push({ title, blocks: chunk })
    } else {
      i++
    }
  }
  return { lead, sections }
}

/**
 * @param {ReturnType<typeof normalizeBlogBody>} blocks
 * @returns {{ title: string, lines: string[] }[]}
 */
export function groupH3Sections(blocks) {
  /** @type {{ title: string, lines: string[] }[]} */
  const groups = []
  for (const b of blocks) {
    if (b.kind === 'h3') {
      groups.push({ title: b.text, lines: [] })
    } else if (b.kind === 'p' && groups.length) {
      groups[groups.length - 1].lines.push(b.text)
    }
  }
  return groups
}

/**
 * @param {ReturnType<typeof normalizeBlogBody>} blocks
 * @returns {{ markets: string[], quote: string | null }}
 */
export function splitMarketsBlocks(blocks) {
  const markets = []
  let quote = null
  for (const b of blocks) {
    if (b.kind === 'p') markets.push(b.text)
    if (b.kind === 'quote') quote = b.text
  }
  return { markets, quote }
}
