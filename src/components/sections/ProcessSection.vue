<script setup>
const steps = [
  {
    title: 'Стратегічний бриф і дорожня карта',
    body:
      'Стартуємо з глибокого занурення у ваш продукт, ЦА й конкурентів. Отримуєте чіткий план на кілька місяців із KPI та пріоритетами.',
    tag: 'Старт',
  },
  {
    title: 'Усі матеріали — у зручній системі',
    body:
      'Контент-плани, дошки узгодження й файли тримаємо в одному робочому просторі (Notion/Drive за вашими правилами доступу).',
    tag: 'Процес',
  },
  {
    title: 'Календар публікацій і звітів',
    body:
      'На початку співпраці узгоджуємо ритм постів, рекламних ітерацій і звітності — щоб команда розуміла очікування заздалегідь.',
    tag: 'Ритм',
  },
  {
    title: 'Резервні канали звʼязку',
    body:
      'Тримайте ключові апдейти там, де вам комфортно: робочий чат, пошта та експорт документів у PDF для офлайн-доступу.',
    tag: 'Надійність',
  },
  {
    title: 'Шаблони та підказки до етапів',
    body:
      'Додаю шаблони постів, короткі саммарі зустрічей і чеклісти — можна швидко освіжити контекст без перегляду десятків файлів.',
    tag: 'Стандарти',
  },
  {
    title: 'Мережа перевірених партнерів',
    body:
      'За потреби підключаю таргетологів, продакшн або сторітелінг-команду з перевіреного кола — зберігаємо єдиний стандарт якості.',
    tag: 'Масштаб',
  },
]
</script>

<template>
  <section id="how" class="scroll-mt-24 bg-surface px-4 py-16 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-6xl space-y-12">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">Прозорий процес</p>
        <h2 class="mt-3 font-serif text-3xl text-brand md:text-4xl">Як я працюю</h2>
        <p class="mt-4 text-sm leading-relaxed text-brand/65 md:text-base">
          Шість порцій спокою для вашої команди: від першого брифу до масштабування результатів без хаосу в комунікації.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <article
          v-for="(step, idx) in steps"
          :key="step.title"
          class="relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm"
        >
          <div class="flex items-center justify-between bg-brand px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <span>{{ step.tag }}</span>
            <span class="rounded-full bg-white/15 px-3 py-1 text-[11px]">{{ String(idx + 1).padStart(2, '0') }}</span>
          </div>
          <div class="flex flex-1 flex-col gap-4 p-6">
            <h3 class="text-lg font-semibold leading-snug text-brand">{{ step.title }}</h3>
            <p class="text-sm leading-relaxed text-brand/70">{{ step.body }}</p>
            <div class="mt-auto flex justify-end">
              <span class="text-4xl font-black text-brand/[0.06]">{{ idx + 1 }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
