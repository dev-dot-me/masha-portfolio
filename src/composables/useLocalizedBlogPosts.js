import { computed, unref } from 'vue'
import { useI18n } from 'vue-i18n'
import { blogPostsMeta, getBlogMetaBySlug } from '../data/blogPostsMeta.js'
import { formatBlogDate, formatViews } from '../utils/localeFormat.js'

function postBody(tm, slug) {
  const raw = tm(`blog.posts.${slug}.body`)
  return Array.isArray(raw) ? raw : []
}

export function useLocalizedBlogPosts() {
  const { t, tm, locale } = useI18n()
  return computed(() =>
    blogPostsMeta.map((meta) => ({
      ...meta,
      title: t(`blog.posts.${meta.slug}.title`),
      tag: t(`blog.tags.${meta.tagKey}`),
      body: postBody(tm, meta.slug),
      dateLabel: formatBlogDate(meta.publishedAt, locale.value),
      readTime: t('blog.readTime', { n: meta.readMinutes }),
      viewsFormatted: formatViews(meta.views, locale.value),
    })),
  )
}

/** @param {import('vue').Ref<string> | string} slugRef */
export function useLocalizedBlogPost(slugRef) {
  const { t, tm, locale } = useI18n()
  return computed(() => {
    const slug = unref(slugRef)
    const meta = getBlogMetaBySlug(slug)
    if (!meta) return null
    return {
      ...meta,
      title: t(`blog.posts.${meta.slug}.title`),
      tag: t(`blog.tags.${meta.tagKey}`),
      body: postBody(tm, meta.slug),
      dateLabel: formatBlogDate(meta.publishedAt, locale.value),
      readTime: t('blog.readTime', { n: meta.readMinutes }),
      viewsFormatted: formatViews(meta.views, locale.value),
    }
  })
}
