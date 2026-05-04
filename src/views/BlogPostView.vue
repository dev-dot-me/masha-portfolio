<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedBlogPost } from '../composables/useLocalizedBlogPosts.js'
import { normalizeBlogBody } from '../utils/blogBodyBlocks.js'

const route = useRoute()
const { t } = useI18n()
const slug = computed(() => String(route.params.slug ?? ''))
const post = useLocalizedBlogPost(slug)
const bodyBlocks = computed(() => normalizeBlogBody(post.value?.body))

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
          <!-- Article views (hidden)
          <span class="text-brand/25" aria-hidden="true">|</span>
          <span class="inline-flex items-center gap-1">
            <span aria-hidden="true">👁</span>
            {{ post.viewsFormatted }}
          </span>
          -->
        </p>

        <div class="mt-10 overflow-hidden rounded-2xl bg-surface ring-1 ring-black/[0.06]">
          <img :src="post.cover" :alt="post.title" class="aspect-[16/9] w-full object-cover md:aspect-[2/1]" loading="eager" />
        </div>

        <div
          class="article-body mt-10 max-w-none text-base leading-relaxed text-brand/80 md:text-[1.05rem]"
        >
          <template v-for="(block, i) in bodyBlocks" :key="i">
            <h2
              v-if="block.kind === 'h2'"
              class="font-heading text-[1.35rem] font-bold leading-snug text-brand md:text-2xl [&:not(:first-child)]:mt-12 mb-3 first:mt-0"
            >
              {{ block.text }}
            </h2>
            <h3
              v-else-if="block.kind === 'h3'"
              class="font-heading text-lg font-semibold leading-snug text-brand md:text-xl mt-7 mb-2"
            >
              {{ block.text }}
            </h3>
            <blockquote
              v-else-if="block.kind === 'quote'"
              class="my-6 rounded-r-xl border-l-4 border-orange-500/40 bg-brand/[0.04] py-4 pl-5 pr-4 text-[0.98em] not-italic leading-relaxed text-brand/85 md:pl-6"
            >
              {{ block.text }}
            </blockquote>
            <p v-else class="mb-4 last:mb-0 leading-relaxed">{{ block.text }}</p>
          </template>
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
