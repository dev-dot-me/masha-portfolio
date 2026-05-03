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
    <div class="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(line, idx) in stats"
        :key="idx"
        role="presentation"
        class="rounded-2xl bg-surface px-5 py-6 text-center text-sm font-semibold leading-snug text-brand shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-black/[0.04]"
      >
        {{ line }}
      </div>
    </div>
  </section>
</template>
