<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import ProjectCarousel from '../components/projects/ProjectCarousel.vue'
import { getLocalizedProjects } from '../data/projectsPageData.js'

const { t, locale } = useI18n()
const route = useRoute()

const projects = computed(() => getLocalizedProjects(locale.value))

function paragraphs(text) {
  return String(text || '')
    .split(/\n\n+/)
    .map((s) => s.trim())
    .filter(Boolean)
}

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.title = t('projectsPage.docTitle')
  }
})
</script>

<template>
  <main class="bg-white pb-16 pt-8 lg:pb-24 lg:pt-12">
    <div class="mx-auto max-w-6xl px-4 lg:px-8">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-semibold text-brand/55 transition hover:text-brand"
      >
        <span aria-hidden="true">←</span>
        {{ t('projectsPage.backHome') }}
      </RouterLink>

      <header class="mt-10 max-w-3xl">
        <h1 class="font-heading text-4xl leading-tight text-brand md:text-5xl">
          {{ t('projectsPage.pageTitle') }}
        </h1>
        <p class="mt-4 text-base leading-relaxed text-brand/70 md:text-lg">
          {{ t('projectsPage.pageLead') }}
        </p>
      </header>

      <article
        v-for="p in projects"
        :key="p.id"
        class="mt-16 border-t border-black/[0.06] pt-16 first:mt-14 first:border-t-0 first:pt-0"
      >
        <div class="text-center">
          <h2 class="font-heading text-3xl font-bold leading-tight text-brand md:text-[2.1rem]">
            {{ p.title }}
          </h2>
          <p class="mt-3 text-sm leading-relaxed text-brand/60 md:text-base">
            {{ p.subtitle }}
          </p>
        </div>

        <div class="mt-8">
          <ProjectCarousel v-if="p.media.type === 'carousel'" :slides="p.media.slides" />
          <div
            v-else
            class="mx-auto w-fit max-w-full overflow-hidden rounded-[1.75rem] ring-1 ring-black/[0.06] shadow-lg shadow-brand/[0.06]"
          >
            <img
              :src="p.media.src"
              :alt="p.media.alt"
              class="block h-auto max-h-[min(420px,55vh)] w-auto max-w-full md:max-h-[480px]"
              loading="lazy"
            />
          </div>
        </div>

        <div class="mt-8 grid gap-3 sm:grid-cols-2">
          <div
            v-for="(m, mi) in p.metrics"
            :key="`${p.id}-${mi}`"
            class="rounded-2xl bg-brand px-4 py-4 text-white shadow-lg shadow-brand/25 sm:px-5 sm:py-5"
          >
            <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-xs">
              {{ m.label }}
            </p>
            <p class="mt-2 text-xl font-semibold sm:text-2xl">{{ m.value }}</p>
          </div>
        </div>

        <div class="mt-12 max-w-3xl space-y-10">
          <section>
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-brand/45">
              {{ t('projectsPage.context') }}
            </h3>
            <p class="mt-4 text-base leading-relaxed text-brand/80">
              {{ p.contexto }}
            </p>
          </section>
          <section>
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-brand/45">
              {{ t('projectsPage.whatIDid') }}
            </h3>
            <p v-for="(para, pi) in paragraphs(p.queHice)" :key="pi" class="mt-4 text-base leading-relaxed text-brand/80">
              {{ para }}
            </p>
          </section>
          <section>
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-brand/45">
              {{ t('projectsPage.result') }}
            </h3>
            <p v-for="(para, pi) in paragraphs(p.resultado)" :key="pi" class="mt-4 text-base leading-relaxed text-brand/80">
              {{ para }}
            </p>
          </section>
        </div>

      </article>

      <section class="mt-20 rounded-[1.75rem] bg-brand px-6 py-10 text-white lg:px-10 lg:py-12">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{{ t('projectsPage.ctaKicker') }}</p>
            <p class="font-heading text-2xl md:text-3xl">{{ t('projectsPage.ctaTitle') }}</p>
            <p class="max-w-xl text-sm leading-relaxed text-white/75">
              {{ t('projectsPage.ctaBody') }}
            </p>
          </div>
          <RouterLink
            :to="{ path: route.path, hash: '#contacts' }"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-xl shadow-black/25 transition hover:bg-white/90"
          >
            {{ t('projectsPage.ctaButton') }}
          </RouterLink>
        </div>
      </section>
    </div>
  </main>
</template>
