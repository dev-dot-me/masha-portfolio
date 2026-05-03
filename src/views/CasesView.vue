<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import heroImg from '../assets/case1.png'

const { tm } = useI18n()

const pavers = computed(() => tm('casesPage.pavers') || {})

const metrics = computed(() => {
  const labels = pavers.value.metricLabels
  const values = pavers.value.metricValues
  if (!Array.isArray(labels) || !Array.isArray(values)) return []
  return labels.map((label, i) => ({ label, value: values[i] ?? '' }))
})

const deliverables = computed(() => {
  const d = pavers.value.deliverables
  return Array.isArray(d) ? d : []
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
        {{ pavers.backHome }}
      </RouterLink>

      <section class="mt-10 grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center lg:gap-12">
        <div
          class="mx-auto inline-block w-fit max-w-full shrink-0 overflow-hidden rounded-[1.75rem] bg-surface shadow-xl shadow-brand/10 ring-1 ring-black/[0.06] lg:mx-0"
        >
          <img
            :src="heroImg"
            :alt="pavers.imageAlt"
            class="mx-auto block h-auto max-h-[400px] w-auto max-w-full object-contain object-center align-middle"
            loading="lazy"
          />
        </div>

        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand/55 ring-1 ring-black/[0.05]">
            {{ pavers.heroBadge }}
          </div>
          <div class="space-y-3">
            <h1 class="font-heading text-4xl leading-tight text-brand md:text-5xl">
              {{ pavers.title }}
            </h1>
            <p class="text-base font-medium leading-relaxed text-brand/70 md:text-lg">
              {{ pavers.subtitle }}
            </p>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div v-for="m in metrics" :key="m.label" class="rounded-2xl bg-brand px-4 py-4 text-white shadow-lg shadow-brand/25">
              <p class="text-xs uppercase tracking-[0.14em] text-white/65">{{ m.label }}</p>
              <p class="mt-2 text-2xl font-semibold">{{ m.value }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-16 grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-14">
        <div class="rounded-[1.75rem] bg-surface p-8 ring-1 ring-black/[0.05]">
          <p class="text-xs font-bold uppercase tracking-[0.22em] text-brand/45">{{ pavers.taskTitle }}</p>
          <p class="mt-5 text-base leading-relaxed text-brand/75">
            {{ pavers.taskBody }}
          </p>
        </div>

        <div class="space-y-6 rounded-[1.75rem] border border-black/[0.06] bg-white p-8 shadow-[0_22px_70px_-48px_rgba(14,32,52,0.55)]">
          <div class="flex items-center justify-between gap-4">
            <h2 class="font-heading text-2xl text-brand md:text-3xl">{{ pavers.doneTitle }}</h2>
            <span class="hidden rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand/55 md:inline-flex">
              {{ pavers.donePill }}
            </span>
          </div>

          <ol class="space-y-6">
            <li v-for="(item, idx) in deliverables" :key="idx" class="flex gap-4">
              <span class="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-brand text-sm font-bold text-white">
                {{ idx + 1 }}
              </span>
              <div class="space-y-2">
                <h3 class="text-lg font-semibold text-brand">{{ item.title }}</h3>
                <p class="text-sm leading-relaxed text-brand/70">{{ item.body }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="mt-16 rounded-[1.75rem] bg-brand px-6 py-10 text-white lg:px-10 lg:py-12">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{{ pavers.ctaKicker }}</p>
            <p class="font-heading text-2xl md:text-3xl">{{ pavers.ctaTitle }}</p>
            <p class="max-w-xl text-sm leading-relaxed text-white/75">
              {{ pavers.ctaBody }}
            </p>
          </div>
          <RouterLink
            to="/"
            class="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow-xl shadow-black/25 transition hover:bg-white/90"
          >
            {{ pavers.ctaButton }}
          </RouterLink>
        </div>
      </section>
    </div>
  </main>
</template>
