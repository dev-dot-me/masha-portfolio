<script setup>
import { useI18n } from 'vue-i18n'
import caseCover from '../../assets/case1.png'
import caseAlt from '../../assets/case2.png'

const { t } = useI18n()
</script>

<template>
  <section id="cases" class="scroll-mt-24 bg-brand px-4 py-16 text-white lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl space-y-8">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{{ t('casesPreview.kicker') }}</p>
          <h2 class="mt-2 font-heading text-3xl md:text-4xl">{{ t('casesPreview.title') }}</h2>
        </div>
        <RouterLink
          to="/cases"
          class="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand shadow-lg shadow-black/20 transition hover:bg-white/90 lg:inline-flex"
        >
          {{ t('common.learnMore') }}
        </RouterLink>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article
          class="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-black shadow-xl shadow-black/30 ring-1 ring-white/10"
        >
          <img :src="caseCover" alt="" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div class="absolute inset-x-0 bottom-0 space-y-1 p-5">
            <h3 class="text-lg font-semibold leading-snug">{{ t('casesPreview.case1Title') }}</h3>
            <p class="text-sm text-white/70">{{ t('casesPreview.case1Meta') }}</p>
          </div>
        </article>

        <article class="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-surface p-6 text-brand shadow-inner ring-1 ring-black/[0.06]">
          <span class="font-heading text-5xl text-brand/15">02</span>
          <div class="space-y-1">
            <h3 class="text-lg font-bold uppercase tracking-wide">{{ t('casesPreview.case2Title') }}</h3>
            <p class="text-sm font-medium text-brand/65">{{ t('casesPreview.case2Meta') }}</p>
          </div>
          <img :src="caseAlt" alt="" class="pointer-events-none absolute -right-8 bottom-0 h-40 w-40 rounded-full object-cover opacity-30 blur-[1px]" loading="lazy" />
        </article>

        <article class="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-surface p-6 text-brand shadow-inner ring-1 ring-black/[0.06]">
          <span class="font-heading text-5xl text-brand/15">03</span>
          <div class="space-y-1">
            <h3 class="text-lg font-bold uppercase tracking-wide">{{ t('casesPreview.case3Title') }}</h3>
            <p class="text-sm font-medium text-brand/65">{{ t('casesPreview.case3Meta') }}</p>
          </div>
        </article>
      </div>

      <RouterLink
        to="/cases"
        class="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand shadow-lg shadow-black/20 transition hover:bg-white/90 lg:hidden"
      >
        {{ t('common.learnMore') }}
      </RouterLink>
    </div>
  </section>
</template>
