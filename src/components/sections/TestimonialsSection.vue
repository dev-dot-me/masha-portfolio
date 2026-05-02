<script setup>
const items = [
  {
    initials: 'ОО',
    name: 'Оля Олексин',
    handle: '@olia_oleksyn',
    text:
      'Усе структуровано, чітко, багато інформації. Загалом це мій другий курс від Тані і мені дуже подобається ваш підхід, кількість матеріалу та його подача. Насправді стільки інформації, що інколи були думки «Боже, як насичено! Чому це не розділили на два потоки?» — це найкращий показник якості.',
  },
  {
    initials: 'СЛ',
    name: 'Світлана Лотоцька',
    handle: '@svitlana.lo',
    text:
      'Повторюватиму мільйон разів: люди й комʼюніті — найдорожче, що я отримала і найважливіше. Ви зібрали чудових людей і провели крутий people management. Дякую за те, що ніхто не лишився без відповіді, не засумував і за те, що обʼєднали нас спільною ідеєю.',
  },
  {
    initials: 'СФ',
    name: 'Софія Фучило',
    handle: '@s.o.n.aa',
    text:
      'Цей курс — як ковток свіжого повітря. Я працюю в SMM і перед цим уже була на програмі Тані — це маст-хев для системності. На середині зрозуміла, що наставництво відгукується навіть більше. Дуже кайфувала від уроків і сумно, що все закінчилося — ваші продукти затягують :) Дякую всім кураторам та Тані за топовий продукт!',
  },
]
</script>

<template>
  <section id="reviews" class="scroll-mt-24 px-4 py-16 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl space-y-10">
      <div class="text-center">
        <h2 class="font-serif text-3xl tracking-wide text-brand md:text-[2.35rem]">Відгуки</h2>
        <p class="mt-3 text-sm text-brand/55">Реальні історії людей, які пройшли навчання й робочі процеси у подібному темпі та стандарті якості.</p>
      </div>

      <div class="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
        <article
          v-for="item in items"
          :key="item.handle"
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
              <p class="mt-1 text-sm font-semibold text-brand/55 underline decoration-brand/25">{{ item.handle }}</p>
            </div>
          </div>
          <p class="mt-5 flex-1 text-sm leading-relaxed text-brand/75 md:text-[0.9375rem] md:leading-relaxed">
            {{ item.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
