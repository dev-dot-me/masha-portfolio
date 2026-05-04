<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  /** @type {{ src: string, alt?: string }[]} */
  slides: {
    type: Array,
    required: true,
  },
})

const index = ref(0)
const count = computed(() => props.slides.length)

function go(delta) {
  const n = count.value
  if (n === 0) return
  index.value = (index.value + delta + n) % n
}
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-[1.75rem] ring-1 ring-black/[0.06] shadow-lg shadow-brand/[0.06]">
    <div class="relative px-2 pt-3 pb-2 sm:px-3 sm:pt-4">
      <div class="flex w-full items-center justify-center">
        <img
          v-for="(slide, i) in slides"
          v-show="i === index"
          :key="i"
          :src="slide.src"
          :alt="slide.alt ?? ''"
          class="block max-h-[min(72vh,820px)] w-auto max-w-full object-contain object-center"
          loading="lazy"
          decoding="async"
        />
      </div>

      <button
        type="button"
        class="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-brand shadow-md ring-1 ring-black/[0.08] transition hover:bg-white sm:left-3 sm:h-11 sm:w-11"
        aria-label="Previous image"
        @click="go(-1)"
      >
        ‹
      </button>
      <button
        type="button"
        class="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-lg text-brand shadow-md ring-1 ring-black/[0.08] transition hover:bg-white sm:right-3 sm:h-11 sm:w-11"
        aria-label="Next image"
        @click="go(1)"
      >
        ›
      </button>
    </div>

    <div
      class="flex justify-center gap-1.5 border-t border-black/[0.06] bg-black/[0.02] px-2 py-2.5 sm:py-3"
      role="tablist"
      aria-label="Carousel slides"
    >
      <button
        v-for="(_, i) in slides"
        :key="i"
        type="button"
        class="h-2 rounded-full transition sm:h-2.5"
        :class="i === index ? 'w-6 bg-brand/80' : 'w-2 bg-brand/25 hover:bg-brand/40'"
        :aria-label="`Slide ${i + 1} of ${count}`"
        :aria-current="i === index ? 'true' : undefined"
        @click="index = i"
      />
    </div>
  </div>
</template>
