<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import reviewVisual from '../../assets/review.png'
import ReviewCard from '../reviews/ReviewCard.vue'
import { useLocalizedReviews } from '../../composables/useLocalizedReviews.js'

const { t } = useI18n()
const allReviews = useLocalizedReviews()
const items = computed(() => allReviews.value.slice(0, 3))
</script>

<template>
  <section id="reviews" class="scroll-mt-24 px-4 pt-16 pb-8 lg:px-8 lg:pt-24 lg:pb-10">
    <div class="mx-auto max-w-6xl space-y-10">
      <div class="text-center">
        <h2 class="font-heading text-3xl tracking-wide text-brand md:text-[2.35rem]">{{ t('testimonials.title') }}</h2>
        <p class="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-brand/80 md:text-lg">
          {{ t('testimonials.accent') }}
        </p>
        <div class="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl ring-1 ring-black/[0.06]">
          <img
            :src="reviewVisual"
            alt=""
            class="mx-auto block w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        <ReviewCard v-for="item in items" :key="item.handle" :item="item" />
      </div>

      <div class="flex justify-center">
        <RouterLink
          to="/reviews"
          class="inline-flex w-full min-w-[200px] max-w-xs items-center justify-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand/90 sm:w-auto"
        >
          {{ t('testimonials.learnMore') }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>
