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
    name: 'Оля Олексин',
    text: 'Усе структуровано, чітко, багато інформації. Загалом це мій другий курс від Тані і мені дуже подобається ваш підхід, кількість матеріалу та його подача. Насправді стільки інформації, що інколи були думки «Боже, як насичено! Чому це не розділили на два потоки?» — це найкращий показник якості.',
  },
  {
    name: 'Світлана Лотоцька',
    text: 'Повторюватиму мільйон разів: люди й комʼюніті — найдорожче, що я отримала і найважливіше. Ви зібрали чудових людей і провели крутий people management. Дякую за те, що ніхто не лишився без відповіді, не засумував і за те, що обʼєднали нас спільною ідеєю.',
  },
  {
    name: 'Софія Фучило',
    text: 'Цей курс — як ковток свіжого повітря. Я працюю в SMM і перед цим уже була на програмі Тані — це маст-хев для системності. На середині зрозуміла, що наставництво відгукується навіть більше. Дуже кайфувала від уроків і сумно, що все закінчилося — ваші продукти затягують :) Дякую всім кураторам та Тані за топовий продукт!',
  },
  {
    name: 'Наталія Коваль',
    text: 'Ми підняли охоплення сторіс і стабільно тримали заявки з таргету без «заливання бюджету». Звіти зрозумілі, правки швидкі — нарешті SMM відчувається як система, а не хаос у чаті.',
  },
  {
    name: 'Віктор Руденко',
    text: 'Працюємо в ніші нерухомості: контент став спокійнішим і дорожчим на вигляд, ліди з Instagram пішли в CRM без ручного переносу. Рекомендую, якщо потрібен дорослий підхід до стратегії.',
  },
  {
    name: 'Анна Мельник',
    text: 'Запускали рекламу в сезон піку — Марія тримала руку на пульсі: креативи, тести, оптимізація. За два місяці ми зрозуміли, які офери реально «їдуть», і масштабували саме їх.',
  },
  {
    name: 'Дмитро Панченко',
    text: 'B2B-сторінка виглядала «як у всіх». Після редизайну стрічки та підказок у сторіс клієнти стали частіше писати в DM з конкретними запитами — менше «просто цікаво».',
  },
  {
    name: 'Катерина Литвин',
    text: 'Медична ніша — чутливо до формулювань. Дуже ціную, що можна було спокійно узгоджувати кожен блок: і юридично коректно, і людяно для пацієнтів.',
  },
  {
    name: 'Марко Ткаченко',
    text: 'Зробили серію коротких відео під продукт — без «вайбу ради вайбу». Продажі з органіки виросли не завдяки хайпу, а завдяки ясній подачі переваг.',
  },
  {
    name: 'Юлія Савченко',
    text: 'Для івентів важливий темп публікацій. Ми встигали анонси, дедлайни раннього білету й live-контент — і це не виглядало як паніка в останній день.',
  },
  {
    name: 'Ігор Гнатюк',
    text: 'Контент-план + реклама + аналітика в одному ритмі. Нарешті бачимо не «лайки», а заявки та вартість звернення — це те, за що платимо маркетингу.',
  },
  {
    name: 'Леся Шевченко',
    text: 'Дуже делікатно працювали з візуалом: не переробили бренд «з нуля», а підсилили те, що вже було впізнаваним. Клієнти відмічають, що стрічка стала ціліснішою.',
  },
]

const reviewsEs = [
  {
    name: 'Olia Oleksyn',
    text: 'Todo muy estructurado y claro, con mucha información. Es mi segundo curso con el equipo y me encanta el enfoque y la cantidad de material. A veces pensaba «esto está súper denso» — y eso, para mí, es señal de calidad.',
  },
  {
    name: 'Svitlana Lototska',
    text: 'Lo repetiré mil veces: la gente y la comunidad es lo más valioso. Reunieron a personas increíbles y el acompañamiento fue excelente. Gracias porque nadie se quedó sin respuesta y nos unieron con una idea común.',
  },
  {
    name: 'Sofiia Fuchylo',
    text: 'El curso fue un aire fresco. Trabajo en SMM y ya había hecho otro programa — es clave para ordenar ideas. A mitad de camino noté que el mentoring suma aún más. Disfruté mucho las clases; da pena que termine: los productos enganchan. Gracias al equipo.',
  },
  {
    name: 'Natalia Koval',
    text: 'Subimos alcance en historias y mantuvimos leads desde ads sin «quemar» presupuesto. Los informes son claros y las revisiones rápidas: por fin el SMM se siente como un sistema, no como caos en el chat.',
  },
  {
    name: 'Víctor Rudenko',
    text: 'Sector inmobiliario: el contenido se ve más sobrio y premium, y los leads de Instagram entran al CRM sin copiar a mano. Recomiendo si buscas un enfoque adulto de estrategia.',
  },
  {
    name: 'Anna Melnyk',
    text: 'En temporada alta, María llevó creatividades, tests y optimización. En dos meses vimos qué ofertas funcionan y escalamos solo esas.',
  },
  {
    name: 'Dmytro Panchenko',
    text: 'La página B2B parecía «como todas». Tras rediseñar el feed y las pistas en historias, más clientes escriben al DM con consultas concretas.',
  },
  {
    name: 'Kateryna Lytvyn',
    text: 'En salud hay que cuidar el tono. Valoré poder validar cada bloque: correcto legalmente y humano para pacientes.',
  },
  {
    name: 'Marko Tkachenko',
    text: 'Hicimos vídeos cortos orientados al producto, sin postureo. Las ventas orgánicas subieron por claridad de beneficios, no por hype.',
  },
  {
    name: 'Yuliia Savchenko',
    text: 'En eventos importa el ritmo. Cumplimos anuncios, early bird y contenido live sin parecer un incendio el último día.',
  },
  {
    name: 'Ihor Hnatiuk',
    text: 'Plan de contenidos, ads y analítica al mismo ritmo. Por fin miramos solicitudes y coste por contacto, no solo likes.',
  },
  {
    name: 'Lesia Shevchenko',
    text: 'Trabajaron el visual con delicadeza: no rehicieron la marca desde cero, sino que reforzaron lo reconocible. Los clientes notan un feed más coherente.',
  },
]

const reviewsEn = [
  {
    name: 'Olia Oleksyn',
    text: 'Everything is structured, clear, and packed with information. This is my second course with the team and I love the approach and volume of material. Sometimes I thought “this is intense” — for me that’s a quality signal.',
  },
  {
    name: 'Svitlana Lototska',
    text: 'I’ll repeat it endlessly: people and community are what I value most. You brought great people together and ran excellent community management. Thanks for making sure nobody was left unanswered.',
  },
  {
    name: 'Sofiia Fuchylo',
    text: 'The course felt like a breath of fresh air. I work in SMM and had already taken another programme — it’s a must for structure. Midway I realised mentoring adds even more. Loved the lessons; your products are addictive. Thanks to the team.',
  },
  {
    name: 'Natalia Koval',
    text: 'We lifted story reach and kept steady leads from ads without burning budget. Reports are clear, revisions fast — SMM finally feels like a system, not chat chaos.',
  },
  {
    name: 'Viktor Rudenko',
    text: 'Real estate niche: content looks calmer and more premium, Instagram leads flow into the CRM without manual copy-paste. Recommend if you want a grown-up strategy approach.',
  },
  {
    name: 'Anna Melnyk',
    text: 'Peak-season ads — María kept a tight pulse on creatives, tests, and optimisation. In two months we knew which offers actually worked and scaled those.',
  },
  {
    name: 'Dmytro Panchenko',
    text: 'Our B2B page looked “like everyone else’s”. After redesigning the feed and story prompts, clients DM with concrete questions more often.',
  },
  {
    name: 'Kateryna Lytvyn',
    text: 'Healthcare is sensitive to wording. I appreciated being able to calmly align every block: legally correct and human for patients.',
  },
  {
    name: 'Marko Tkachenko',
    text: 'We made short product-led videos without fluff. Organic sales grew from clear benefits, not hype.',
  },
  {
    name: 'Yuliia Savchenko',
    text: 'For events, publishing tempo matters. We hit announcements, early-bird deadlines, and live content without last-day panic.',
  },
  {
    name: 'Ihor Hnatiuk',
    text: 'Content plan, ads, and analytics in one rhythm. Finally we look at inquiries and cost per lead, not just likes.',
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
  '10-idey-kontent-dnya-materi': blogBlockUa(
    '10-idey-kontent-dnya-materi',
    '10 ідей для контенту в соцмережах до Дня матері: що публікувати',
    [
      'День матері — сильний емоційний інфопривід: аудиторія вже в настрої ділитися історіями, фото та подяками. Завдання бренду — не «продати зі сцени», а підтримати цей настрій і м’яко показати свої цінності.',
      'Підійдуть добірки подарунків і сервісів, чекліст «як привітати маму, якщо ви в різних містах», історії команди про їхніх мам, UGC з хештегом кампанії, колаборації з локальними майстрами та квітковими студіями.',
      'Важливо заздалегідь затвердити візуальний ключ (кольори, шрифти) і один основний меседж — так стрічка виглядатиме цілісно, а не як набір разових постів. Залиште місце для легкого гумору та чесних історій — вони збирають більше збережень, ніж сухі промо.',
    ],
  ),
  'doslidzhennya-instagram-45-brendiv': blogBlockUa(
    'doslidzhennya-instagram-45-brendiv',
    'Чому з ростом підписників падає взаємодія, скільки треба постити і як збільшити залученість аудиторії? Дослідження 45 українських брендів в Instagram',
    [
      'Ми проаналізували публічні акаунти 45 брендів з різних ніш: від локальних кавʼярень до e-commerce. Метрики знімали за останні 90 днів — охоплення, ER, частота публікацій і формат (Reels, каруселі, Stories).',
      'Головний висновок: залученість рідко «падає сама по собі» — частіше вона знижується через однотипний контент, різкий стрибок частоти без тесту форматів або ігнор коментарів у перші години після публікації.',
      'Бренди, які стабільно відповідають у коментарях і закріплюють один сильний CTA на тиждень, тримали ER вище середнього навіть при аудиторії 50k+. Окремо виділимо роль Reels як джерела нових підписників — але без «людського» закріплення вони погано конвертують у лояльність.',
    ],
  ),
  'kontent-plan-smm-traven-2026': blogBlockUa(
    'kontent-plan-smm-traven-2026',
    'Контент-план для SMM на травень 2026: інфоприводи та ідеї дописів і відео',
    [
      'Травень поєднує свята, довгі вікенди й старт літнього сезону для багатьох ніш. У матеріалі — календар інфоприводів, приклади рубрик на місяць і шаблон таблиці для команди.',
      'Зверніть увагу на баланс: освітні каруселі дають збереження, Reels — охоплення, Stories — довіру та опитування. Не намагайтеся закрити все кожного дня: краще 3–4 якості-публікації на тиждень плюс системні Stories.',
      'Додайте колонку «джерело ідеї» (конкурент, клієнтський запит, тренд TikTok) — так простіше не застрягати в середині місяця. Оновлюйте план раз на два тижні за результатами аналітики.',
    ],
  ),
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
  '10-idey-kontent-dnya-materi': {
    title: '10 ideas de contenido en redes para el Día de la Madre: qué publicar',
    body: [
      'El Día de la Madre es un gancho emocional fuerte: la audiencia ya quiere compartir historias y fotos. El reto de la marca es acompañar ese estado de ánimo sin “vender desde el escenario”.',
      'Funcionan guías de regalos, checklists si mamá está en otra ciudad, historias del equipo, UGC con hashtag y colaboraciones locales.',
      'Define una llave visual y un mensaje principal con antelación: el feed se verá cohesivo y no como posts sueltos.',
    ],
  },
  'doslidzhennya-instagram-45-brendiv': {
    title:
      '¿Por qué baja el engagement al crecer la comunidad, cuánto publicar y cómo mejorar la interacción? Estudio de 45 marcas ucranianas en Instagram',
    body: [
      'Analizamos cuentas públicas de 45 marcas de distintos sectores durante 90 días: alcance, ER, frecuencia y formato (Reels, carruseles, Stories).',
      'Conclusión: el engagement rara vez “cae solo”; suele caer por contenido repetitivo, subir la frecuencia sin testear formatos o ignorar comentarios en la primera hora.',
      'Las marcas que responden en comentarios y mantienen un CTA fuerte por semana sostienen mejor el ER incluso con 50k+ seguidores.',
    ],
  },
  'kontent-plan-smm-traven-2026': {
    title: 'Plan de contenidos SMM para mayo de 2026: hooks e ideas de posts y vídeo',
    body: [
      'Mayo combina festividades, puentes y el arranque de temporada para muchas categorías: calendario de hooks, ideas de columnas y plantilla para el equipo.',
      'Equilibra carruseles educativos (guardados), Reels (alcance) y Stories (confianza y encuestas). Mejor 3–4 piezas de calidad por semana que saturar cada día.',
      'Añade una columna “fuente de la idea” (competidor, petición del cliente, tendencia) y revisa el plan cada dos semanas con analítica.',
    ],
  },
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
  '10-idey-kontent-dnya-materi': {
    title: "10 social content ideas for Mother's Day: what to publish",
    body: [
      "Mother's Day is a strong emotional hook: people already want to share stories and photos. The brand's job is to support that mood rather than selling from the stage.",
      'Gift guides, checklists for long-distance families, team stories, UGC with a campaign hashtag, and local collabs work well.',
      'Lock a visual key and one main message early so the feed feels cohesive, not like random one-offs.',
    ],
  },
  'doslidzhennya-instagram-45-brendiv': {
    title:
      'Why engagement drops as followers grow, how often to post, and how to improve it — research on 45 Ukrainian brands on Instagram',
    body: [
      'We analysed public accounts of 45 brands across niches for 90 days: reach, ER, cadence, and format (Reels, carousels, Stories).',
      'Key insight: engagement rarely “falls by itself”; it often drops due to repetitive content, sudden frequency spikes without format tests, or ignoring comments in the first hour.',
      'Brands that reply in comments and keep one strong weekly CTA held ER above average even at 50k+ followers.',
    ],
  },
  'kontent-plan-smm-traven-2026': {
    title: 'SMM content plan for May 2026: hooks and ideas for posts and video',
    body: [
      'May mixes holidays, long weekends, and season kick-off for many niches — the article includes a hook calendar, monthly column ideas, and a team sheet template.',
      'Balance educational carousels (saves), Reels (reach), and Stories (trust and polls). Prefer 3–4 quality posts per week plus consistent Stories.',
      'Add an “idea source” column (competitor, client ask, trend) and refresh the plan every two weeks using analytics.',
    ],
  },
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

const casesPaversUa = {
  backHome: 'На головну',
  imageAlt: 'Кейс виробника бруківки',
  heroBadge: 'Кейс №1 · Виробництво',
  title: 'Виробник бруківки для подвірʼя',
  subtitle: 'B2B + B2C стратегія · 2+ роки співпраці · Таргетована реклама + SMM',
  metricLabels: ['Прибуток щомісяця', 'ROAS на рекламу', 'Бюджет на рекламу', 'До стабільного результату'],
  metricValues: ['30 000€', '×20', '1 500€', '6 міс.'],
  taskTitle: 'Задача',
  taskBody:
    'Клієнт — виробник бруківки для подвірʼя — працював у висококонкурентній ніші без сильної присутності в соцмережах. Потрібно було вибудувати системний SMM що охоплює одночасно два сегменти: приватних замовників (B2C) та будівельні компанії і дизайнерів (B2B).',
  doneTitle: 'Що було зроблено',
  donePill: 'Фокус на системність',
  deliverables: [
    {
      title: 'Подвійна контент-стратегія',
      body: 'Окремі меседжі для B2C (краса подвірʼя, натхнення, до/після) та B2B (надійність, обсяги, умови співпраці) з синхронізацією голосу бренду.',
    },
    {
      title: 'Таргетована реклама у високій конкуренції',
      body: 'Запуск окремих рекламних кампаній для кожного сегменту: точний таргетинг, тест креативів і постійне прибирання неефективних звʼязок.',
    },
    {
      title: 'Командна робота з боку клієнта',
      body: 'Спільні узгодження з виробництвом і відділом продажів — швидка реакція на сезонність, промо та запити ринку без розриву комунікації.',
    },
    {
      title: 'Системна аналітика та масштабування',
      body: 'Щомісячний розбір результатів, оптимізація бюджету й масштабування тільки тих звʼязок, що підтверджені даними.',
    },
  ],
  ctaKicker: 'Далі',
  ctaTitle: 'Готові обговорити подібний кейс для вашої ніші?',
  ctaBody:
    'Залиште контакт у футері або напряму в соцмережах — повернусь із першими гіпотезами та форматами співпраці.',
  ctaButton: 'Повернутись на лендінг',
}

const casesPaversEs = {
  backHome: 'Volver al inicio',
  imageAlt: 'Caso: fabricante de adoquines',
  heroBadge: 'Caso #1 · Producción',
  title: 'Fabricante de adoquines para patios',
  subtitle: 'Estrategia B2B + B2C · 2+ años colaborando · Ads segmentados + SMM',
  metricLabels: ['Beneficio mensual', 'ROAS en ads', 'Presupuesto de ads', 'Hasta resultado estable'],
  metricValues: ['30 000€', '×20', '1 500€', '6 meses'],
  taskTitle: 'Reto',
  taskBody:
    'Cliente: fabricante de adoquines para patios, en un nicho competitivo sin fuerte presencia social. Había que construir un SMM sistemático para dos segmentos: clientes privados (B2C) y empresas de construcción y diseñadores (B2B).',
  doneTitle: 'Qué hicimos',
  donePill: 'Enfoque en sistema',
  deliverables: [
    {
      title: 'Estrategia de contenido dual',
      body: 'Mensajes separados para B2C (belleza del patio, inspiración, antes/después) y B2B (fiabilidad, volúmenes, condiciones) con voz de marca alineada.',
    },
    {
      title: 'Publicidad segmentada en alta competencia',
      body: 'Campañas separadas por segmento: targeting fino, test de creatividades y limpieza continua de combinaciones débiles.',
    },
    {
      title: 'Trabajo conjunto con el cliente',
      body: 'Aprobaciones con producción y ventas: respuesta rápida a estacionalidad, promos y demanda del mercado sin romper la comunicación.',
    },
    {
      title: 'Analítica y escalado',
      body: 'Revisión mensual de resultados, optimización de presupuesto y escalado solo de lo que confirman los datos.',
    },
  ],
  ctaKicker: 'Siguiente',
  ctaTitle: '¿Hablamos de un caso parecido para tu nicho?',
  ctaBody: 'Déjame un contacto en el pie o en redes: vuelvo con primeras hipótesis y formatos de colaboración.',
  ctaButton: 'Volver al landing',
}

const casesPaversEn = {
  backHome: 'Back to home',
  imageAlt: 'Case study: paving manufacturer',
  heroBadge: 'Case #1 · Manufacturing',
  title: 'Paving manufacturer for courtyards',
  subtitle: 'B2B + B2C strategy · 2+ years working together · Targeted ads + SMM',
  metricLabels: ['Monthly profit', 'ROAS on ads', 'Ad budget', 'Time to stable results'],
  metricValues: ['€30,000', '×20', '€1,500', '6 mo.'],
  taskTitle: 'Challenge',
  taskBody:
    'Client — paving manufacturer for courtyards — in a highly competitive niche with weak social presence. We needed systematic SMM covering both private homeowners (B2C) and construction firms and designers (B2B).',
  doneTitle: 'What we delivered',
  donePill: 'Systems-first focus',
  deliverables: [
    {
      title: 'Dual content strategy',
      body: 'Separate messaging for B2C (courtyard beauty, inspiration, before/after) and B2B (reliability, volumes, partnership terms) with a synced brand voice.',
    },
    {
      title: 'Targeted ads under high competition',
      body: 'Separate campaigns per segment: precise targeting, creative testing, and continuous pruning of weak combinations.',
    },
    {
      title: 'Teamwork on the client side',
      body: 'Joint approvals with production and sales — fast reactions to seasonality, promos, and market demand without breaking the thread.',
    },
    {
      title: 'Analytics and scaling',
      body: 'Monthly performance reviews, budget optimisation, and scaling only combinations validated by data.',
    },
  ],
  ctaKicker: 'Next',
  ctaTitle: 'Ready to discuss a similar case for your niche?',
  ctaBody: 'Leave a contact in the footer or reach out on social — I’ll come back with first hypotheses and collaboration formats.',
  ctaButton: 'Return to landing',
}

function baseLocale(
  nav,
  header,
  common,
  hero,
  stats,
  projectSpotlight,
  about,
  casesPreview,
  process,
  testimonials,
  blog,
  reviews,
  casesPage,
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
    casesPreview,
    process,
    testimonials,
    blog,
    reviews,
    casesPage,
    footer,
  }
}

const navUa = { about: 'Про мене', how: 'Як працюю', cases: 'Кейси', reviews: 'Відгуки', blog: 'Блог', contacts: 'Контакти' }
const navEs = { about: 'Sobre mí', how: 'Cómo trabajo', cases: 'Casos', reviews: 'Reseñas', blog: 'Blog', contacts: 'Contacto' }
const navEn = { about: 'About', how: 'How I work', cases: 'Cases', reviews: 'Reviews', blog: 'Blog', contacts: 'Contact' }

const headerUa = {
  casesCta: 'Детальніше про кейси',
  navTitle: 'Навігація',
  menu: 'Меню',
  closeMenu: 'Закрити меню',
  langGroup: 'Мова сайту',
}
const headerEs = {
  casesCta: 'Más sobre los casos',
  navTitle: 'Navegación',
  menu: 'Menú',
  closeMenu: 'Cerrar menú',
  langGroup: 'Idioma del sitio',
}
const headerEn = {
  casesCta: 'More on cases',
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
  kicker: 'Обраний проєкт',
  title: 'Виробник бруківки для подвірʼя',
  subtitle: 'B2B + B2C стратегія · 2+ роки співпраці · Таргетована реклама + SMM',
  pills: ['30 000€ прибуток щомісяця', '×20 ROAS на рекламу', '1 500€ бюджет на рекламу', '6 міс. до стабільного результату'],
  taskTitle: 'Задача',
  taskBody:
    'Клієнт — виробник бруківки для подвірʼя — у висококонкурентній ніші без сильної присутності в соцмережах. Потрібно було вибудувати системний SMM для двох сегментів: приватних замовників (B2C) та будівельних компаній і дизайнерів (B2B).',
}

const projectEs = {
  imageAlt: 'Caso: fabricante de adoquines',
  kicker: 'Proyecto destacado',
  title: 'Fabricante de adoquines para patios',
  subtitle: 'Estrategia B2B + B2C · 2+ años · Ads + SMM',
  pills: ['30 000€ beneficio mensual', '×20 ROAS en ads', '1 500€ presupuesto ads', '6 meses a resultado estable'],
  taskTitle: 'Reto',
  taskBody:
    'Cliente fabricante de adoquines, nicho competitivo y poca presencia social. Había que montar un SMM sistemático para B2C (particulares) y B2B (constructoras y diseñadores).',
}

const projectEn = {
  imageAlt: 'Case: paving manufacturer',
  kicker: 'Featured project',
  title: 'Paving manufacturer for courtyards',
  subtitle: 'B2B + B2C strategy · 2+ years · Targeted ads + SMM',
  pills: ['€30k monthly profit', '×20 ROAS on ads', '€1.5k ad budget', '6 mo. to stable results'],
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

const casesPreviewUa = {
  kicker: 'Портфоліо',
  title: 'Мої роботи',
  case1Title: 'Виробник бруківки для подвірʼя',
  case1Meta: 'Україна · 2+ роки співпраці',
  case2Title: 'Тури в Африку',
  case2Meta: 'ОАЕ · Туризм',
  case3Title: 'Стоматологія',
  case3Meta: 'Україна · Медицина',
}

const casesPreviewEs = {
  kicker: 'Portafolio',
  title: 'Mis trabajos',
  case1Title: 'Fabricante de adoquines para patios',
  case1Meta: 'Ucrania · 2+ años',
  case2Title: 'Viajes a África',
  case2Meta: 'EAU · Turismo',
  case3Title: 'Clínica dental',
  case3Meta: 'Ucrania · Salud',
}

const casesPreviewEn = {
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
}

const footerEs = {
  title: 'Empecemos con una conversación',
  lead: 'Cuéntame tu negocio y tus metas: definimos el formato de colaboración y los siguientes pasos sin burocracia extra.',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  phone: 'Teléfono',
  email: 'Email',
  rights: 'Todos los derechos reservados.',
}

const footerEn = {
  title: "Let's start with a conversation",
  lead: 'Tell me about your business and goals — we’ll pick a collaboration format and next steps without extra bureaucracy.',
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  phone: 'Phone',
  email: 'Email',
  rights: 'All rights reserved.',
}

const ua = baseLocale(
  navUa,
  headerUa,
  commonUa,
  heroUa,
  statsUa,
  projectUa,
  aboutUa,
  casesPreviewUa,
  sharedProcessUa,
  testimonialsUa,
  uaBlog,
  { items: reviewsUa, ...reviewsPageUa },
  { pavers: casesPaversUa },
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
  casesPreviewEs,
  sharedProcessEs,
  testimonialsEs,
  esBlog,
  { items: reviewsEs, ...reviewsPageEs },
  { pavers: casesPaversEs },
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
  casesPreviewEn,
  sharedProcessEn,
  testimonialsEn,
  enBlog,
  { items: reviewsEn, ...reviewsPageEn },
  { pavers: casesPaversEn },
  footerEn,
)

writeFileSync(join(outDir, 'ua.json'), JSON.stringify(ua, null, 2), 'utf8')
writeFileSync(join(outDir, 'es.json'), JSON.stringify(es, null, 2), 'utf8')
writeFileSync(join(outDir, 'en.json'), JSON.stringify(en, null, 2), 'utf8')

console.log('Wrote src/locales/ua.json, es.json, en.json')
