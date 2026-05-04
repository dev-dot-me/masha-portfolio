/**
 * Генерує src/locales/ua.json, es.json, en.json (запуск: node scripts/gen-locales.mjs).
 * Джерело істини для перекладів — цей файл; JSON зручно комітити як артефакт.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'src', 'locales')
mkdirSync(outDir, { recursive: true })

const reviewsUa = [
  {
    name: 'Наталія Коваль',
    text: 'Ми підняли охоплення сторіс і стабільно тримали заявки з таргету без «заливання бюджету». Звіти зрозумілі, правки швидкі — нарешті SMM відчувається як система, а не хаос у чаті.',
  },
  {
    name: 'Віктор Руденко',
    text: 'Працюємо в ніші нерухомості: контент став спокійнішим і дорожчим на вигляд, ліди з Instagram пішли в CRM без ручного переносу. Рекомендую, якщо потрібен дорослий підхід до стратегії.',
  },
  {
    name: 'Юлія Савченко',
    text: 'Для івентів важливий темп публікацій. Ми встигали анонси, дедлайни раннього білету й live-контент — і це не виглядало як паніка в останній день.',
  },
  {
    name: 'Леся Шевченко',
    text: 'Дуже делікатно працювали з візуалом: не переробили бренд «з нуля», а підсилили те, що вже було впізнаваним. Клієнти відмічають, що стрічка стала ціліснішою.',
  },
]

const reviewsEs = [
  {
    name: 'Natalia Koval',
    text: 'Subimos alcance en historias y mantuvimos leads desde ads sin «quemar» presupuesto. Los informes son claros y las revisiones rápidas: por fin el SMM se siente como un sistema, no como caos en el chat.',
  },
  {
    name: 'Víctor Rudenko',
    text: 'Sector inmobiliario: el contenido se ve más sobrio y premium, y los leads de Instagram entran al CRM sin copiar a mano. Recomiendo si buscas un enfoque adulto de estrategia.',
  },
  {
    name: 'Yuliia Savchenko',
    text: 'En eventos importa el ritmo. Cumplimos anuncios, early bird y contenido live sin parecer un incendio el último día.',
  },
  {
    name: 'Lesia Shevchenko',
    text: 'Trabajaron el visual con delicadeza: no rehicieron la marca desde cero, sino que reforzaron lo reconocible. Los clientes notan un feed más coherente.',
  },
]

const reviewsEn = [
  {
    name: 'Natalia Koval',
    text: 'We lifted story reach and kept steady leads from ads without burning budget. Reports are clear, revisions fast — SMM finally feels like a system, not chat chaos.',
  },
  {
    name: 'Viktor Rudenko',
    text: 'Real estate niche: content looks calmer and more premium, Instagram leads flow into the CRM without manual copy-paste. Recommend if you want a grown-up strategy approach.',
  },
  {
    name: 'Yuliia Savchenko',
    text: 'For events, publishing tempo matters. We hit announcements, early-bird deadlines, and live content without last-day panic.',
  },
  {
    name: 'Lesia Shevchenko',
    text: 'Very delicate visual work: they didn’t rebuild the brand from scratch but strengthened what was already recognisable. Clients say the feed feels more cohesive.',
  },
]

function blogBlockUa(slug, title, body) {
  return { slug, title, body }
}

const blogUa = {
  'dark-net-mify-ta-realnist': blogBlockUa(
    'dark-net-mify-ta-realnist',
    'Що маркетологу варто знати про «темний інтернет»: міфи, ризики для брендів і реальність',
    [
      'Термін «dark net» часто використовують для клікбейту. Для SMM важливо розрізняти легальні майданчики з жорсткою модерацією та зони, де немає відповідальності за дані користувачів.',
      'Для бренду ризик — не «зайти туди», а втратити репутацію через непрозорі партнерства, сірі бази лідів або скрипти автокоментування. Завжди перевіряйте політику даних і ліцензії інструментів.',
      'Коротко: фокусуйтеся на прозорих каналах, документуйте згоди на розсилку і не купуйте «гарячі бази» — це економить бюджет і нерви юридичному відділу.',
    ],
  ),
  '50-promptiv-chatgpt-smm': blogBlockUa(
    '50-promptiv-chatgpt-smm',
    '50 промптів для SMM у ChatGPT: від ідей постів до скриптів для Reels',
    [
      'ШІ — це не заміна стратегії, а прискорювач рутини: чернетки текстів, варіанти заголовків, переклад тону з «формального» на «дружній».',
      'У статті зібрані промпти з плейсхолдерами для ніші, ЦА та обмежень бренду. Додайте до кожного запиту приклад вашого минулого посту — модель краще ловить голос.',
      'Пам’ятайте про фактчек і відповідальність: не публікуйте статистику, яку згенеровано без джерел. Використовуйте AI для гіпотез, перевіряйте людиною.',
    ],
  ),
  'podkast-smm-osobystyj-brend': blogBlockUa(
    'podkast-smm-osobystyj-brend',
    'Підкаст про SMM: як будувати особистий бренд експерта — розмова з Анастасією Яланською',
    [
      'У випуску розбираємо, як експерту не розмазати фокус між платформами: що залишити в Instagram, а що винести в LinkedIn або YouTube.',
      'Анастасія ділиться чеклістом «перший місяць після ребрендингу особистого профілю» — від біо до серії Stories з «доказами компетенції».',
      'Якщо ви ведете блог і сервіс одночасно, зафіксуйте правило 70/30: 70% користі та кейсів, 30% особистого контексту — так аудиторія не втомлюється від «вічних продажів».',
    ],
  ),
}

const blogEs = {
  'dark-net-mify-ta-realnist': {
    title: 'Qué debería saber un marketer sobre la “dark web”: mitos, riesgos y realidad',
    body: [
      '“Dark net” se usa mucho en clickbait. En SMM conviene distinguir plataformas legales con moderación estricta de zonas sin responsabilidad sobre datos.',
      'El riesgo para la marca suele ser reputacional: partners opacos, bases grises de leads o bots de comentarios. Revisa políticas de datos y licencias.',
      'En resumen: canales transparentes, consentimientos documentados y evita “bases calientes” compradas.',
    ],
  },
  '50-promptiv-chatgpt-smm': {
    title: '50 prompts de ChatGPT para SMM: de ideas de post a guiones de Reels',
    body: [
      'La IA no sustituye la estrategia, pero acelera borradores, titulares y cambios de tono de formal a cercano.',
      'Incluye prompts con placeholders para nicho, público y límites de marca; añade un ejemplo de post previo para que el modelo capte la voz.',
      'Verifica datos: no publiques estadísticas inventadas sin fuente. Usa la IA para hipótesis y valida con humanos.',
    ],
  },
  'podkast-smm-osobystyj-brend': {
    title: 'Podcast sobre SMM: cómo construir marca personal de experta — con Anastasiia Yalanska',
    body: [
      'Hablamos de cómo no dispersar el foco entre plataformas: qué queda en Instagram y qué va a LinkedIn o YouTube.',
      'Checklist del primer mes tras un rebranding de perfil personal: desde la bio hasta Stories con “pruebas de competencia”.',
      'Si combinas blog y servicio, prueba la regla 70/30: 70% utilidad y casos, 30% contexto personal para no cansar con venta continua.',
    ],
  },
}

const blogEn = {
  'dark-net-mify-ta-realnist': {
    title: 'What marketers should know about the “dark web”: myths, brand risks, and reality',
    body: [
      '“Dark net” is often clickbait. In SMM, separate legitimate moderated platforms from zones with no accountability for user data.',
      'Brand risk is usually reputational: opaque partners, grey lead lists, or auto-comment bots. Always check data policies and tool licences.',
      'In short: focus on transparent channels, document consent, and avoid buying “hot databases”.',
    ],
  },
  '50-promptiv-chatgpt-smm': {
    title: '50 ChatGPT prompts for SMM: from post ideas to Reels scripts',
    body: [
      'AI is not a strategy replacement but speeds up drafts, headline variants, and tone shifts from formal to friendly.',
      'The article lists prompts with placeholders for niche, audience, and brand constraints — add a sample of your past post so the model catches your voice.',
      'Fact-check: do not publish statistics generated without sources. Use AI for hypotheses and validate with humans.',
    ],
  },
  'podkast-smm-osobystyj-brend': {
    title: 'SMM podcast: building an expert’s personal brand — conversation with Anastasiia Yalanska',
    body: [
      'We discuss how not to scatter focus across platforms: what stays on Instagram vs LinkedIn or YouTube.',
      'A checklist for the first month after a personal profile rebrand — from bio to Stories that prove expertise.',
      'If you run both a blog and a service, try a 70/30 rule: 70% value and cases, 30% personal context so the feed never feels like endless selling.',
    ],
  },
}

function buildBlogMessages(blog) {
  const posts = {}
  for (const [slug, { title, body }] of Object.entries(blog)) {
    posts[slug] = { title, body }
  }
  return {
    readTime: '',
    sectionKicker: '',
    title: '',
    intro: '',
    readMore: '',
    viewsHint: '',
    back: '',
    notFoundTitle: '',
    notFoundBody: '',
    notFoundHome: '',
    tags: {},
    posts,
  }
}

function fillUaBlogShell(b) {
  b.readTime = '{n} хв. читання'
  b.sectionKicker = 'Ідеї та матеріали'
  b.title = 'Блог'
  b.intro =
    'Статті про SMM, дослідження стрічки та практичні гайди — оберіть тему й читайте повністю на окремій сторінці.'
  b.readMore = 'Читати повністю'
  b.viewsHint = 'Перегляди'
  b.back = 'До блогу'
  b.notFoundTitle = 'Статтю не знайдено'
  b.notFoundBody = 'Перевірте посилання або поверніться до блогу на головній.'
  b.notFoundHome = 'На головну'
  b.tags = { smm: '#SMM', research: '#ДОСЛІДЖЕННЯ', interesting: '#ЦІКАВЕ', ai: '#AI' }
}

function fillEsBlogShell(b) {
  b.readTime = '{n} min de lectura'
  b.sectionKicker = 'Ideas y materiales'
  b.title = 'Blog'
  b.intro =
    'Artículos de SMM, investigación del feed y guías prácticas: elige un tema y lee la versión completa en su página.'
  b.readMore = 'Leer completo'
  b.viewsHint = 'Vistas'
  b.back = 'Volver al blog'
  b.notFoundTitle = 'Artículo no encontrado'
  b.notFoundBody = 'Comprueba el enlace o vuelve al blog en la home.'
  b.notFoundHome = 'Volver al inicio'
  b.tags = { smm: '#SMM', research: '#INVESTIGACIÓN', interesting: '#CURIOSIDADES', ai: '#IA' }
}

function fillEnBlogShell(b) {
  b.readTime = '{n} min read'
  b.sectionKicker = 'Ideas and materials'
  b.title = 'Blog'
  b.intro = 'SMM articles, feed research, and practical guides — pick a topic and read the full version on its own page.'
  b.readMore = 'Read full article'
  b.viewsHint = 'Views'
  b.back = 'Back to blog'
  b.notFoundTitle = 'Article not found'
  b.notFoundBody = 'Check the link or return to the blog from the homepage.'
  b.notFoundHome = 'Back to home'
  b.tags = { smm: '#SMM', research: '#RESEARCH', interesting: '#CURIOSITIES', ai: '#AI' }
}

const uaBlog = buildBlogMessages(blogUa)
fillUaBlogShell(uaBlog)

const esBlog = buildBlogMessages(blogEs)
fillEsBlogShell(esBlog)

const enBlog = buildBlogMessages(blogEn)
fillEnBlogShell(enBlog)

const sharedProcessUa = {
  sectionKicker: 'Прозорий процес',
  title: 'Як я працюю',
  intro: 'Шість порцій спокою для вашої команди: від першого брифу до масштабування результатів без хаосу в комунікації.',
  steps: [
    {
      tag: 'Старт',
      title: 'Стратегічний бриф і дорожня карта',
      body: 'Стартуємо з глибокого занурення у ваш продукт, ЦА й конкурентів. Отримуєте чіткий план на кілька місяців із KPI та пріоритетами.',
    },
    {
      tag: 'Процес',
      title: 'Усі матеріали — у зручній системі',
      body: 'Контент-плани, дошки узгодження й файли тримаємо в одному робочому просторі (Notion/Drive за вашими правилами доступу).',
    },
    {
      tag: 'Ритм',
      title: 'Календар публікацій і звітів',
      body: 'На початку співпраці узгоджуємо ритм постів, рекламних ітерацій і звітності — щоб команда розуміла очікування заздалегідь.',
    },
    {
      tag: 'Надійність',
      title: 'Резервні канали звʼязку',
      body: 'Тримайте ключові апдейти там, де вам комфортно: робочий чат, пошта та експорт документів у PDF для офлайн-доступу.',
    },
    {
      tag: 'Стандарти',
      title: 'Шаблони та підказки до етапів',
      body: 'Додаю шаблони постів, короткі саммарі зустрічей і чеклісти — можна швидко освіжити контекст без перегляду десятків файлів.',
    },
    {
      tag: 'Масштаб',
      title: 'Мережа перевірених партнерів',
      body: 'За потреби підключаю таргетологів, продакшн або сторітелінг-команду з перевіреного кола — зберігаємо єдиний стандарт якості.',
    },
  ],
}

const sharedProcessEs = {
  sectionKicker: 'Proceso transparente',
  title: 'Cómo trabajo',
  intro: 'Seis bloques de calma para tu equipo: del primer brief a escalar resultados sin caos en la comunicación.',
  steps: [
    {
      tag: 'Inicio',
      title: 'Brief estratégico y hoja de ruta',
      body: 'Partimos de una inmersión en producto, audiencia y competencia. Recibes un plan claro por meses con KPI y prioridades.',
    },
    {
      tag: 'Proceso',
      title: 'Todo el material en un solo sistema',
      body: 'Planes de contenido, tableros de aprobación y archivos en un espacio de trabajo (Notion/Drive según tu acceso).',
    },
    {
      tag: 'Ritmo',
      title: 'Calendario de publicaciones e informes',
      body: 'Al inicio alineamos ritmo de posts, iteraciones de ads y reporting para que el equipo sepa qué esperar.',
    },
    {
      tag: 'Fiabilidad',
      title: 'Canales de contacto de respaldo',
      body: 'Actualizaciones donde te sea cómodo: chat laboral, email y exportación a PDF para acceso offline.',
    },
    {
      tag: 'Estándares',
      title: 'Plantillas y guías por etapa',
      body: 'Aporto plantillas de posts, resúmenes de reuniones y checklists para refrescar contexto sin revisar decenas de archivos.',
    },
    {
      tag: 'Escala',
      title: 'Red de partners de confianza',
      body: 'Si hace falta, sumo targeting, producción o storytelling con gente probada — misma exigencia de calidad.',
    },
  ],
}

const sharedProcessEn = {
  sectionKicker: 'Transparent process',
  title: 'How I work',
  intro: 'Six doses of calm for your team: from the first brief to scaling results without communication chaos.',
  steps: [
    {
      tag: 'Kick-off',
      title: 'Strategic brief and roadmap',
      body: 'We start with a deep dive into your product, audience, and competitors. You get a clear multi-month plan with KPIs and priorities.',
    },
    {
      tag: 'Process',
      title: 'All materials in one system',
      body: 'Content plans, approval boards, and files live in one workspace (Notion/Drive under your access rules).',
    },
    {
      tag: 'Rhythm',
      title: 'Publishing and reporting calendar',
      body: 'Early on we align post cadence, ad iterations, and reporting so expectations are clear upfront.',
    },
    {
      tag: 'Reliability',
      title: 'Backup communication channels',
      body: 'Keep key updates where you are comfortable: work chat, email, and PDF exports for offline access.',
    },
    {
      tag: 'Standards',
      title: 'Templates and stage prompts',
      body: 'I add post templates, short meeting summaries, and checklists so you can refresh context without digging through dozens of files.',
    },
    {
      tag: 'Scale',
      title: 'A vetted partner network',
      body: 'When needed I bring in targeting, production, or storytelling from a trusted circle — same quality bar.',
    },
  ],
}

const projectsPageUa = {
  docTitle: 'Проєкти · Марія SMM',
  backHome: 'На головну',
  pageTitle: 'Проєкти',
  pageLead:
    'Пʼять проєктів із вимірюваними результатами: контекст, дії та ключові метрики в кожному блоці.',
  context: 'Контекст',
  whatIDid: 'Що зробила',
  result: 'Результат',
  ctaKicker: 'Наступний крок',
  ctaTitle: 'Обговорити подібний проєкт для вашого бізнесу?',
  ctaBody: 'Зв’яжіться з нами',
  ctaButton: 'До контактів',
}

const projectsPageEs = {
  docTitle: 'Proyectos · María SMM',
  backHome: 'Volver al inicio',
  pageTitle: 'Proyectos',
  pageLead: 'Cinco proyectos con resultados medibles: contexto, acciones y métricas clave en cada bloque.',
  context: 'Contexto',
  whatIDid: 'Qué hice',
  result: 'Resultado',
  ctaKicker: 'Siguiente paso',
  ctaTitle: '¿Hablamos de un proyecto parecido para tu negocio?',
  ctaBody: 'Contáctanos',
  ctaButton: 'Ir a contactos',
}

const projectsPageEn = {
  docTitle: 'Projects · María SMM',
  backHome: 'Back to home',
  pageTitle: 'Projects',
  pageLead: 'Five projects with measurable outcomes — context, what we did, and headline metrics in each block.',
  context: 'Context',
  whatIDid: 'What I did',
  result: 'Outcome',
  ctaKicker: 'Next step',
  ctaTitle: 'Want to discuss a similar project for your business?',
  ctaBody: 'Contact us',
  ctaButton: 'Go to contacts',
}

function baseLocale(
  nav,
  header,
  common,
  hero,
  stats,
  projectSpotlight,
  about,
  projectsPreview,
  process,
  testimonials,
  blog,
  reviews,
  projectsPage,
  footer,
) {
  return {
    nav,
    header,
    common,
    hero,
    stats,
    projectSpotlight,
    about,
    projectsPreview,
    process,
    testimonials,
    blog,
    reviews,
    projectsPage,
    footer,
  }
}

const navUa = { about: 'Про мене', how: 'Як працюю', projects: 'Проєкти', reviews: 'Відгуки', blog: 'Блог', contacts: 'Контакти' }
const navEs = { about: 'Sobre mí', how: 'Cómo trabajo', projects: 'Proyectos', reviews: 'Reseñas', blog: 'Blog', contacts: 'Contacto' }
const navEn = { about: 'About', how: 'How I work', projects: 'Projects', reviews: 'Reviews', blog: 'Blog', contacts: 'Contact' }

const headerUa = {
  projectsCta: 'Детальніше про проєкти',
  navTitle: 'Навігація',
  menu: 'Меню',
  closeMenu: 'Закрити меню',
  langGroup: 'Мова сайту',
}
const headerEs = {
  projectsCta: 'Más sobre los proyectos',
  navTitle: 'Navegación',
  menu: 'Menú',
  closeMenu: 'Cerrar menú',
  langGroup: 'Idioma del sitio',
}
const headerEn = {
  projectsCta: 'More on projects',
  navTitle: 'Navigation',
  menu: 'Menu',
  closeMenu: 'Close menu',
  langGroup: 'Site language',
}

const commonUa = {
  backHome: 'На головну',
  backBlog: 'До блогу',
  learnMore: 'Дізнатись більше',
  readMore: 'Читати повністю',
  viewsHint: 'Перегляди',
}
const commonEs = {
  backHome: 'Inicio',
  backBlog: 'Al blog',
  learnMore: 'Saber más',
  readMore: 'Leer completo',
  viewsHint: 'Vistas',
}
const commonEn = {
  backHome: 'Home',
  backBlog: 'To blog',
  learnMore: 'Learn more',
  readMore: 'Read full article',
  viewsHint: 'Views',
}

const heroUa = {
  badge: 'SMM під ключ',
  titleBefore: 'Перетворюю соцмережі на',
  titleAccent: 'інструмент продажів',
  lead:
    'Я Марія — SMM-спеціаліст. Роблю акаунти продаючими, впізнаваними та такими, що привертають увагу з першої секунди. Стратегія, контент, дизайн, реклама та AI-візуал — все під ключ.',
  features: [
    'Стратегія та позиціонування бренду',
    'Контент, дизайн та впізнаваний візуал',
    'Таргетована реклама й супровід воронок',
    'AI-візуал і щомісячна аналітика',
  ],
  cta: 'Обговорити проект',
  ctaHint:
    'Перший крок — короткий бриф і розуміння вашої ніші. Далі форматуємо стратегію під ваші цілі та ресурси.',
  photoAlt: 'Марія — SMM-спеціаліст',
  cardTitle: 'Перший міні-розбір',
  cardBody:
    'Пропозиція для нових партнерів: короткий аудит профілю й три точки росту без зобовʼязань.',
}

const heroEs = {
  badge: 'SMM integral',
  titleBefore: 'Convierto redes sociales en',
  titleAccent: 'herramienta de ventas',
  lead: 'Soy María, especialista en SMM. Hago cuentas que venden, se reconocen y captan atención desde el primer segundo: estrategia, contenido, diseño, ads y visual con IA — todo integrado.',
  features: [
    'Estrategia y posicionamiento de marca',
    'Contenido, diseño y un visual reconocible',
    'Publicidad segmentada y embudos',
    'Visual con IA y analítica mensual',
  ],
  cta: 'Hablemos del proyecto',
  ctaHint: 'Primer paso: brief corto y entender tu nicho. Luego adaptamos la estrategia a tus metas y recursos.',
  photoAlt: 'María — especialista en SMM',
  cardTitle: 'Mini diagnóstico inicial',
  cardBody: 'Para nuevos partners: revisión rápida del perfil y tres palancas de crecimiento sin compromiso.',
}

const heroEn = {
  badge: 'Full-stack SMM',
  titleBefore: 'I turn social media into a',
  titleAccent: 'sales engine',
  lead: 'I’m María, an SMM specialist. I make accounts sell, stay recognisable, and grab attention in the first second — strategy, content, design, ads, and AI visuals, end to end.',
  features: [
    'Strategy and brand positioning',
    'Content, design, and a recognisable look',
    'Targeted ads and funnel support',
    'AI visuals and monthly analytics',
  ],
  cta: 'Discuss the project',
  ctaHint: 'First step: a short brief and understanding your niche. Then we shape the strategy to your goals and resources.',
  photoAlt: 'María — SMM specialist',
  cardTitle: 'First mini audit',
  cardBody: 'For new partners: a quick profile audit and three growth levers — no strings attached.',
}

const statsUa = {
  lines: [
    'Співпраця з 4 різними країнами',
    '8 різних ніш: бʼюті, нерухомість, великі підприємства тощо',
    'LTV з клієнтом ~2 роки',
    'Ведення 20+ сторінок',
  ],
}
const statsEs = {
  lines: [
    'Colaboración con 4 países',
    '8 nichos: belleza, inmobiliaria, grandes empresas, etc.',
    'LTV con cliente ~2 años',
    'Gestión de 20+ páginas',
  ],
}
const statsEn = {
  lines: [
    'Collaboration across 4 countries',
    '8 niches: beauty, real estate, large enterprises, and more',
    '~2 years client LTV',
    'Managing 20+ pages',
  ],
}

const projectUa = {
  imageAlt: "Кейс: виробник бруківки для подвір'я",
  sectionHeading: 'Системний SMM на прикладі реального бізнесу',
  kicker: 'Обраний проєкт',
  title: 'Виробник бруківки для подвірʼя',
  subtitle: 'B2B + B2C стратегія · 2+ роки співпраці · Таргетована реклама + SMM',
  pills: ['30 000€ прибуток щомісяця', '×20 ROAS на рекламу', '1 500€ бюджет на рекламу'],
  taskTitle: 'Задача',
  taskBody:
    'Клієнт — виробник бруківки для подвірʼя — у висококонкурентній ніші без сильної присутності в соцмережах. Потрібно було вибудувати системний SMM для двох сегментів: приватних замовників (B2C) та будівельних компаній і дизайнерів (B2B).',
}

const projectEs = {
  imageAlt: 'Caso: fabricante de adoquines',
  sectionHeading: 'SMM sistemático con un negocio real',
  kicker: 'Proyecto destacado',
  title: 'Fabricante de adoquines para patios',
  subtitle: 'Estrategia B2B + B2C · 2+ años · Ads + SMM',
  pills: ['30 000€ beneficio mensual', '×20 ROAS en ads', '1 500€ presupuesto ads'],
  taskTitle: 'Reto',
  taskBody:
    'Cliente fabricante de adoquines, nicho competitivo y poca presencia social. Había que montar un SMM sistemático para B2C (particulares) y B2B (constructoras y diseñadores).',
}

const projectEn = {
  imageAlt: 'Case: paving manufacturer',
  sectionHeading: 'Systematic SMM with a real business',
  kicker: 'Featured project',
  title: 'Paving manufacturer for courtyards',
  subtitle: 'B2B + B2C strategy · 2+ years · Targeted ads + SMM',
  pills: ['€30k monthly profit', '×20 ROAS on ads', '€1.5k ad budget'],
  taskTitle: 'Challenge',
  taskBody:
    'Client — paving manufacturer — competitive niche, weak social presence. We needed systematic SMM for homeowners (B2C) and construction firms and designers (B2B).',
}

const aboutUa = {
  kicker: 'Про мене',
  title: 'Марія · SMM Lead',
  paragraphs: [
    '¡Hola! Soy María especialista en SMM y creadora de contenido con 3 años de experiencia en la creación de contenido y 1,5 años en la gestión integral de redes sociales. Ayudo a los negocios a atraer clientes, aumentar el reconocimiento de marca y mejorar las ventas a través de una estrategia de SMM efectiva.',
    'Me encargo del proyecto de forma completa: desde la estrategia y el desarrollo de branding hasta la producción de contenido, diseño, lanzamiento de publicidad y análisis mensual. Utilizo herramientas de IA para crear contenido visual único que hace destacar a la marca frente a la competencia.',
  ],
  cta: 'Дізнатись більше',
}

const aboutEs = {
  kicker: 'Sobre mí',
  title: 'María · SMM Lead',
  paragraphs: [
    '¡Hola! Soy María, especialista en SMM y creadora de contenido con 3 años creando contenido y 1,5 años gestionando redes de punta a punta. Ayudo a negocios a atraer clientes, reforzar marca y vender mejor con una estrategia de SMM sólida.',
    'Lidero el proyecto completo: desde estrategia y branding hasta producción de contenido, diseño, lanzamiento de ads y analítica mensual. Uso IA para un visual único que destaca frente a la competencia.',
  ],
  cta: 'Saber más',
}

const aboutEn = {
  kicker: 'About me',
  title: 'María · SMM Lead',
  paragraphs: [
    "Hi! I'm María, an SMM specialist and content creator with 3 years in content production and 1.5 years running full social media management. I help businesses attract clients, grow brand recognition, and lift sales with an effective SMM strategy.",
    'I own the project end to end: strategy and branding development through content production, design, ad launches, and monthly analytics. I use AI tools to craft distinctive visuals that stand out from competitors.',
  ],
  cta: 'Learn more',
}

/** Ukrainian about section originally mixed Spanish paragraphs — replace UA with proper Ukrainian */
aboutUa.paragraphs = [
  'Привіт! Я Марія — SMM-спеціалістка та контент-креаторка: 3 роки у створенні контенту й понад 1,5 року в комплексному веденні соцмереж. Допомагаю бізнесу залучати клієнтів, підсилювати впізнаваність бренду та зростати в продажах завдяки зваженій SMM-стратегії.',
  'Беру проєкт «під ключ»: від стратегії та брендингу до продакшену контенту, дизайну, запуску реклами й щомісячної аналітики. Використовую AI-інструменти, щоб створювати впізнаваний візуал, який виділяє бренд серед конкурентів.',
]

const projectsPreviewUa = {
  kicker: 'Портфоліо',
  title: 'Мої роботи',
  case1Title: 'Виробник бруківки для подвірʼя',
  case1Meta: 'Україна · 2+ роки співпраці',
  case2Title: 'Тури в Африку',
  case2Meta: 'ОАЕ · Туризм',
  case3Title: 'Стоматологія',
  case3Meta: 'Україна · Медицина',
}

const projectsPreviewEs = {
  kicker: 'Portfolio',
  title: 'Mis trabajos',
  case1Title: 'Fabricante de adoquines para patios',
  case1Meta: 'Ucrania · 2+ años',
  case2Title: 'Viajes a África',
  case2Meta: 'EAU · Turismo',
  case3Title: 'Clínica dental',
  case3Meta: 'Ucrania · Salud',
}

const projectsPreviewEn = {
  kicker: 'Portfolio',
  title: 'Selected work',
  case1Title: 'Paving manufacturer for courtyards',
  case1Meta: 'Ukraine · 2+ years',
  case2Title: 'Africa tours',
  case2Meta: 'UAE · Travel',
  case3Title: 'Dental clinic',
  case3Meta: 'Ukraine · Healthcare',
}

const testimonialsUa = {
  title: 'Відгуки',
  accent:
    'Я працюю з бізнесами в різних нішах — від експертів до брендів. Тут — чесні відгуки про процес, комунікацію і результати.',
  learnMore: 'Дізнатись більше',
}

const testimonialsEs = {
  title: 'Reseñas',
  accent:
    'Trabajo con negocios de distintas categorías — de expertos a marcas. Aquí encontrarás reseñas honestas sobre proceso, comunicación y resultados.',
  learnMore: 'Saber más',
}

const testimonialsEn = {
  title: 'Reviews',
  accent:
    'I work with businesses across niches — from experts to brands. Here are honest notes on process, communication, and results.',
  learnMore: 'Learn more',
}

const reviewsPageUa = {
  formWarn: 'Заповніть усі поля, будь ласка.',
  formOk: 'Дякуємо! Повідомлення прийнято — звʼяжемось, коли переглянемо відгук.',
  pageTitle: 'Відгуки',
  pageLead:
    'Реальні результати моєї роботи з бізнесами. Клієнти діляться своїм досвідом співпраці та результатами, які ми отримали разом.',
  accent:
    'Я працюю з бізнесами в різних нішах — від експертів до брендів. Тут — чесні відгуки про процес, комунікацію і результати.',
  loadMore: 'Показати більше',
  formTitle: 'Залишити відгук',
  labelName: "Імʼя",
  phName: "Ваше імʼя",
  labelContact: '@Instagram або контакт',
  phContact: '@нік або email / телефон',
  labelText: 'Текст відгуку',
  phText: 'Розкажіть про співпрацю та результат',
  submit: 'Надіслати',
}

const reviewsPageEs = {
  formWarn: 'Completa todos los campos, por favor.',
  formOk: '¡Gracias! Hemos recibido tu mensaje y te responderemos al revisarlo.',
  pageTitle: 'Reseñas',
  pageLead:
    'Resultados reales de mi trabajo con negocios. Clientas y clientes comparten su experiencia y los resultados que logramos juntos.',
  accent:
    'Trabajo con negocios de distintas categorías — de expertos a marcas. Aquí hay reseñas honestas sobre proceso, comunicación y resultados.',
  loadMore: 'Mostrar más',
  formTitle: 'Dejar una reseña',
  labelName: 'Nombre',
  phName: 'Tu nombre',
  labelContact: '@Instagram o contacto',
  phContact: '@usuario o email / teléfono',
  labelText: 'Texto de la reseña',
  phText: 'Cuéntanos la colaboración y el resultado',
  submit: 'Enviar',
}

const reviewsPageEn = {
  formWarn: 'Please fill in all fields.',
  formOk: 'Thanks! Message received — we’ll get back to you after we review it.',
  pageTitle: 'Reviews',
  pageLead:
    'Real outcomes from my work with businesses. Clients share their collaboration experience and the results we achieved together.',
  accent:
    'I work with businesses across niches — from experts to brands. Here are honest reviews on process, communication, and results.',
  loadMore: 'Show more',
  formTitle: 'Leave a review',
  labelName: 'Name',
  phName: 'Your name',
  labelContact: '@Instagram or contact',
  phContact: '@handle or email / phone',
  labelText: 'Review text',
  phText: 'Tell us about the collaboration and outcome',
  submit: 'Send',
}

const footerUa = {
  title: 'Почнімо з розмови',
  lead: 'Розкажіть про свій бізнес і цілі — підберемо формат співпраці та наступні кроки без зайвого формалізму.',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  phone: 'Телефон',
  email: 'Email',
  rights: 'Усі права захищені.',
  devIntro: 'Сайт створив Serhii Kundys.',
  devEmail: 'Пошта',
  devWhatsApp: 'WhatsApp',
  devLinkedIn: 'LinkedIn',
}

const footerEs = {
  title: 'Empecemos con una conversación',
  lead: 'Cuéntame tu negocio y tus metas: definimos el formato de colaboración y los siguientes pasos sin burocracia extra.',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  phone: 'Teléfono',
  email: 'Email',
  rights: 'Todos los derechos reservados.',
  devIntro: 'Sitio web creado por Serhii Kundys.',
  devEmail: 'Email',
  devWhatsApp: 'WhatsApp',
  devLinkedIn: 'LinkedIn',
}

const footerEn = {
  title: "Let's start with a conversation",
  lead: 'Tell me about your business and goals — we’ll pick a collaboration format and next steps without extra bureaucracy.',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  phone: 'Phone',
  email: 'Email',
  rights: 'All rights reserved.',
  devIntro: 'Website built by Serhii Kundys.',
  devEmail: 'Email',
  devWhatsApp: 'WhatsApp',
  devLinkedIn: 'LinkedIn',
}

const ua = baseLocale(
  navUa,
  headerUa,
  commonUa,
  heroUa,
  statsUa,
  projectUa,
  aboutUa,
  projectsPreviewUa,
  sharedProcessUa,
  testimonialsUa,
  uaBlog,
  { items: reviewsUa, ...reviewsPageUa },
  projectsPageUa,
  footerUa,
)

const es = baseLocale(
  navEs,
  headerEs,
  commonEs,
  heroEs,
  statsEs,
  projectEs,
  aboutEs,
  projectsPreviewEs,
  sharedProcessEs,
  testimonialsEs,
  esBlog,
  { items: reviewsEs, ...reviewsPageEs },
  projectsPageEs,
  footerEs,
)

const en = baseLocale(
  navEn,
  headerEn,
  commonEn,
  heroEn,
  statsEn,
  projectEn,
  aboutEn,
  projectsPreviewEn,
  sharedProcessEn,
  testimonialsEn,
  enBlog,
  { items: reviewsEn, ...reviewsPageEn },
  projectsPageEn,
  footerEn,
)

writeFileSync(join(outDir, 'ua.json'), JSON.stringify(ua, null, 2), 'utf8')
writeFileSync(join(outDir, 'es.json'), JSON.stringify(es, null, 2), 'utf8')
writeFileSync(join(outDir, 'en.json'), JSON.stringify(en, null, 2), 'utf8')

console.log('Wrote src/locales/ua.json, es.json, en.json')
