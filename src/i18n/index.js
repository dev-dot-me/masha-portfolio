import { createI18n } from 'vue-i18n'
import es from '../locales/es.json'
import en from '../locales/en.json'
import ua from '../locales/ua.json'

export const STORAGE_KEY = 'masha-smm-locale'

export const SUPPORTED_LOCALES = ['es', 'en', 'ua']

function readStoredLocale() {
  if (typeof localStorage === 'undefined') return 'es'
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'es' || s === 'en' || s === 'ua') return s
  } catch {
    /* ignore */
  }
  return 'es'
}

export function createAppI18n() {
  return createI18n({
    legacy: false,
    locale: readStoredLocale(),
    fallbackLocale: 'es',
    messages: { es, en, ua },
    missingWarn: false,
    fallbackWarn: false,
  })
}

export function persistLocale(code) {
  if (typeof localStorage === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, code)
  } catch {
    /* ignore */
  }
}
