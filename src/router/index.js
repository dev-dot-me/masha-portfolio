import { createRouter, createWebHistory } from 'vue-router'

/** GitHub Pages + relative Vite base: історія має префікс /REPO/, асети — відносні ./… */
function resolveHistoryBase() {
  const base = import.meta.env.BASE_URL
  if (!base.startsWith('.')) {
    return base.endsWith('/') ? base : `${base}/`
  }
  const raw = typeof window !== 'undefined' ? window.location.pathname : '/'
  const seg = raw.replace(/\/$/, '').split('/').filter(Boolean)
  const repoRoot = seg.length ? `/${seg[0]}/` : '/'
  return repoRoot
}

const router = createRouter({
  history: createWebHistory(resolveHistoryBase()),
  scrollBehavior(to, _from, saved) {
    if (saved) return saved
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('../views/CasesView.vue'),
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
    },
  ],
})

export default router
