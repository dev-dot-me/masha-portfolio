<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-6 shadow-lg shadow-brand/[0.04] md:p-7"
  >
    <div class="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
      <div
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand/60 text-sm font-bold text-white shadow-inner md:h-16 md:w-16 md:text-base"
      >
        {{ item.initials }}
      </div>
      <div>
        <p class="text-xs font-bold uppercase tracking-[0.14em] text-brand">{{ item.name }}</p>
      </div>
    </div>
    <p class="mt-5 flex-1 text-sm leading-relaxed text-brand/75 md:text-[0.9375rem] md:leading-relaxed">
      {{ item.text }}
    </p>
  </article>
</template>
