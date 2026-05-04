<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import portrait from '../assets/author-photo.png'
import { getAboutPage } from '../data/aboutPageContent.js'
import { normalizeBlogBody } from '../utils/blogBodyBlocks.js'
import {
  groupH3Sections,
  segmentAboutPage,
  splitMarketsBlocks,
} from '../utils/aboutPageSegments.js'

const { locale, t } = useI18n()

const page = computed(() => getAboutPage(locale.value))

const segments = computed(() => segmentAboutPage(page.value.body))

const story = computed(() => segments.value.sections[0])
const marketsSec = computed(() => segments.value.sections[1])
const experienceSec = computed(() => segments.value.sections[2])
const toolsSec = computed(() => segments.value.sections[3])
const educationSec = computed(() => segments.value.sections[4])
const languagesSec = computed(() => segments.value.sections[5])

const marketsData = computed(() =>
  marketsSec.value ? splitMarketsBlocks(normalizeBlogBody(marketsSec.value.blocks)) : { markets: [], quote: null },
)

const experienceGroups = computed(() =>
  experienceSec.value ? groupH3Sections(normalizeBlogBody(experienceSec.value.blocks)) : [],
)

const toolsGroups = computed(() =>
  toolsSec.value ? groupH3Sections(normalizeBlogBody(toolsSec.value.blocks)) : [],
)

const educationGroups = computed(() =>
  educationSec.value ? groupH3Sections(normalizeBlogBody(educationSec.value.blocks)) : [],
)

const languageGroups = computed(() =>
  languagesSec.value ? groupH3Sections(normalizeBlogBody(languagesSec.value.blocks)) : [],
)

/** Intro card groups: first h3 with no lines = eyebrow; rest = cards */
const toolsCardGroups = computed(() => {
  const g = toolsGroups.value
  if (!g.length) return { intro: null, cards: [] }
  const [first, ...rest] = g
  if (first.lines.length === 0) {
    return { intro: first.title, cards: rest }
  }
  return { intro: null, cards: g }
})

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.title = page.value.documentTitle
  }
})
</script>

<template>
  <main
    class="relative min-h-[50dvh] bg-gradient-to-b from-brand/[0.04] via-white to-surface pb-20 pt-[max(2rem,env(safe-area-inset-top,0px))] lg:pb-28 lg:pt-12"
  >
    <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <RouterLink
        :to="{ path: '/', hash: '#about' }"
        class="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-semibold text-brand/70 shadow-sm ring-1 ring-black/[0.06] backdrop-blur-sm transition hover:bg-white hover:text-brand"
      >
        <span aria-hidden="true" class="text-base leading-none">←</span>
        {{ t('aboutPage.back') }}
      </RouterLink>

      <!-- Hero: як блок «Про мене» на головній -->
      <article class="mt-10">
        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white/95 p-6 shadow-lg shadow-black/[0.04] sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12"
        >
          <div
            class="relative grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-12 xl:gap-16"
          >
            <div class="flex justify-center lg:justify-start">
              <div class="relative w-fit max-w-full">
                <div
                  class="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand/15 via-brand/8 to-transparent opacity-90 blur-md sm:-inset-1.5 sm:rounded-[2.25rem]"
                  aria-hidden="true"
                />
                <div
                  class="relative overflow-hidden rounded-[1.65rem] bg-white shadow-xl shadow-black/[0.08] ring-1 ring-black/[0.06] sm:rounded-[2rem]"
                >
                  <img
                    :src="portrait"
                    :alt="t('aboutPage.title')"
                    class="block h-auto max-h-[min(400px,52svh)] w-auto max-w-[min(360px,92vw)] object-contain object-top align-middle sm:max-h-[min(460px,54svh)] sm:max-w-[min(400px,90vw)] md:max-h-[min(520px,56svh)] md:max-w-[min(440px,88vw)] lg:max-h-[min(560px,60svh)] lg:max-w-[min(480px,38vw)]"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            <header class="relative space-y-4 text-center lg:text-left">
              <p
                class="text-[11px] font-bold uppercase leading-snug tracking-[0.2em] text-brand/50 sm:text-xs sm:tracking-[0.18em]"
              >
                {{ page.heroKicker }}
              </p>
              <div class="mx-auto h-1 w-12 rounded-full bg-gradient-to-r from-brand/35 to-brand lg:mx-0" />
              <h1
                class="font-heading text-3xl font-bold leading-[1.12] text-brand text-pretty sm:text-4xl md:text-[2.35rem] lg:text-[2.5rem]"
              >
                {{ t('aboutPage.title') }}
              </h1>
            </header>
          </div>
        </div>

        <!-- Lead: акцентний вступ -->
        <section
          v-if="segments.lead.length"
          class="mx-auto mt-10 max-w-4xl space-y-6 text-pretty sm:mt-12 md:mt-14"
        >
          <p
            v-if="segments.lead[0]"
            class="font-heading text-2xl font-semibold leading-snug text-brand sm:text-3xl md:text-[1.75rem]"
          >
            {{ segments.lead[0] }}
          </p>
          <p
            v-for="(line, li) in segments.lead.slice(1)"
            :key="li"
            class="text-base leading-relaxed text-brand/75 md:text-lg"
          >
            {{ line }}
          </p>
        </section>
      </article>
    </div>

    <!-- Секція 0: історія / «від ідеї» — surface, як Process -->
    <section
      v-if="story"
      class="scroll-mt-24 mt-14 bg-surface px-4 py-16 sm:mt-16 lg:px-8 lg:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="font-heading text-3xl text-brand md:text-4xl">
            {{ story.title }}
          </h2>
        </div>
        <div
          class="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-relaxed text-brand/80 md:text-lg"
        >
          <p v-for="(b, bi) in normalizeBlogBody(story.blocks).filter((x) => x.kind === 'p')" :key="bi" class="text-pretty">
            {{ b.text }}
          </p>
        </div>
      </div>
    </section>

    <!-- Секція 1: ринки — brand-смуга як Cases preview -->
    <section v-if="marketsSec" class="scroll-mt-24 bg-brand px-4 py-16 text-white lg:px-8 lg:py-24">
      <div class="mx-auto max-w-6xl space-y-10">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="font-heading text-3xl md:text-4xl">{{ marketsSec.title }}</h2>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(m, mi) in marketsData.markets"
            :key="mi"
            class="flex min-h-[5.5rem] flex-col items-center justify-center rounded-2xl bg-white/10 px-4 py-5 text-center text-sm font-semibold uppercase leading-snug tracking-wide text-white ring-1 ring-white/15 sm:min-h-[6rem] sm:text-base"
          >
            {{ m }}
          </div>
        </div>

        <blockquote
          v-if="marketsData.quote"
          class="mx-auto max-w-3xl rounded-2xl border border-white/15 bg-white/10 px-6 py-6 text-center text-[0.98em] not-italic leading-relaxed text-white/95 md:px-8 md:py-7"
        >
          {{ marketsData.quote }}
        </blockquote>
      </div>
    </section>

    <!-- Секція 2: досвід — суцільний текст -->
    <section v-if="experienceSec" class="scroll-mt-24 bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-3xl">
        <h2 class="font-heading text-3xl text-brand md:text-4xl">
          {{ experienceSec.title }}
        </h2>
        <p
          v-if="experienceGroups[0] && experienceGroups[0].lines.length === 0"
          class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand/45"
        >
          {{ experienceGroups[0].title }}
        </p>

        <div class="mt-10 space-y-12 text-pretty md:mt-12 md:space-y-14">
          <div
            v-for="(g, gi) in experienceGroups.slice(1)"
            :key="gi"
            class="border-t border-black/[0.06] pt-10 first:border-t-0 first:pt-0 md:pt-12 md:first:pt-0"
          >
            <h3 class="font-heading text-lg font-semibold leading-snug text-brand md:text-xl">
              {{ g.title }}
            </h3>
            <div class="mt-4 space-y-3 text-base leading-relaxed text-brand/75 md:text-[1.05rem]">
              <p v-for="(ln, li) in g.lines" :key="li">
                {{ ln }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Секція 3: інструменти — сітка карток -->
    <section v-if="toolsSec" class="scroll-mt-24 bg-surface px-4 py-16 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-6xl space-y-10">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="font-heading text-3xl text-brand md:text-4xl">
            {{ toolsSec.title }}
          </h2>
          <p v-if="toolsCardGroups.intro" class="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand/45">
            {{ toolsCardGroups.intro }}
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="(g, gi) in toolsCardGroups.cards"
            :key="gi"
            class="flex flex-col rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm"
          >
            <h3 class="text-xs font-bold uppercase tracking-[0.14em] text-brand/50">{{ g.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-brand/80">{{ g.lines.join(' ') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Секція 4: освіта — широкі картки -->
    <section v-if="educationSec" class="scroll-mt-24 bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-6xl space-y-10">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="font-heading text-3xl text-brand md:text-4xl">
            {{ educationSec.title }}
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(g, gi) in educationGroups"
            :key="gi"
            class="rounded-2xl border border-black/[0.06] bg-surface p-8 shadow-inner ring-1 ring-black/[0.04]"
          >
            <span class="font-heading text-5xl leading-none text-brand/12">{{ String(gi + 1).padStart(2, '0') }}</span>
            <h3 class="mt-4 font-heading text-xl font-semibold text-brand">{{ g.title }}</h3>
            <ul class="mt-4 space-y-3 text-sm leading-relaxed text-brand/75">
              <li v-for="(ln, li) in g.lines" :key="li" class="border-l-2 border-brand/20 pl-4">
                {{ ln }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Секція 5: мови — смуга як Stats -->
    <section v-if="languagesSec" class="scroll-mt-24 bg-brand px-4 py-16 text-white lg:px-8 lg:py-20">
      <div class="mx-auto max-w-6xl space-y-10">
        <div class="text-center">
          <h2 class="font-heading text-3xl md:text-4xl">{{ languagesSec.title }}</h2>
          <p
            v-if="languageGroups[0]?.title"
            class="mx-auto mt-4 max-w-xl text-sm font-semibold uppercase tracking-[0.16em] text-white/60"
          >
            {{ languageGroups[0].title }}
          </p>
        </div>

        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(ln, li) in languageGroups[0]?.lines ?? []"
            :key="li"
            class="flex min-h-[6.75rem] flex-col items-center justify-center rounded-2xl bg-white/10 px-4 py-5 text-center text-sm font-semibold uppercase leading-snug tracking-wide text-white ring-1 ring-white/15 sm:min-h-[7.25rem] sm:px-5 sm:text-base"
          >
            {{ ln }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
