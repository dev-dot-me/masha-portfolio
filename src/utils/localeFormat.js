/** @param {'es' | 'en' | 'ua'} code */
export function localeToBcp47(code) {
  if (code === 'ua') return 'uk-UA'
  if (code === 'es') return 'es-ES'
  return 'en-GB'
}

/** @param {string} iso YYYY-MM-DD */
export function formatBlogDate(iso, code) {
  const d = new Date(`${iso}T12:00:00`)
  return new Intl.DateTimeFormat(localeToBcp47(code), {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(d)
}

/** @param {'es' | 'en' | 'ua'} code */
export function formatViews(n, code) {
  return new Intl.NumberFormat(localeToBcp47(code)).format(n)
}
