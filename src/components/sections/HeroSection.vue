<script setup>
import authorPhoto from '../../assets/author-photo1.png'

const features = [
  'Стратегія та позиціонування бренду',
  'Контент, дизайн та впізнаваний візуал',
  'Таргетована реклама й супровід воронок',
  'AI-візуал і щомісячна аналітика',
]

function scrollToContacts() {
  document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="hero" class="scroll-mt-24 px-4 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-12">
    <div class="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-surface p-6 shadow-[0_24px_80px_-40px_rgba(14,32,52,0.35)] md:p-10 lg:p-12 lg:pb-14">
      <!-- soft waves -->
      <div
        class="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-white/70 blur-3xl"
      />
      <div
        class="pointer-events-none absolute -bottom-32 left-10 h-[380px] w-[380px] rounded-full bg-white/55 blur-3xl"
      />
      <div
        class="pointer-events-none absolute inset-y-16 right-1/3 w-[120%] -skew-y-6 bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70"
      />

      <div class="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-14">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand/55 shadow-sm ring-1 ring-black/5 backdrop-blur">
            <span class="h-1.5 w-1.5 rounded-full bg-brand" />
            SMM під ключ
          </div>

          <div class="space-y-4">
            <h1 class="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-brand md:text-4xl lg:text-[2.65rem]">
              Перетворюю соцмережі на
              <span class="bg-gradient-to-r from-brand to-brand/55 bg-clip-text font-serif text-transparent">
                інструмент продажів</span
              >
            </h1>
            <p class="max-w-xl text-pretty text-base leading-relaxed text-brand/75 md:text-lg">
              Я Марія — SMM-спеціаліст. Роблю акаунти продаючими, впізнаваними та такими, що привертають увагу з першої секунди. Стратегія, контент, дизайн, реклама та AI-візуал — все під ключ.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div
              v-for="item in features"
              :key="item"
              class="flex gap-3 rounded-2xl bg-white/85 px-4 py-3 text-sm font-medium text-brand/85 shadow-sm ring-1 ring-black/[0.04] backdrop-blur"
            >
              <span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                ✓
              </span>
              <span>{{ item }}</span>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              class="group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand/90 hover:shadow-xl"
              @click="scrollToContacts"
            >
              Обговорити проект
              <span
                class="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition group-hover:bg-white/25"
              >
                <svg class="h-4 w-4 -translate-y-px translate-x-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </button>
            <p class="max-w-xs text-xs leading-relaxed text-brand/55">
              Перший крок — короткий бриф і розуміння вашої ніші. Далі форматуємо стратегію під ваші цілі та ресурси.
            </p>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div class="relative overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/[0.06]">
            <img
              :src="authorPhoto"
              alt="Марія — SMM-спеціаліст"
              class="mx-auto block h-auto w-full max-h-[min(520px,70vh)] object-contain object-bottom px-4 pt-8 md:max-h-[560px]"
              loading="eager"
              decoding="async"
            />
          </div>

          <div
            class="absolute -bottom-4 left-4 flex max-w-[260px] items-start gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl shadow-brand/10 backdrop-blur-md md:left-8 md:bottom-2"
          >
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </span>
            <div class="space-y-1 text-xs md:text-sm">
              <p class="font-semibold text-brand">Перший міні-розбір</p>
              <p class="leading-snug text-brand/65">
                Пропозиція для нових партнерів: короткий аудит профілю й три точки росту без зобовʼязань.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
