<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
// import icebergDiagram from '../../assets/iceberg-smm.png'

const { t, tm } = useI18n()

const steps = computed(() => {
  const raw = tm('process.steps')
  return Array.isArray(raw) ? raw : []
})
</script>

<template>
  <section id="how" class="scroll-mt-24 bg-surface px-4 py-16 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl space-y-12">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">{{ t('process.sectionKicker') }}</p>
        <h2 class="mt-3 font-heading text-3xl text-brand md:text-4xl">{{ t('process.title') }}</h2>
        <p class="mt-4 text-sm leading-relaxed text-brand/65 md:text-base">
          {{ t('process.intro') }}
        </p>
      </div>

      <!-- <figure class="mx-auto max-w-4xl">
        <img
          :src="icebergDiagram"
          :alt="t('process.icebergAlt')"
          class="w-full rounded-2xl border border-black/[0.06] bg-white object-contain shadow-sm ring-1 ring-black/[0.04]"
          width="1600"
          height="800"
          loading="lazy"
          decoding="async"
        />
      </figure> -->

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(step, idx) in steps"
          :key="idx"
          class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm"
        >
          <div class="flex items-center justify-between bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <span>{{ step.tag }}</span>
            <span class="rounded-full bg-white/15 px-3 py-1 text-[11px]">{{ String(idx + 1).padStart(2, '0') }}</span>
          </div>
          <div class="flex flex-1 flex-col gap-4 p-6">
            <h3 class="text-lg font-semibold leading-snug text-brand">{{ step.title }}</h3>
            <p class="text-sm leading-relaxed text-brand/70">{{ step.body }}</p>
            <div class="mt-auto flex justify-end">
              <span class="text-4xl font-black text-brand/[0.06]">{{ idx + 1 }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
