<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white antialiased text-brand">
    <SiteHeader />
    <router-view />
    <SiteFooter />
  </div>
</template>
