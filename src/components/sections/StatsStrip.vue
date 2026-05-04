<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const stats = computed(() => {
  const raw = tm('stats.lines')
  return Array.isArray(raw) ? raw : []
})
</script>

<template>
  <section class="scroll-mt-24 px-4 py-12 lg:px-8">
    <div class="mx-auto grid max-w-6xl auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(line, idx) in stats"
        :key="idx"
        role="presentation"
        class="flex min-h-[6.75rem] flex-col items-center justify-center rounded-2xl bg-brand px-4 py-5 text-pretty text-center text-sm font-semibold uppercase leading-snug tracking-wide text-white shadow-lg shadow-brand/25 ring-1 ring-white/10 sm:min-h-[7.25rem] sm:px-5 sm:py-6"
      >
        {{ line }}
      </div>
    </div>
  </section>
</template>
