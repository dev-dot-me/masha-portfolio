<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const { locale } = useI18n()

watch(
  locale,
  (code) => {
    document.documentElement.lang = code === 'ua' ? 'uk' : code
  },
  { immediate: true },
)
</script>

<template>
  <div class="min-h-screen bg-white antialiased text-brand">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>
