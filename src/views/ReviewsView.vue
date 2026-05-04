<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
// import { ElMessage } from 'element-plus'
import ReviewCard from '../components/reviews/ReviewCard.vue'
import { useLocalizedReviews } from '../composables/useLocalizedReviews.js'

const { t } = useI18n()
const allReviews = useLocalizedReviews()

const step = 3
const visible = ref(step)

const shown = computed(() => allReviews.value.slice(0, visible.value))
const hasMore = computed(() => visible.value < allReviews.value.length)

function loadMore() {
  visible.value = Math.min(visible.value + step, allReviews.value.length)
}

/*
 * Форма «Залишити відгук» — тимчасово вимкнена.
 * Щоб увімкнути: розкоментуй імпорт ElMessage, блок нижче, і прибери HTML-коментар навколо section у template.
 *
 * const form = ref({
 *   name: '',
 *   contact: '',
 *   text: '',
 * })
 *
 * function onSubmit() {
 *   if (!form.value.name.trim() || !form.value.contact.trim() || !form.value.text.trim()) {
 *     ElMessage.warning(t('reviews.formWarn'))
 *     return
 *   }
 *   ElMessage.success(t('reviews.formOk'))
 *   form.value = { name: '', contact: '', text: '' }
 * }
 */
</script>

<template>
  <main
    class="min-h-[50dvh] bg-white pb-20 pt-[max(2rem,env(safe-area-inset-top,0px))] lg:pb-28 lg:pt-12"
  >
    <div class="mx-auto max-w-6xl px-4 pb-4 lg:px-8">
      <RouterLink
        to="/"
        class="inline-flex items-center gap-2 text-sm font-semibold text-brand/55 transition hover:text-brand"
      >
        <span aria-hidden="true">←</span>
        {{ t('common.backHome') }}
      </RouterLink>

      <header class="mx-auto mt-8 max-w-3xl text-center sm:mt-10">
        <h1 class="font-heading text-3xl text-brand sm:text-4xl md:text-5xl">{{ t('reviews.pageTitle') }}</h1>
      </header>

      <p class="mx-auto mt-8 max-w-3xl text-pretty text-center text-base leading-relaxed text-brand/80 sm:mt-10 md:text-lg">
        {{ t('reviews.accent') }}
      </p>

      <div class="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">
        <ReviewCard v-for="item in shown" :key="item.handle + item.name" :item="item" />
      </div>

      <div v-if="hasMore" class="mt-8 flex justify-center sm:mt-10">
        <button
          type="button"
          class="rounded-full bg-surface px-8 py-3 text-sm font-semibold text-brand ring-1 ring-black/[0.08] transition hover:bg-brand hover:text-white"
          @click="loadMore"
        >
          {{ t('reviews.loadMore') }}
        </button>
      </div>

      <!--
        Форма «Залишити відгук» — тимчасово прихована.
        Щоб показати: видали обгортку HTML-коментаря навколо section і розкоментуй ElMessage + form + onSubmit у script.

        <section class="mx-auto mt-20 max-w-xl rounded-[1.75rem] border border-black/[0.08] bg-surface/60 p-8 shadow-inner md:p-10">
          <h2 class="font-heading text-center text-2xl text-brand md:text-3xl">{{ t('reviews.formTitle') }}</h2>
          <form class="mt-8 space-y-5" @submit.prevent="onSubmit">
            <div>
              <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand/55" for="rev-name">{{
                t('reviews.labelName')
              }}</label>
              <input
                id="rev-name"
                v-model="form.name"
                type="text"
                autocomplete="name"
                class="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-brand outline-none ring-brand/20 transition focus:ring-2"
                :placeholder="t('reviews.phName')"
              />
            </div>
            <div>
              <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand/55" for="rev-contact">{{
                t('reviews.labelContact')
              }}</label>
              <input
                id="rev-contact"
                v-model="form.contact"
                type="text"
                autocomplete="username"
                class="w-full rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-brand outline-none ring-brand/20 transition focus:ring-2"
                :placeholder="t('reviews.phContact')"
              />
            </div>
            <div>
              <label class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand/55" for="rev-text">{{
                t('reviews.labelText')
              }}</label>
              <textarea
                id="rev-text"
                v-model="form.text"
                rows="4"
                class="w-full resize-y rounded-xl border border-black/[0.08] bg-white px-4 py-3 text-sm text-brand outline-none ring-brand/20 transition focus:ring-2"
                :placeholder="t('reviews.phText')"
              />
            </div>
            <div class="pt-2">
              <button
                type="submit"
                class="w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand/90"
              >
                {{ t('reviews.submit') }}
              </button>
            </div>
          </form>
        </section>
      -->
    </div>
  </main>
</template>
