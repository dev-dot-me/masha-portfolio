<script setup>
import { computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { getHowWorkPage } from '../data/howWorkPageData.js'

const { locale } = useI18n()

const page = computed(() => getHowWorkPage(locale.value))

watchEffect(() => {
  if (typeof document !== 'undefined') {
    document.title = page.value.documentTitle
  }
})
</script>

<template>
  <main class="overflow-x-hidden bg-white">
    <!-- Hero -->
    <section class="relative border-b border-black/[0.04] bg-gradient-to-b from-white via-white to-brand/[0.03] pb-14 pt-8 lg:pb-20 lg:pt-12">
      <div
        class="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-brand/[0.07] blur-3xl"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-brand/[0.05] blur-2xl"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-sm font-semibold text-brand/60 shadow-sm ring-1 ring-black/[0.06] backdrop-blur-sm transition hover:bg-white hover:text-brand"
        >
          <span aria-hidden="true" class="text-base leading-none">←</span>
          {{ page.backHome }}
        </RouterLink>
        <header class="mt-10 max-w-3xl lg:mt-12">
          <h1 class="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-brand md:text-5xl lg:text-[3.25rem]">
            {{ page.pageTitle }}
          </h1>
          <div class="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-brand/50 to-brand/15" />
        </header>
      </div>
    </section>

    <!-- Stages: editorial list (/01 …) -->
    <section
      class="scroll-mt-24 border-b border-black/[0.06] bg-[#f5f2ef] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div class="mx-auto max-w-6xl">
        <header class="mx-auto max-w-6xl text-center">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand/50">
            {{ page.stagesSectionTitle }}
          </p>
          <h2
            class="font-heading mt-5 text-4xl font-bold uppercase leading-tight tracking-[0.08em] text-brand md:mt-6 md:text-5xl lg:mt-7 lg:text-[3rem]"
          >
            {{ page.stagesHeading }}
          </h2>
        </header>

        <ol
          class="mx-auto mt-10 max-w-4xl list-none border-t border-brand/15 p-0 sm:mt-12 md:grid md:max-w-6xl md:grid-cols-2 md:gap-x-10 md:gap-y-0 lg:mt-14 lg:gap-x-14"
        >
          <li
            v-for="(step, i) in page.stages"
            :key="i"
            class="flex flex-col gap-4 border-b border-brand/15 py-7 last:border-b-0 sm:flex-row sm:items-start sm:gap-8 sm:py-8 md:gap-6 md:py-7 md:[&:nth-last-child(1):nth-child(odd)]:col-span-2 md:[&:nth-last-child(1):nth-child(odd)]:max-w-2xl md:[&:nth-last-child(1):nth-child(odd)]:justify-self-start lg:gap-8 lg:py-8"
            :aria-label="`${i + 1}. ${step}`"
          >
            <span
              class="font-heading shrink-0 text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold tabular-nums leading-[0.85] tracking-tight text-brand"
              aria-hidden="true"
            >
              /{{ String(i + 1).padStart(2, '0') }}
            </span>
            <p
              class="min-w-0 flex-1 text-pretty text-sm font-semibold uppercase leading-snug tracking-[0.06em] text-brand/90 sm:pt-1.5 sm:text-base md:leading-relaxed md:tracking-[0.08em]"
            >
              {{ step }}
            </p>
          </li>
        </ol>

        <div
          class="mx-auto mt-10 max-w-4xl rounded-xl border border-brand/10 bg-white/85 p-6 shadow-sm ring-1 ring-black/[0.03] sm:mt-14 sm:p-8 md:max-w-6xl"
        >
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-brand">{{ page.launchLabel }}</p>
          <p class="mt-3 text-base leading-relaxed text-brand/75 sm:text-[1.05rem]">
            {{ page.launchText }}
          </p>
        </div>
      </div>
    </section>

    <!-- Tariffs -->
    <section class="relative bg-brand px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.12),transparent)]"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-6xl">
        <div class="text-center">
          <h2
            class="font-heading text-4xl font-bold uppercase leading-tight tracking-[0.08em] text-white md:text-5xl lg:text-[3rem]"
          >
            {{ page.tariffsSectionTitle }}
          </h2>
        </div>
        <div class="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          <article
            v-for="tariff in page.tariffs"
            :key="tariff.id"
            class="relative flex flex-col overflow-hidden rounded-2xl border bg-white/[0.06] shadow-xl shadow-black/25 backdrop-blur-md transition-transform duration-200 sm:rounded-[1.35rem]"
            :class="
              tariff.id === 'middle'
                ? 'border-sky-400/35 ring-2 ring-sky-400/20 lg:scale-[1.02] lg:shadow-2xl lg:shadow-sky-950/40'
                : 'border-white/10 ring-1 ring-white/[0.07]'
            "
          >
            <div
              class="h-1 w-full shrink-0"
              :class="{
                'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400': tariff.id === 'basic',
                'bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-500': tariff.id === 'middle',
                'bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500': tariff.id === 'pro',
              }"
              aria-hidden="true"
            />
            <div class="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-8">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <p class="text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                    {{ tariff.tierKicker }}
                  </p>
                  <h3 class="mt-1 font-heading text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
                    {{ tariff.planName }}
                  </h3>
                </div>
                <span
                  v-if="tariff.id === 'middle'"
                  class="shrink-0 rounded-full border border-sky-300/35 bg-sky-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-sky-100"
                >
                  {{ page.popularPlanLabel }}
                </span>
              </div>

              <div class="mt-6 border-t border-white/10 pt-5">
                <div class="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                  <span
                    class="font-heading text-3xl font-bold tabular-nums tracking-tight text-white sm:text-[2.15rem]"
                  >
                    {{ tariff.priceAmount }}
                  </span>
                  <span class="text-sm font-bold text-white/50">{{ tariff.billingNote }}</span>
                </div>
              </div>

              <p class="mt-4 text-sm font-semibold text-white/95">{{ tariff.shootsLine }}</p>
              <p class="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                {{ tariff.monthlyTitle }}
              </p>
              <ul class="mt-2 space-y-1 text-sm leading-relaxed">
                <li v-for="(b, bi) in tariff.monthlyBullets" :key="bi" class="font-bold text-white">
                  — {{ b }}
                </li>
              </ul>
              <p class="mt-6 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
                {{ tariff.includedLabel }}
              </p>
              <ul class="mt-3 flex-1 space-y-2 text-sm leading-relaxed">
                <li v-for="(line, li) in tariff.includedHighlight" :key="`h-${li}`" class="font-bold text-sky-200">
                  — {{ line }}
                </li>
                <li v-for="(line, li) in tariff.includedBase" :key="`b-${li}`" class="text-white/90">
                  — {{ line }}
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Bonuses -->
    <section class="bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-6xl">
        <h2 class="text-center font-heading text-xl text-brand md:text-2xl lg:text-[1.65rem]">
          {{ page.bonusesTitle }}
        </h2>
        <ul
          class="mx-auto mt-10 grid max-w-4xl gap-3 sm:mt-12 sm:grid-cols-1 md:grid-cols-2 md:gap-x-8 md:gap-y-3"
        >
          <li
            v-for="(b, i) in page.bonuses"
            :key="i"
            class="flex gap-3 rounded-xl border border-black/[0.05] bg-white/80 px-4 py-3 text-pretty text-sm leading-relaxed text-brand/80 shadow-sm ring-1 ring-black/[0.04] md:text-base"
          >
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/40" aria-hidden="true" />
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Important -->
    <section class="border-y border-black/[0.06] bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand/45">{{ page.importantTitle }}</p>
        <ul class="mt-8 space-y-4 text-base leading-relaxed text-brand/80">
          <li v-for="(item, i) in page.important" :key="i" class="flex gap-4 text-pretty">
            <span
              class="mt-2.5 h-2 w-2 shrink-0 rounded-sm bg-gradient-to-br from-brand/50 to-brand/25 shadow-sm ring-1 ring-black/[0.06]"
              aria-hidden="true"
            />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Guarantees -->
    <section class="relative bg-brand px-4 pb-20 pt-16 text-white sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_100%_0%,rgba(255,255,255,0.08),transparent)]"
        aria-hidden="true"
      />
      <div class="relative mx-auto max-w-3xl">
        <h2 class="font-heading text-2xl md:text-3xl">{{ page.guaranteesTitle }}</h2>
        <p class="mt-6 text-base leading-relaxed text-white/88">
          {{ page.guaranteesLead }}
        </p>
        <p class="mt-5 text-base leading-relaxed text-white/88">
          {{ page.guaranteesProcess }}
        </p>
        <ul class="mt-8 space-y-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-base font-semibold leading-relaxed text-white sm:p-6">
          <li v-for="(opt, i) in page.guaranteesOptions" :key="i" class="flex gap-3">
            <span class="shrink-0 font-semibold text-sky-200" aria-hidden="true">—</span>
            <span>{{ opt }}</span>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
