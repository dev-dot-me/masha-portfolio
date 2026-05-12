import { createRouter, createWebHistory } from 'vue-router'

/** Перший сегмент URL для цих маршрутів — не назва репо (корінь сайту), а сам маршрут. */
const ROOT_TOP_SEGMENTS = new Set(['reviews', 'projects', 'cases', 'blog', 'about', 'how', 'how-i-work'])

/**
 * GitHub Pages: сайт у підпапці /REPO/ → history base /REPO/.
 * Локально / vite preview на корені: /reviews, /projects, /how-i-work — base має бути '/', інакше router-view порожній.
 */
function resolveHistoryBase() {
  const base = import.meta.env.BASE_URL
  if (!base.startsWith('.')) {
    return base.endsWith('/') ? base : `${base}/`
  }
  if (typeof window === 'undefined') return '/'
  const seg = window.location.pathname.replace(/\/$/, '').split('/').filter(Boolean)
  if (seg.length === 0) return '/'
  if (seg.length >= 2) {
    if (ROOT_TOP_SEGMENTS.has(seg[0])) return '/'
    return `/${seg[0]}/`
  }
  if (ROOT_TOP_SEGMENTS.has(seg[0])) return '/'
  return `/${seg[0]}/`
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
      redirect: '/projects',
    },
    {
      path: '/how',
      redirect: '/how-i-work',
    },
    {
      path: '/how-i-work',
      name: 'how',
      component: () => import('../views/HowWorkView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: () => import('../views/ReviewsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutMeView.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue'),
    },
  ],
})

export default router
