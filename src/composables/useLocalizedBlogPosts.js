import { computed, unref } from 'vue'
import { useI18n } from 'vue-i18n'
import { blogPostsMeta, getBlogMetaBySlug } from '../data/blogPostsMeta.js'
import { getBlogPostOverride } from '../data/blogPostOverrides.js'
import { formatBlogDate } from '../utils/localeFormat.js'
// import { formatViews } from '../utils/localeFormat.js'

function postBody(tm, slug) {
  const raw = tm(`blog.posts.${slug}.body`)
  return Array.isArray(raw) ? raw : []
}

function resolveLocaleCode(locale) {
  if (locale === 'ua') return 'ua'
  if (locale === 'en') return 'en'
  return 'es'
}

function localizePost(meta, t, tm, locale) {
  const ovr = getBlogPostOverride(meta.slug, resolveLocaleCode(locale))
  return {
    ...meta,
    title: ovr?.title ?? t(`blog.posts.${meta.slug}.title`),
    excerpt: ovr?.excerpt,
    tag: t(`blog.tags.${meta.tagKey}`),
    body: ovr?.body ?? postBody(tm, meta.slug),
    dateLabel: formatBlogDate(meta.publishedAt, locale),
    readTime: t('blog.readTime', { n: meta.readMinutes }),
    // viewsFormatted: formatViews(meta.views, locale),
  }
}

export function useLocalizedBlogPosts() {
  const { t, tm, locale } = useI18n()
  return computed(() => blogPostsMeta.map((meta) => localizePost(meta, t, tm, locale.value)))
}

/** @param {import('vue').Ref<string> | string} slugRef */
export function useLocalizedBlogPost(slugRef) {
  const { t, tm, locale } = useI18n()
  return computed(() => {
    const slug = unref(slugRef)
    const meta = getBlogMetaBySlug(slug)
    if (!meta) return null
    return localizePost(meta, t, tm, locale.value)
  })
}
