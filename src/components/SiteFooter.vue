<script setup>
import { onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import mapPreview from '../assets/google-maps.png'

const { t, locale } = useI18n()
const year = new Date().getFullYear()

/** Контакт розробника сайту (окремо від контактів клієнта) */
const SITE_DEV = {
  email: 'sergiykundys@gmail.com',
  whatsappHref: 'https://wa.me/34610721230',
  linkedinHref: 'https://www.linkedin.com/in/serhii-kundys-919138188/',
}

const contactStackEl = useTemplateRef('contactStack')
const mapMaxHeightPx = ref(360)

function measureContactStack() {
  const el = contactStackEl.value
  if (!el) return
  const h = el.offsetHeight
  if (h > 0) mapMaxHeightPx.value = h
}

let resizeObserver = null

onMounted(() => {
  measureContactStack()
  const el = contactStackEl.value
  if (el && typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(() => measureContactStack())
    resizeObserver.observe(el)
  }
  window.addEventListener('resize', measureContactStack)
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', measureContactStack)
})

watch(locale, () => {
  requestAnimationFrame(() => measureContactStack())
})
</script>

<template>
  <footer id="contacts" class="border-t border-black/10 bg-brand text-white">
    <div
      class="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(260px,340px)] lg:items-start lg:gap-10 xl:gap-12 lg:px-8"
    >
      <div class="space-y-4">
        <p class="font-heading text-3xl md:text-4xl">{{ t('footer.title') }}</p>
        <p class="max-w-md text-sm leading-relaxed text-white/75">
          {{ t('footer.lead') }}
        </p>
      </div>

      <div
        ref="contactStack"
        class="flex max-w-md flex-col gap-4 text-sm md:max-w-none md:text-base"
      >
        <a
          href="https://www.instagram.com/vizora.smm?igsh=MWZhb3ZxeWw5bm9oMw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
        >
          <span class="font-semibold text-white/90">{{ t('footer.instagram') }}</span>
          <span class="text-white/60">@vizora.smm</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mariia-kushnir-b4661a386"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15"
        >
          <span class="font-semibold text-white/90">{{ t('footer.linkedin') }}</span>
          <span class="text-white/60">Mariia Kushnir</span>
        </a>
        <a href="tel:+34641021462" class="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15">
          <span class="font-semibold text-white/90">{{ t('footer.phone') }}</span>
          <span class="mt-1 block text-white/70">+34 641 021 462</span>
        </a>
        <a href="mailto:mariakusnir46@gmail.com" class="rounded-2xl bg-white/10 px-4 py-3 transition hover:bg-white/15">
          <span class="font-semibold text-white/90">{{ t('footer.email') }}</span>
          <span class="mt-1 block text-white/70 underline decoration-white/30">mariakusnir46@gmail.com</span>
        </a>
      </div>

      <div class="flex justify-center lg:justify-end">
        <div
          class="w-full max-w-sm overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 shadow-lg shadow-black/20 lg:max-w-none"
          :style="{ height: `${mapMaxHeightPx}px`, maxHeight: `${mapMaxHeightPx}px` }"
        >
          <img
            :src="mapPreview"
            alt=""
            class="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 bg-black/[0.12]">
      <div class="mx-auto max-w-6xl px-4 py-5 text-center lg:px-8">
        <p class="text-xs leading-relaxed text-white/55 sm:text-[13px]">
          {{ t('footer.devIntro') }}
        </p>
        <div
          class="mt-3 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-xs text-white/65 sm:gap-x-2"
        >
          <a
            :href="`mailto:${SITE_DEV.email}`"
            class="rounded-full px-3 py-1.5 font-medium text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
          >
            {{ t('footer.devEmail') }}
          </a>
          <span class="hidden text-white/25 sm:inline" aria-hidden="true">·</span>
          <a
            :href="SITE_DEV.whatsappHref"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full px-3 py-1.5 font-medium text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
          >
            {{ t('footer.devWhatsApp') }}
          </a>
          <span class="hidden text-white/25 sm:inline" aria-hidden="true">·</span>
          <a
            :href="SITE_DEV.linkedinHref"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full px-3 py-1.5 font-medium text-white/80 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
          >
            {{ t('footer.devLinkedIn') }}
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-6 text-center text-xs text-white/45">
      © {{ year }} María · SMM. {{ t('footer.rights') }}
    </div>
  </footer>
</template>
