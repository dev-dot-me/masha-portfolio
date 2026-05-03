import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { reviewsMeta } from '../data/reviewsMeta.js'

export function useLocalizedReviews() {
  const { t } = useI18n()
  return computed(() =>
    reviewsMeta.map((meta, i) => ({
      ...meta,
      name: t(`reviews.items.${i}.name`),
      text: t(`reviews.items.${i}.text`),
    })),
  )
}
