<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const drawer = ref(false)

const links = [
  { label: 'Про мене', hash: '#about' },
  { label: 'Як працюю', hash: '#how' },
  { label: 'Кейси', hash: '#cases' },
  { label: 'Відгуки', hash: '#reviews' },
  { label: 'Блог', hash: '#blog' },
  { label: 'Контакти', hash: '#contacts' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:py-4 lg:px-8">
      <RouterLink to="/" class="group flex items-center gap-2" @click="drawer = false">
        <span class="font-serif text-xl tracking-tight text-brand md:text-2xl">María</span>
        <span class="hidden rounded-full bg-surface px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand/80 sm:inline"
          >SMM</span
        >
      </RouterLink>

      <nav class="hidden items-center gap-1 lg:flex">
        <RouterLink
          v-for="item in links"
          :key="item.hash"
          :to="{ path: '/', hash: item.hash }"
          class="rounded-full px-3 py-2 text-sm font-medium text-brand/70 transition hover:bg-surface hover:text-brand"
          :class="{ 'bg-surface text-brand': route.path === '/' && route.hash === item.hash }"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          to="/cases"
          class="ml-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand/90"
        >
          Детальніше про кейси
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2 lg:hidden">
        <RouterLink
          to="/cases"
          class="rounded-full bg-brand px-3 py-2 text-xs font-semibold text-white"
          @click="drawer = false"
        >
          Кейси
        </RouterLink>
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-full border border-brand/10 bg-white text-brand shadow-sm"
          aria-label="Меню"
          @click="drawer = true"
        >
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <el-drawer v-model="drawer" direction="rtl" size="min(100%, 320px)" title="Навігація">
      <div class="flex flex-col gap-1 pt-2">
        <RouterLink
          v-for="item in links"
          :key="item.hash"
          :to="{ path: '/', hash: item.hash }"
          class="rounded-xl px-3 py-3 text-base font-medium text-brand hover:bg-surface"
          @click="drawer = false"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink
          to="/cases"
          class="mt-4 rounded-xl bg-brand px-3 py-3 text-center font-semibold text-white"
          @click="drawer = false"
        >
          Сторінка кейсів
        </RouterLink>
      </div>
    </el-drawer>
  </header>
</template>
