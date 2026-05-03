<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps({
  post: { type: Object, required: true },
})

const { t } = useI18n()

const tagClass = computed(() => {
  const map = {
    smm: 'bg-orange-500 text-white',
    research: 'bg-violet-600 text-white',
    interesting: 'bg-sky-600 text-white',
    ai: 'bg-teal-600 text-white',
  }
  return map[props.post.tagTone] ?? 'bg-brand text-white'
})
</script>

<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_-24px_rgba(14,32,52,0.35)] ring-1 ring-black/[0.06] transition hover:shadow-[0_20px_50px_-28px_rgba(14,32,52,0.4)]"
  >
    <div class="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-surface">
      <img :src="post.cover" :alt="post.title" class="h-full w-full object-cover" loading="lazy" decoding="async" />
      <span
        class="absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm"
        :class="tagClass"
      >
        {{ post.tag }}
      </span>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-5 md:p-6">
      <h3 class="font-heading text-lg font-bold leading-snug text-brand md:text-xl">
        {{ post.title }}
      </h3>

      <RouterLink
        :to="{ name: 'blog-post', params: { slug: post.slug } }"
        class="inline-flex w-fit items-center gap-2 rounded-full border border-black/[0.12] bg-white px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
      >
        {{ t('blog.readMore') }}
        <span aria-hidden="true" class="text-base leading-none">→</span>
      </RouterLink>

      <p class="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-brand/45 md:text-sm">
        <span>{{ post.dateLabel }}</span>
        <span class="text-brand/25" aria-hidden="true">|</span>
        <span>{{ post.readTime }}</span>
        <span class="text-brand/25" aria-hidden="true">|</span>
        <span class="inline-flex items-center gap-1" :title="t('blog.viewsHint')">
          <span aria-hidden="true">👁</span>
          <span>{{ post.viewsFormatted }}</span>
        </span>
      </p>
    </div>
  </article>
</template>
