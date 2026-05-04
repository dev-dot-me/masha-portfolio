/** @param {string} text */
export function h2(text) {
  return { kind: 'h2', text }
}

/** @param {string} text */
export function h3(text) {
  return { kind: 'h3', text }
}

/** @param {string} text */
export function quote(text) {
  return { kind: 'quote', text }
}

/** @typedef {{ documentTitle: string, heroKicker: string, body: unknown[] }} AboutPagePayload */

/** @type {AboutPagePayload} */
const es = {
  documentTitle: 'Sobre mí · María SMM',
  heroKicker: 'ESPECIALISTA EN SMM · CREADORA DE CONTENIDO',
  body: [
    '¡Hola, soy María!',
    'Más de 3 años ayudando a marcas a atraer clientes, construir una imagen reconocible y aumentar ventas a través de Instagram, Facebook, TikTok y LinkedIn. Experiencia en mercados de EE.UU., Bulgaria, Eslovaquia y Ucrania.',
    h2('De la idea al resultado — todo en mis manos'),
    'Empecé como freelance y al mismo tiempo cursé formación académica en España — Grado Superior en Marketing y Publicidad en Valencia. La combinación de teoría y práctica me dio una base única: entiendo los algoritmos de las redes sociales, la psicología del consumidor y los objetivos de negocio del cliente.',
    'En más de 3 años pasé de gestionar cuentas individuales a un ciclo completo de producción SMM: estrategia → contenido → grabación → diseño → publicidad → analítica. Sin intermediarios. Sin demoras innecesarias.',
    'Paralelamente realicé prácticas en agencias de marketing españolas — Arquetipo y La Comunicación — donde aprendí a trabajar con marcas en mercados hispanohablantes.',
    h2('MERCADOS DONDE HE TRABAJADO'),
    '🇺🇸 EE.UU.',
    '🇧🇬 Bulgaria',
    '🇸🇰 Eslovaquia',
    '🇺🇦 Ucrania',
    quote(
      '«Mi enfoque es la sistematización. Una cuenta bonita sin estrategia no vende. Publicidad sin contenido de calidad es dinero tirado. Yo construyo todo junto.»',
    ),
    h2('EXPERIENCIA PROFESIONAL'),
    h3('Qué he hecho y dónde'),
    h3('2023 — hoy · EE.UU., Bulgaria, Eslovaquia, Ucrania (online)'),
    'Freelance Social Media Manager · Autónoma · Experiencia internacional.',
    'Gestión de Instagram, Facebook, TikTok y LinkedIn para más de 20 clientes en distintos sectores.',
    'Ciclo completo de producción: grabación foto/vídeo, edición, diseño (Canva, Figma, Illustrator, CapCut).',
    'Generación de foto y vídeo con IA para proyectos de clientes (Midjourney, Runway ML, Kling AI).',
    'Configuración y optimización de Meta Ads — desde la estrategia hasta el análisis de resultados.',
    'Construcción de embudos de ventas: lead magnets, calentamiento de audiencia, contenido de conversión.',
    'Desarrollo de metodología propia y kit de herramientas personales para la gestión eficaz de cuentas.',
    h3('2026 · Valencia, España — Prácticas en Marketing y Publicidad'),
    'Agencia «La Comunicación». Trabajo con contenido, estrategias SMM y materiales publicitarios de la agencia. Prácticas en el marco del Grado Superior de Marketing y Publicidad.',
    h3('2025 · Valencia, España — Prácticas en Marketing y Publicidad'),
    'Agencia Arquetipo. Gestión de redes sociales para clientes de la agencia. Elaboración de planes de contenido, visuales y textos para el mercado hispanohablante. Participación en el desarrollo y análisis de campañas publicitarias.',
    h3('2024 · Valencia, España — Prácticas — Actividades Comerciales'),
    'Sprinter. Actividades comerciales y gestión de redes sociales en el marco del Grado Medio. Apoyo en la estrategia de contenidos e interacción con clientes.',
    h2('HERRAMIENTAS Y HABILIDADES'),
    h3('Con qué trabajo'),
    h3('REDES SOCIALES'),
    'Instagram, Facebook, TikTok, LinkedIn, Meta Business Suite.',
    h3('DISEÑO'),
    'Canva, Figma, Adobe Illustrator, Photoshop.',
    h3('VÍDEO Y EDICIÓN'),
    'CapCut, Adobe, TikTok Editor.',
    h3('HERRAMIENTAS IA'),
    'Midjourney, Runway ML, Kling AI, ChatGPT, Claude.',
    h3('PUBLICIDAD Y ANALÍTICA'),
    'Meta Ads Manager, Facebook Pixel, Instagram Insights, Google Analytics.',
    h3('PLANIFICACIÓN'),
    'Notion, Trello, Content office.',
    h2('FORMACIÓN ACADÉMICA'),
    h3('Mi base académica'),
    '2024 — 2026 · Grado Superior · Marketing y Publicidad · Valencia, España.',
    '2022 — 2024 · Grado Medio · Actividades Comerciales.',
    h3('Formación complementaria'),
    'Cursos y certificados: SMM, TikTok, contenido, IA, diseño.',
    h2('IDIOMAS'),
    h3('Hablo con tu audiencia'),
    'Ucraniano — nativo.',
    'Español — B2.',
    'Inglés — B2.',
    'Ruso — comprensión pasiva.',
  ],
}

/** @type {AboutPagePayload} */
const en = {
  documentTitle: 'About me · María SMM',
  heroKicker: 'SMM SPECIALIST · CONTENT CREATOR',
  body: [
    'Hi, I’m María!',
    'For over three years I have helped brands attract customers, build a recognizable image, and grow sales through Instagram, Facebook, TikTok, and LinkedIn. I have worked with markets in the U.S., Bulgaria, Slovakia, and Ukraine.',
    h2('From idea to result — all in one place'),
    'I started as a freelancer while completing my formal education in Spain — a Higher Degree in Marketing and Advertising in Valencia. Combining theory and practice gave me a solid foundation: I understand social algorithms, consumer psychology, and each client’s business goals.',
    'In three-plus years I moved from managing single accounts to a full SMM production cycle: strategy → content → filming → design → ads → analytics. No middlemen. No unnecessary delays.',
    'Alongside that I interned at Spanish marketing agencies — Arquetipo and La Comunicación — learning to work with brands in Spanish-speaking markets.',
    h2('MARKETS I HAVE WORKED IN'),
    '🇺🇸 United States',
    '🇧🇬 Bulgaria',
    '🇸🇰 Slovakia',
    '🇺🇦 Ukraine',
    quote(
      '«My focus is systematization. A pretty account without strategy does not sell. Ads without quality content is wasted money. I build it all together.»',
    ),
    h2('PROFESSIONAL EXPERIENCE'),
    h3('What I have done and where'),
    h3('2023 — today · U.S., Bulgaria, Slovakia, Ukraine (online)'),
    'Freelance Social Media Manager · Self-employed · International experience.',
    'Managing Instagram, Facebook, TikTok, and LinkedIn for 20+ clients across industries.',
    'Full production cycle: photo/video shoot, editing, design (Canva, Figma, Illustrator, CapCut).',
    'AI-generated photo and video for client projects (Midjourney, Runway ML, Kling AI).',
    'Meta Ads setup and optimization — from strategy to performance analysis.',
    'Sales funnels: lead magnets, audience warming, conversion-focused content.',
    'Proprietary methodology and a personal toolkit for efficient account management.',
    h3('2026 · Valencia, Spain — Marketing & Advertising internship'),
    'Agency «La Comunicación». Content, SMM strategy, and advertising materials. Internship as part of the Higher Degree in Marketing and Advertising.',
    h3('2025 · Valencia, Spain — Marketing & Advertising internship'),
    'Agency Arquetipo. Social media for agency clients. Content plans, visuals, and copy for Spanish-speaking markets. Campaign development and analysis.',
    h3('2024 · Valencia, Spain — Internship · Business Activities'),
    'Sprinter. Sales activities and social media within the vocational degree. Support with content strategy and client communication.',
    h2('TOOLS AND SKILLS'),
    h3('What I use'),
    h3('SOCIAL'),
    'Instagram, Facebook, TikTok, LinkedIn, Meta Business Suite.',
    h3('DESIGN'),
    'Canva, Figma, Adobe Illustrator, Photoshop.',
    h3('VIDEO & EDITING'),
    'CapCut, Adobe, TikTok Editor.',
    h3('AI TOOLS'),
    'Midjourney, Runway ML, Kling AI, ChatGPT, Claude.',
    h3('ADS & ANALYTICS'),
    'Meta Ads Manager, Facebook Pixel, Instagram Insights, Google Analytics.',
    h3('PLANNING'),
    'Notion, Trello, Content office.',
    h2('EDUCATION'),
    h3('Formal training'),
    '2024 — 2026 · Higher Degree · Marketing and Advertising · Valencia, Spain.',
    '2022 — 2024 · Vocational Degree · Business Activities.',
    h3('Additional training'),
    'Courses and certificates: SMM, TikTok, content, AI, design.',
    h2('LANGUAGES'),
    h3('I speak to your audience'),
    'Ukrainian — native.',
    'Spanish — B2.',
    'English — B2.',
    'Russian — passive understanding.',
  ],
}

/** @type {AboutPagePayload} */
const ua = {
  documentTitle: 'Про мене · Марія SMM',
  heroKicker: 'СПЕЦІАЛІСТКА З SMM · КРЕАТОРКА КОНТЕНТУ',
  body: [
    'Привіт, я Марія!',
    'Понад 3 роки допомагаю брендам залучати клієнтів, будувати впізнаваний образ і збільшувати продажі через Instagram, Facebook, TikTok і LinkedIn. Досвід на ринках США, Болгарії, Словаччини та України.',
    h2('Від ідеї до результату — усе в одних руках'),
    'Починала як фрілансерка паралельно з навчанням у Іспанії — вищий цикл з маркетингу та реклами у Валенсії. Поєднання теорії й практики дало міцну базу: розумію алгоритми соцмереж, психологію споживача та бізнес-цілі клієнта.',
    'За три з гаком роки пройшла шлях від окремих акаунтів до повного циклу SMM: стратегія → контент → зйомка → дизайн → реклама → аналітика. Без зайвих посередників і зайвих затримок.',
    'Паралельно проходила практики в іспанських маркетингових агенціях — Arquetipo та La Comunicación — де навчилася працювати з брендами на іспаномовних ринках.',
    h2('РИНКИ, ДЕ Я ПРАЦЮВАЛА'),
    '🇺🇸 США',
    '🇧🇬 Болгарія',
    '🇸🇰 Словаччина',
    '🇺🇦 Україна',
    quote(
      '«Мій підхід — системність. Гарний профіль без стратегії не продає. Реклама без якісного контенту — викинуті гроші. Я будую все разом.»',
    ),
    h2('ПРОФЕСІЙНИЙ ДОСВІД'),
    h3('Що робила і де'),
    h3('2023 — досі · США, Болгарія, Словаччина, Україна (онлайн)'),
    'Freelance Social Media Manager · самозайнята · міжнародний досвід.',
    'Ведення Instagram, Facebook, TikTok і LinkedIn для понад 20 клієнтів у різних галузях.',
    'Повний цикл виробництва: фото/відео, монтаж, дизайн (Canva, Figma, Illustrator, CapCut).',
    'Генерація фото та відео з ШІ для проєктів клієнтів (Midjourney, Runway ML, Kling AI).',
    'Налаштування та оптимізація Meta Ads — від стратегії до аналізу результатів.',
    'Воронки продажів: лід-магніти, прогрів аудиторії, конверсійний контент.',
    'Власна методологія та набір інструментів для ефективного ведення акаунтів.',
    h3('2026 · Валенсія, Іспанія — практика з маркетингу та реклами'),
    'Агенція «La Comunicación». Контент, SMM-стратегії та рекламні матеріали. Практика в рамках вищого циклу з маркетингу та реклами.',
    h3('2025 · Валенсія, Іспанія — практика з маркетингу та реклами'),
    'Агенція Arquetipo. Соцмережі для клієнтів агенції. Контент-плани, візуали та тексти для іспаномовного ринку. Участь у розробці та аналізі рекламних кампаній.',
    h3('2024 · Валенсія, Іспанія — практика · комерційна діяльність'),
    'Sprinter. Комерційна діяльність і соцмережі в рамках середнього професійного ступеня. Підтримка контент-стратегії та комунікації з клієнтами.',
    h2('ІНСТРУМЕНТИ ТА НАВИЧКИ'),
    h3('З чим працюю'),
    h3('СОЦМЕРЕЖІ'),
    'Instagram, Facebook, TikTok, LinkedIn, Meta Business Suite.',
    h3('ДИЗАЙН'),
    'Canva, Figma, Adobe Illustrator, Photoshop.',
    h3('ВІДЕО ТА МОНТАЖ'),
    'CapCut, Adobe, TikTok Editor.',
    h3('ШІ-ІНСТРУМЕНТИ'),
    'Midjourney, Runway ML, Kling AI, ChatGPT, Claude.',
    h3('РЕКЛАМА ТА АНАЛІТИКА'),
    'Meta Ads Manager, Facebook Pixel, Instagram Insights, Google Analytics.',
    h3('ПЛАНУВАННЯ'),
    'Notion, Trello, Content office.',
    h2('ОСВІТА'),
    h3('Формальна база'),
    '2024 — 2026 · вищий цикл · маркетинг і реклама · Валенсія, Іспанія.',
    '2022 — 2024 · середній професійний ступінь · комерційна діяльність.',
    h3('Додаткова підготовка'),
    'Курси та сертифікати: SMM, TikTok, контент, ШІ, дизайн.',
    h2('МОВИ'),
    h3('Говорю з вашою аудиторією'),
    'Українська — рідна.',
    'Іспанська — B2.',
    'Англійська — B2.',
    'Російська — пасивне розуміння.',
  ],
}

/**
 * @param {string} locale
 * @returns {AboutPagePayload}
 */
export function getAboutPage(locale) {
  if (locale === 'en') return en
  if (locale === 'ua') return ua
  return es
}
