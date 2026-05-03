import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  /*
   * GitHub Pages project site: https://USER.github.io/REPO_NAME/
   * Відносний base щоб асети працювали після перейменування репо (не прив’язуємось до старої назви в шляхах).
   */
  base: command === 'serve' ? '/' : './',
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    // GitHub Pages: прямий захід /…/cases дає 404 з сервера — дублюємо index у 404.html (офіційний SPA-трюк)
    {
      name: 'github-pages-spa-404',
      apply: 'build',
      closeBundle() {
        const out = resolve(process.cwd(), 'docs')
        const indexHtml = resolve(out, 'index.html')
        const notFoundHtml = resolve(out, '404.html')
        if (existsSync(indexHtml)) {
          copyFileSync(indexHtml, notFoundHtml)
        }
      },
    },
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
