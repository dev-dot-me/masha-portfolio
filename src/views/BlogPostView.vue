<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedBlogPost } from '../composables/useLocalizedBlogPosts.js'

const route = useRoute()
const { t } = useI18n()
const slug = computed(() => String(route.params.slug ?? ''))
const post = useLocalizedBlogPost(slug)

const tagClass = computed(() => {
  const p = post.value
  if (!p) return 'bg-brand text-white'
  const map = {
    smm: 'bg-orange-500 text-white',
    research: 'bg-violet-600 text-white',
    interesting: 'bg-sky-600 text-white',
    ai: 'bg-teal-600 text-white',
  }
  return map[p.tagTone] ?? 'bg-brand text-white'
})
</script>

<template>
  <main v-if="post" class="bg-white pb-16 pt-8 lg:pb-24 lg:pt-12">
    <div class="mx-auto max-w-3xl px-4 lg:px-8">
      <RouterLink
        :to="{ path: '/', hash: '#blog' }"
        class="inline-flex items-center gap-2 text-sm font-semibold text-brand/55 transition hover:text-brand"
      >
        <span aria-hidden="true">←</span>
        {{ t('blog.back') }}
      </RouterLink>

      <article class="mt-10">
        <span
          class="inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide"
          :class="tagClass"
        >
          {{ post.tag }}
        </span>

        <h1 class="mt-6 font-heading text-3xl font-bold leading-tight text-brand md:text-4xl lg:text-[2.35rem]">
          {{ post.title }}
        </h1>

        <p class="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-brand/50">
          <span>{{ post.dateLabel }}</span>
          <span class="text-brand/25" aria-hidden="true">|</span>
          <span>{{ post.readTime }}</span>
          <span class="text-brand/25" aria-hidden="true">|</span>
          <span class="inline-flex items-center gap-1">
            <span aria-hidden="true">👁</span>
            {{ post.viewsFormatted }}
          </span>
        </p>

        <div class="mt-10 overflow-hidden rounded-2xl bg-surface ring-1 ring-black/[0.06]">
          <img :src="post.cover" :alt="post.title" class="aspect-[16/9] w-full object-cover md:aspect-[2/1]" loading="eager" />
        </div>

        <div class="prose-blog mt-10 space-y-5 text-base leading-relaxed text-brand/80 md:text-[1.05rem]">
          <p v-for="(paragraph, i) in post.body" :key="i">{{ paragraph }}</p>
        </div>
      </article>
    </div>
  </main>

  <main v-else class="bg-white pb-16 pt-8 lg:pb-24 lg:pt-12">
    <div class="mx-auto max-w-lg px-4 text-center lg:px-8">
      <p class="font-heading text-2xl text-brand">{{ t('blog.notFoundTitle') }}</p>
      <p class="mt-3 text-brand/65">{{ t('blog.notFoundBody') }}</p>
      <RouterLink
        :to="{ path: '/', hash: '#blog' }"
        class="mt-8 inline-flex rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand/90"
      >
        {{ t('blog.notFoundHome') }}
      </RouterLink>
    </div>
  </main>
</template>
