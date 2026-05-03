<script setup>
import { useI18n } from 'vue-i18n'
import BlogCard from '../blog/BlogCard.vue'
import { useLocalizedBlogPosts } from '../../composables/useLocalizedBlogPosts.js'

const { t } = useI18n()
const items = useLocalizedBlogPosts()
</script>

<template>
  <section id="blog" class="scroll-mt-24 px-4 pt-8 pb-16 lg:px-8 lg:pt-10 lg:pb-24">
    <div class="mx-auto max-w-6xl space-y-10 lg:space-y-12">
      <div class="max-w-2xl">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">{{ t('blog.sectionKicker') }}</p>
        <h2 class="mt-3 font-heading text-4xl text-brand md:text-5xl">{{ t('blog.title') }}</h2>
        <p class="mt-4 text-base leading-relaxed text-brand/75 md:text-lg">
          {{ t('blog.intro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard v-for="post in items" :key="post.slug" :post="post" />
      </div>
    </div>
  </section>
</template>
