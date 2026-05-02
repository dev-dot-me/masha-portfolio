<script setup>
import projectImg from '../../assets/large-project.png'

const pills = ['30 000€ прибуток щомісяця', '×20 ROAS на рекламу', '1 500€ бюджет на рекламу', '6 міс. до стабільного результату']

const task =
  'Клієнт — виробник бруківки для подвірʼя — у висококонкурентній ніші без сильної присутності в соцмережах. Потрібно було вибудувати системний SMM для двох сегментів: приватних замовників (B2C) та будівельних компаній і дизайнерів (B2B).'
</script>

<template>
  <section class="scroll-mt-24 px-4 py-14 lg:px-8 lg:py-20">
    <!-- Відстань фото–текст: було gap-6 (24px) / gap-8 (32px); +50px → 74px / 82px -->
    <div
      class="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-[74px] xl:gap-[82px]"
    >
      <!-- Колонка під ширину фото + вирівнювання впритул до тексту (без «пустої» смуги між фото й текстом) -->
      <div
        class="relative aspect-square w-[min(350px,100%)] max-w-[350px] shrink-0 overflow-hidden rounded-[1.75rem] bg-surface shadow-inner ring-1 ring-black/[0.05] max-lg:mx-auto lg:justify-self-end"
      >
        <img
          :src="projectImg"
          alt="Кейс: виробник бруківки для подвір'я"
          class="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div class="space-y-6">
        <div class="space-y-3">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">Обраний проєкт</p>
          <h2 class="font-serif text-3xl leading-tight text-brand md:text-4xl">
            Виробник бруківки для подвірʼя
          </h2>
          <p class="text-sm font-medium leading-relaxed text-brand/70 md:text-base">
            B2B + B2C стратегія · 2+ роки співпраці · Таргетована реклама + SMM
          </p>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="pill in pills"
            :key="pill"
            role="presentation"
            class="rounded-full bg-surface px-4 py-2 text-xs font-semibold text-brand/80 ring-1 ring-black/[0.06]"
          >
            {{ pill }}
          </span>
        </div>

        <div class="space-y-3 rounded-2xl border border-black/[0.06] bg-white p-6 shadow-sm">
          <p class="text-xs font-bold uppercase tracking-[0.2em] text-brand/45">Задача</p>
          <p class="text-sm leading-relaxed text-brand/75">
            {{ task }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
