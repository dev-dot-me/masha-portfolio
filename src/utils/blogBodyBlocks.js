/**
 * @typedef {{ kind: 'p' | 'h2' | 'h3' | 'quote', text: string }} BlogBodyBlock
 */

/**
 * @param {unknown} body
 * @returns {BlogBodyBlock[]}
 */
export function normalizeBlogBody(body) {
  if (!Array.isArray(body)) return []
  return body.map((b) => {
    if (typeof b === 'string') return { kind: 'p', text: b }
    if (b && typeof b === 'object' && 'kind' in b && 'text' in b) {
      const k = /** @type {string} */ (b.kind)
      if (k === 'h2' || k === 'h3' || k === 'quote' || k === 'p') {
        return { kind: k, text: String(b.text) }
      }
    }
    return { kind: 'p', text: String(b) }
  })
}
