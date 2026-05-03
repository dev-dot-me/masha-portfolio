<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer id="contacts" class="border-t border-black/10 bg-brand text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8">
      <div class="space-y-4">
        <p class="font-heading text-3xl md:text-4xl">{{ t('footer.title') }}</p>
        <p class="max-w-md text-sm leading-relaxed text-white/75">
          {{ t('footer.lead') }}
        </p>
      </div>
      <div class="flex flex-col gap-4 text-sm md:text-base">
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
        >
          <span class="font-semibold text-white/90">{{ t('footer.instagram') }}</span>
          <span class="text-white/60">@maria_smm</span>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
        >
          <span class="font-semibold text-white/90">{{ t('footer.linkedin') }}</span>
          <span class="text-white/60">María · SMM Lead</span>
        </a>
        <a href="tel:+380501234567" class="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15">
          <span class="font-semibold text-white/90">{{ t('footer.phone') }}</span>
          <span class="mt-1 block text-white/70">+380 (50) 123‑45‑67</span>
        </a>
        <a href="mailto:hello@mariasmm.studio" class="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15">
          <span class="font-semibold text-white/90">{{ t('footer.email') }}</span>
          <span class="mt-1 block text-white/70 underline decoration-white/30">hello@mariasmm.studio</span>
        </a>
      </div>
    </div>
    <div class="border-t border-white/10 py-6 text-center text-xs text-white/45">
      © {{ year }} María · SMM. {{ t('footer.rights') }}
    </div>
  </footer>
</template>
