<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { persistLocale } from '../i18n/index.js'
import flagEs from '../assets/flags/es.png'
import flagGb from '../assets/flags/gb.svg'
import flagUa from '../assets/flags/ua.svg'

const { t, locale } = useI18n()
const route = useRoute()
const drawer = ref(false)

/** SVG-прапори (emoji на Windows часто не показуються) + коди мов */
const localeOptions = [
  { code: 'es', icon: flagEs },
  { code: 'en', icon: flagGb },
  { code: 'ua', icon: flagUa },
]

const currentLocaleOption = computed(
  () => localeOptions.find((o) => o.code === locale.value) ?? localeOptions[0],
)

const links = computed(() => [
  { id: 'about', label: t('nav.about'), to: { path: '/', hash: '#about' } },
  { id: 'how', label: t('nav.how'), to: { path: '/', hash: '#how' } },
  { id: 'projects', label: t('nav.projects'), to: '/projects' },
  { id: 'reviews', label: t('nav.reviews'), to: '/reviews' },
  { id: 'blog', label: t('nav.blog'), to: { path: '/', hash: '#blog' } },
  { id: 'contacts', label: t('nav.contacts'), to: { path: '/', hash: '#contacts' } },
])

function isNavLinkActive(to) {
  if (typeof to === 'string') {
    return route.path === to
  }
  const path = to.path ?? '/'
  if (route.path !== path) return false
  const hash = to.hash ?? ''
  return (route.hash || '') === hash
}

function setLocale(code) {
  if (code !== 'es' && code !== 'en' && code !== 'ua') return
  locale.value = code
  persistLocale(code)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:py-4 lg:px-8">
      <RouterLink to="/" class="group flex min-w-0 shrink items-center gap-2" @click="drawer = false">
        <span class="font-heading text-xl tracking-tight text-brand md:text-2xl">Mariia Kushnir</span>
        <span
          class="hidden rounded-full bg-surface px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand/80 sm:inline"
          >SMM</span
        >
      </RouterLink>

      <nav class="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex xl:gap-1">
        <RouterLink
          v-for="item in links"
          :key="item.id"
          :to="item.to"
          class="rounded-full px-2.5 py-2 text-sm font-medium text-brand/70 transition hover:bg-surface hover:text-brand xl:px-3"
          :class="{ 'bg-surface text-brand': isNavLinkActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="flex shrink-0 items-center gap-2 md:gap-3">
        <el-dropdown trigger="click" placement="bottom-end" @command="setLocale">
          <button
            type="button"
            class="lang-trigger inline-flex items-center gap-2 rounded-full bg-surface px-3 py-2 text-xs font-bold uppercase tracking-wide text-brand ring-1 ring-black/[0.08] transition hover:bg-brand/[0.04] sm:text-sm"
            :aria-label="t('header.langGroup')"
          >
            <img
              :src="currentLocaleOption.icon"
              alt=""
              width="22"
              height="15"
              class="shrink-0 rounded-[2px] object-cover ring-1 ring-black/[0.12]"
              decoding="async"
            />
            <span>{{ currentLocaleOption.code.toUpperCase() }}</span>
            <svg class="h-3.5 w-3.5 shrink-0 text-brand/45" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <template #dropdown>
            <el-dropdown-menu class="lang-dropdown-menu">
              <el-dropdown-item
                v-for="opt in localeOptions"
                :key="opt.code"
                :command="opt.code"
                :class="{ 'is-active-locale': locale === opt.code }"
              >
                <span class="flex items-center gap-2.5 py-0.5">
                  <img
                    :src="opt.icon"
                    alt=""
                    width="22"
                    height="15"
                    class="shrink-0 rounded-[2px] object-cover ring-1 ring-black/[0.12]"
                    decoding="async"
                  />
                  <span class="font-heading text-sm font-bold uppercase tracking-wide">{{ opt.code.toUpperCase() }}</span>
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <div class="flex items-center xl:hidden">
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-brand/10 bg-white text-brand shadow-sm"
            :aria-label="t('header.menu')"
            @click="drawer = true"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <el-drawer
      v-model="drawer"
      direction="rtl"
      size="min(100%, 320px)"
      :with-header="false"
      append-to-body
      class="mobile-nav-drawer"
    >
      <div
        class="flex h-full min-h-0 flex-col px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-[max(1rem,env(safe-area-inset-top))]"
      >
        <div class="mb-6 flex shrink-0 items-center justify-between gap-3">
          <span class="text-lg font-semibold leading-normal text-brand">{{ t('header.navTitle') }}</span>
          <button
            type="button"
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/15 bg-surface text-brand transition hover:bg-brand/5"
            :aria-label="t('header.closeMenu')"
            @click="drawer = false"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav class="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
          <RouterLink
            v-for="item in links"
            :key="item.id"
            :to="item.to"
            class="rounded-xl px-3 py-3 text-base font-medium leading-snug text-brand hover:bg-surface"
            :class="{ 'bg-surface text-brand': isNavLinkActive(item.to) }"
            @click="drawer = false"
          >
            {{ item.label }}
          </RouterLink>
        </nav>
      </div>
    </el-drawer>
  </header>
</template>

<style scoped>
.mobile-nav-drawer :deep(.el-drawer__body) {
  padding: 0;
  overflow-x: hidden;
}

.lang-dropdown-menu :deep(.el-dropdown-menu__item) {
  padding: 0.5rem 1rem;
}

.lang-dropdown-menu :deep(.el-dropdown-menu__item.is-active-locale) {
  background-color: rgba(14, 32, 52, 0.06);
  color: #0e2034;
  font-weight: 600;
}
</style>
