<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import trabaj1 from '../../assets/mi-trabajo1.png'
import trabaj2 from '../../assets/mi-trabajo2.png'
import trabaj3 from '../../assets/mi-trabajo3.png'

const { t } = useI18n()

const caseCards = computed(() => [
  { src: trabaj1, title: t('projectsPreview.case1Title'), meta: t('projectsPreview.case1Meta') },
  { src: trabaj2, title: t('projectsPreview.case2Title'), meta: t('projectsPreview.case2Meta') },
  { src: trabaj3, title: t('projectsPreview.case3Title'), meta: t('projectsPreview.case3Meta') },
])
</script>

<template>
  <section id="projects" class="scroll-mt-24 bg-brand px-4 py-16 text-white lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl space-y-8">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{{ t('projectsPreview.kicker') }}</p>
          <h2 class="mt-2 font-heading text-3xl md:text-4xl">{{ t('projectsPreview.title') }}</h2>
        </div>
        <RouterLink
          to="/projects"
          class="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-lg shadow-black/20 transition hover:bg-white/90 lg:inline-flex"
        >
          {{ t('common.learnMore') }}
        </RouterLink>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article
          v-for="(item, idx) in caseCards"
          :key="idx"
          class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-black shadow-xl shadow-black/30 ring-1 ring-white/10"
        >
          <img
            :src="item.src"
            alt=""
            class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 space-y-1 p-5">
            <h3 class="text-lg font-semibold leading-snug">{{ item.title }}</h3>
            <p class="text-sm text-white/70">{{ item.meta }}</p>
          </div>
        </article>
      </div>

      <RouterLink
        to="/projects"
        class="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand shadow-lg shadow-black/20 transition hover:bg-white/90 lg:hidden"
      >
        {{ t('common.learnMore') }}
      </RouterLink>
    </div>
  </section>
</template>
