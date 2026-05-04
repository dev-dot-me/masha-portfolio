<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import projectImg from '../../assets/large-project.png'

const { t, tm } = useI18n()

const pills = computed(() => {
  const raw = tm('projectSpotlight.pills')
  return Array.isArray(raw) ? raw : []
})
</script>

<template>
  <section class="scroll-mt-24 px-4 py-14 lg:px-8 lg:py-20">
    <div class="mx-auto max-w-6xl space-y-8 lg:space-y-10">
      <header class="min-w-0 text-left">
        <h2
          class="break-words font-heading text-2xl font-semibold leading-[1.12] tracking-tight text-brand sm:text-3xl md:text-4xl lg:text-[2.65rem]"
        >
          {{ t('projectSpotlight.sectionHeading') }}
        </h2>
      </header>

      <div
        class="grid items-center gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-[74px] xl:gap-[82px]"
      >
        <div
          class="relative aspect-square w-[min(350px,100%)] max-w-[350px] shrink-0 overflow-hidden rounded-[1.75rem] bg-surface shadow-inner ring-1 ring-black/[0.05] max-lg:mx-auto lg:justify-self-end"
        >
          <img
            :src="projectImg"
            :alt="t('projectSpotlight.imageAlt')"
            class="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>

        <div class="min-w-0 space-y-6 text-left">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">{{ t('projectSpotlight.kicker') }}</p>
            <h3 class="break-words font-heading text-2xl leading-tight text-brand sm:text-3xl md:text-4xl">
              {{ t('projectSpotlight.title') }}
            </h3>
            <p class="text-sm font-medium leading-relaxed text-brand/70 md:text-base">
              {{ t('projectSpotlight.subtitle') }}
            </p>
          </div>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(pill, idx) in pills"
              :key="idx"
              role="presentation"
              class="rounded-full bg-surface px-4 py-2 text-xs font-semibold text-brand/80 ring-1 ring-black/[0.06]"
            >
              {{ pill }}
            </span>
          </div>

          <div class="space-y-3 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand/45">{{ t('projectSpotlight.taskTitle') }}</p>
            <p class="text-sm leading-relaxed text-brand/75">
              {{ t('projectSpotlight.taskBody') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

