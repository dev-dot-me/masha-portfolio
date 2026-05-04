import { blogPostIaSmmTools } from './blogPostIaSmmTools.js'
import { blogPostInstagramAnalytics } from './blogPostInstagramAnalytics.js'

/**
 * Повний контент окремих статей (обхід величезних JSON у vue-i18n).
 * Ключ — slug з blogPostsMeta.js
 * Елементи body: рядок (абзац) або { kind: 'h2'|'h3'|'quote', text } — див. BlogPostView.
 */

const h2 = (text) => ({ kind: 'h2', text })
const h3 = (text) => ({ kind: 'h3', text })
const quote = (text) => ({ kind: 'quote', text })

const es = {
  title: '¿Qué es el SMM y cómo funciona el marketing en redes sociales?',
  excerpt:
    'Si llevas meses publicando en Instagram y sientes que das vueltas en círculos — no es falta de creatividad. Es falta de sistema. Aquí te explico qué es realmente el SMM y por qué cambia todo.',
  body: [
    '¿Te suena esta situación? «Llevamos meses en redes sociales, pero no nos funciona». Lo escucho constantemente de dueños de negocios, emprendedores y marcas que publican con constancia pero no ven resultados.',
    'Y el problema casi siempre es el mismo: lo que hacen no es SMM. Es simplemente actividad en redes sociales. Publicar por publicar. Existir sin dirección.',
    'La diferencia clave: el SMM no es sobre cuánto publicas — es sobre por qué publicas y qué quieres lograr con cada pieza de contenido. Sin esa respuesta, las redes sociales se convierten en un archivo bonito pero inútil.',
    h2('¿Qué es el SMM, exactamente?'),
    'SMM (Social Media Marketing) es el uso estratégico de las redes sociales para alcanzar objetivos de negocio concretos: visibilidad, confianza, leads, ventas, fidelización.',
    'No es «tener Instagram». Es decidir cómo tu marca habla con las personas en Instagram, TikTok, LinkedIn o donde esté tu audiencia — de forma que ellas realicen la acción que tú necesitas: seguirte, interesarse, confiar, comprar, volver.',
    quote(
      '«El SMM responde tres preguntas antes de publicar nada: ¿para qué lo hacemos?, ¿qué queremos lograr?, ¿cómo lo vamos a medir?» — María, especialista en SMM. Sin esas tres respuestas, cualquier contenido — por muy bonito que sea — es ruido.',
    ),
    h2('¿Para qué sirve el SMM a un negocio?'),
    'Aquí va la respuesta honesta: el SMM no sirve para «estar en redes porque todos están». Sirve para mover métricas que importan. Estos son los objetivos reales que puede alcanzar:',
    '🎯 Atraer clientes nuevos — Llegar a personas que aún no te conocen pero tienen exactamente el problema que tú resuelves.',
    '🤝 Construir confianza — Antes de comprar, las personas investigan. Las redes son donde deciden si confían en ti o no.',
    '💬 Conectar con tu comunidad — Crear una audiencia que vuelve, recomienda y defiende tu marca sin que tengas que pedírselo.',
    '📈 Aumentar las ventas — El contenido bien pensado convierte seguidores en clientes — sin vender de forma agresiva.',
    'Si tu SMM no está haciendo al menos una de estas cosas de forma medible — algo hay que revisar.',
    h2('Quién es tu audiencia en SMM (y por qué importa más de lo que crees)'),
    'El error más común que veo: definir la audiencia como «mujeres de 25 a 45 años en España». Eso no es una audiencia. Es una demografía.',
    h3('Tu audiencia real en SMM es'),
    '(1) Personas con un problema concreto — no «cualquier emprendedor», sino «emprendedores que publican en Instagram pero no ven clientes».',
    '(2) Con miedos y frenos específicos — ¿qué les impide comprar ahora mismo? ¿Precio, desconfianza, falta de tiempo?',
    '(3) Que aún no saben que tú eres la solución — tu contenido tiene que demostrarles que entiendes su problema mejor de lo que ellos mismos lo expresan.',
    'Cuando conoces a tu audiencia así de bien, el contenido fluye solo. Porque sabes exactamente qué decir, cómo decirlo y cuándo.',
    h2('Cómo elegir las redes sociales para tu SMM'),
    'El SMM no es sinónimo de Instagram. Es elegir los canales donde está tu audiencia y donde el formato encaja con tu mensaje.',
    h3('Diferencias clave'),
    '📸 Instagram — emoción, visual, contacto personal; ideal para B2C, moda, belleza, lifestyle, servicios.',
    '🎵 TikTok — atención rápida, alcance masivo; el formato vídeo corto es rey.',
    '👥 Facebook — comunidades, discusiones, audiencia adulta; útil para publicidad segmentada y grupos de nicho.',
    '💼 LinkedIn — expertise y B2B; indispensable si vendes a empresas o quieres posicionarte como referente.',
    'Mi consejo: empieza con 1–2 plataformas donde está tu audiencia y hazlas bien, antes de intentar estar en todas partes a medias.',
    h2('Qué incluye una estrategia SMM real'),
    'No confundas estrategia con calendario de contenidos. Un calendario te dice qué publicar. La estrategia te dice por qué, para quién y cómo medir si está funcionando.',
    h3('Los 6 pilares de una estrategia SMM'),
    '1. Objetivos — qué quieres lograr en 3–6 meses y métricas reales.',
    '2. Análisis de audiencia — quién es tu cliente ideal, qué le duele, dónde está y cómo consume contenido.',
    '3. Elección de plataformas — dónde tiene sentido estar.',
    '4. Pilares de contenido — temas recurrentes que representan tu marca.',
    '5. Plan de publicidad — cuándo y cómo amplificar con anuncios.',
    '6. Analítica y ajuste — qué métricas revisas y cómo decides con datos.',
    h2('Métricas que de verdad importan en SMM'),
    'Las métricas de vanidad (likes, número de seguidores) son un placebo. Lo que necesitas medir son los indicadores que se conectan con tus objetivos de negocio.',
    '✓ Alcance (reach) — cuántas personas únicas han visto tu contenido. Mide tu visibilidad real.',
    '✓ Engagement rate (ERR) — interacciones en relación al alcance. Mide si tu contenido conecta.',
    '✓ Crecimiento neto de seguidores — nuevos seguidores menos bajas; el crecimiento real de audiencia.',
    '✓ CTR (click-through rate) — si tu objetivo es tráfico al sitio web, esta métrica es crítica.',
    '✓ ROAS en publicidad — retorno sobre inversión publicitaria: cuánto ganas por cada euro invertido en anuncios.',
    quote(
      '«Las redes sociales por sí solas no venden, no generan confianza ni escalan un negocio. Eso lo hace el sistema que hay detrás. El SMM es ese sistema.»',
    ),
    h2('Conclusión: el SMM no es magia, es proceso'),
    'No hay fórmula universal. Lo que funciona para una marca de moda puede no funcionar para una constructora. Por eso el SMM empieza siempre con análisis — antes de crear ni una sola pieza de contenido.',
    'El proceso es siempre el mismo: analizar → planificar → crear → publicar → medir → ajustar. Y repetir. Cuando las redes sociales forman parte de ese ciclo, dejan de ser un dolor de cabeza y empiezan a trabajar para los objetivos del negocio.',
  ],
}

const en = {
  title: 'What is SMM and how does social media marketing work?',
  excerpt:
    'If you have been posting on Instagram for months and feel you are going in circles, it is not a lack of creativity. It is a lack of system. Here is what SMM really is and why it changes everything.',
  body: [
    'Sound familiar? “We have been on social media for months, but it is not working.” I hear it constantly from business owners and brands that post regularly yet see no results.',
    'The problem is almost always the same: what they do is not SMM. It is just activity on social networks. Posting for posting’s sake. Existing without direction.',
    'The key difference: SMM is not about how much you post — it is about why you post and what you want each piece of content to achieve. Without that answer, social media becomes a pretty but useless archive.',
    h2('What exactly is SMM?'),
    'SMM (Social Media Marketing) is the strategic use of social networks to reach concrete business goals: visibility, trust, leads, sales, retention.',
    'It is not “having Instagram”. It is deciding how your brand talks to people on Instagram, TikTok, LinkedIn, or wherever your audience is — so they take the action you need: follow, engage, trust, buy, return.',
    quote(
      '“SMM answers three questions before publishing anything: why are we doing this, what do we want to achieve, and how will we measure it?” — María, SMM specialist. Without those three answers, any content — however beautiful — is just noise.',
    ),
    h2('What is SMM for in a business?'),
    'Here is the honest answer: SMM is not for “being on social because everyone is”. It is for moving metrics that matter. These are the real objectives it can support:',
    '🎯 Attract new customers — Reach people who do not know you yet but have exactly the problem you solve.',
    '🤝 Build trust — Before buying, people research. Social is where they decide whether they trust you.',
    '💬 Connect with your community — Build an audience that returns, recommends, and stands up for your brand without being asked.',
    '📈 Increase sales — Thoughtful content turns followers into customers without aggressive selling.',
    'If your SMM is not doing at least one of these in a measurable way — something needs a review.',
    h2('Who is your audience in SMM (and why it matters more than you think)'),
    'The most common mistake I see: defining the audience as “women aged 25–45 in Spain”. That is not an audience. It is a demographic.',
    h3('Your real SMM audience is'),
    '(1) People with a specific problem — not “any entrepreneur” but “entrepreneurs who post on Instagram but do not get clients”.',
    '(2) With specific fears and blockers — what stops them from buying right now? Price, distrust, lack of time?',
    '(3) They do not yet know you are the solution — your content must show you understand their problem better than they can articulate it.',
    'When you know your audience that well, content flows naturally — you know what to say, how, and when.',
    h2('How to choose social networks for your SMM'),
    'SMM is not a synonym for Instagram. It is choosing channels where your audience is and where the format fits your message.',
    h3('Key differences'),
    '📸 Instagram — emotion, visuals, personal touch; strong for B2C, fashion, beauty, lifestyle, services.',
    '🎵 TikTok — fast attention, mass reach; short video wins.',
    '👥 Facebook — communities, discussions, mature audiences; great for targeted ads and niche groups.',
    '💼 LinkedIn — expertise and B2B; essential if you sell to companies or want authority in your sector.',
    'My advice: start with 1–2 platforms where your audience is and do them well before trying to be everywhere halfway.',
    h2('What a real SMM strategy includes'),
    'Do not confuse strategy with a content calendar. A calendar tells you what to post. Strategy tells you why, for whom, and how you will measure whether it works.',
    h3('The six pillars of an SMM strategy'),
    '1. Goals — what you want in 3–6 months and real metrics.',
    '2. Audience analysis — ideal client, pain, where they are, how they consume content.',
    '3. Platform choice — where it makes sense to be.',
    '4. Content pillars — recurring themes that represent your brand.',
    '5. Advertising plan — when and how to amplify with ads.',
    '6. Analytics and adjustment — which metrics you review and how you decide with data.',
    h2('Metrics that actually matter in SMM'),
    'Vanity metrics (likes, follower count) are a placebo. You need indicators tied to business goals.',
    '✓ Reach — unique people who saw your content; your real visibility.',
    '✓ Engagement rate (ERR) — interactions relative to reach; shows whether content resonates.',
    '✓ Net follower growth — new followers minus unfollows; your true audience growth.',
    '✓ CTR — critical if your goal is traffic to your website.',
    '✓ ROAS for ads — return on ad spend: how much you earn per euro invested.',
    quote(
      '“Social networks alone do not sell, build trust, or scale a business. The system behind them does. SMM is that system.”',
    ),
    h2('Conclusion: SMM is not magic, it is process'),
    'There is no universal formula. What works for a fashion brand may not work for a construction company. That is why SMM always starts with analysis — before creating a single piece of content.',
    'The process is always the same: analyse → plan → create → publish → measure → adjust. And repeat. When social media is part of that cycle, it stops being a headache and starts working for business goals.',
  ],
}

const ua = {
  title: 'Що таке SMM і як працює маркетинг у соцмережах?',
  excerpt:
    'Якщо ви місяцями ведете Instagram і відчуваєте, що ходите колом — це не брак креативу. Це брак системи. Тут пояснюю, що насправді таке SMM і чому це змінює все.',
  body: [
    'Знайомо? «Ми вже давно в соцмережах, але нам це не працює». Я чую це від власників бізнесу й брендів, які публікують регулярно, але не бачать результату.',
    'Проблема майже завжди одна й та сама: вони роблять не SMM, а просто «активність» у соцмережах. Публікації заради публікацій. Існування без напряму.',
    'Ключова різниця: SMM — не про те, скільки ви постите, а про те, навіщо ви постите і що хочете отримати з кожної одиниці контенту. Без цієї відповіді соцмережі перетворюються на гарний, але марний архів.',
    h2('Що таке SMM насправді?'),
    'SMM (Social Media Marketing) — це стратегічне використання соцмереж для досягнення конкретних бізнес-цілей: видимість, довіра, ліди, продажі, утримання.',
    'Це не «мати Instagram». Це рішення, як ваш бренд говорить з людьми в Instagram, TikTok, LinkedIn чи там, де ваша аудиторія — так, щоб вони зробили потрібну вам дію: підписатися, зацікавитися, довіритися, купити, повернутися.',
    quote(
      '«SMM відповідає на три запитання перед будь-якою публікацією: навіщо ми це робимо?, що хочемо досягти?, як це виміряємо?» — Марія, SMM-спеціалістка. Без цих трьох відповідей будь-який контент — хай навіть гарний — лише шум.',
    ),
    h2('Навіщо бізнесу SMM?'),
    'Чесна відповідь: SMM не для того, щоб «бути в соцмережах, бо всі там». Він для того, щоб рухати метрики, які мають значення. Ось реальні цілі:',
    '🎯 Залучити нових клієнтів — дійти до людей, які вас ще не знають, але мають саме ту проблему, яку ви вирішуєте.',
    '🤝 Побудувати довіру — перед покупкою люди досліджують. Соцмережі — місце, де вирішують, чи вам можна довіряти.',
    '💬 Зʼєднатися з комʼюніті — аудиторія, що повертається, рекомендує й відстоює бренд без прохань.',
    '📈 Збільшити продажі — продуманий контент перетворює підписників на клієнтів без агресивних продажів.',
    'Якщо ваш SMM вимірювано не робить хоча б одного з цього — варто переглянути підхід.',
    h2('Хто ваша аудиторія в SMM (і чому це важливіше, ніж здається)'),
    'Найчастіша помилка: опис аудиторії як «жінки 25–45 у Іспанії». Це не аудиторія, а демографія.',
    h3('Справжня аудиторія SMM'),
    '(1) Люди з конкретною проблемою — не «будь-який підприємець», а «підприємці, які ведуть Instagram, але не бачать клієнтів».',
    '(2) Зі своїми страхами й барʼєрами — що заважає купити зараз? Ціна, недовіра, брак часу?',
    '(3) Вони ще не знають, що ви — рішення — контент має показати, що ви розумієте проблему краще, ніж вони її формулюють.',
    'Коли ви так добре знаєте аудиторію, контент пишеться легше — ви знаєте, що, як і коли сказати.',
    h2('Як обрати соцмережі для SMM'),
    'SMM ≠ лише Instagram. Це вибір каналів, де є ваша аудиторія і де формат підходить під меседж.',
    h3('Коротко про різницю'),
    '📸 Instagram — емоція, візуал, особистий контакт; сильний для B2C, моди, краси, lifestyle, послуг.',
    '🎵 TikTok — швидка увага, масовий охоплення; коротке відео править балом.',
    '👥 Facebook — спільноти, дискусії, доросла аудиторія; зручно для таргету та нішевих груп.',
    '💼 LinkedIn — експертиза та B2B; must-have, якщо ви продаєте бізнесу або будуєте авторитет.',
    'Порада: почніть із 1–2 платформ, де ваша аудиторія, і зробіть їх добре, перш ніж бути «скрізь по трохи».',
    h2('Що входить у справжню SMM-стратегію'),
    'Не плутайте стратегію з контент-календарем. Календар каже, що постити. Стратегія — навіщо, для кого і як вимірювати результат.',
    h3('6 стовпів SMM-стратегії'),
    '1. Цілі — що за 3–6 місяців і які метрики.',
    '2. Аналіз аудиторії — ідеальний клієнт, біль, де він і як споживає контент.',
    '3. Вибір платформ — де логічно бути.',
    '4. Контентні стовпи — теми, що представляють бренд.',
    '5. План реклами — коли і як підсилювати оголошеннями.',
    '6. Аналітика й корекції — які метрики дивитесь і як приймаєте рішення.',
    h2('Метрики, які справді важливі в SMM'),
    'Ванітні метрики (лайки, кількість підписників) — плацебо. Потрібні показники, повʼязані з бізнес-цілями.',
    '✓ Охоплення (reach) — скільки унікальних людей побачило контент; реальна видимість.',
    '✓ Engagement rate (ERR) відносно охоплення — чи «чіпає» контент аудиторію.',
    '✓ Чисте зростання підписників — нові мінус відписки; реальне зростання аудиторії.',
    '✓ CTR — важливо, якщо ціль — трафік на сайт.',
    '✓ ROAS у рекламі — повернення на витрати на рекламу.',
    quote(
      '«Самі по собі соцмережі не продають, не будують довіру й не масштабують бізнес. Це робить система за ними. SMM — це та система.»',
    ),
    h2('Висновок: SMM — не магія, а процес'),
    'Універсальної формули немає. Те, що працює для модного бренду, може не зайти будівельній компанії. Тому SMM завжди починається з аналізу — ще до першого поста.',
    'Процес завжди той самий: аналіз → план → створення → публікація → вимірювання → корекція. І знову. Коли соцмережі входять у цей цикл, вони перестають бути головним болем і починають працювати на цілі бізнесу.',
  ],
}

export const blogPostOverrides = {
  'que-es-smm-marketing-redes': { es, en, ua },
  'ia-smm-herramientas-tiempo': blogPostIaSmmTools,
  'instagram-analitica-leer-datos': blogPostInstagramAnalytics,
}

export function getBlogPostOverride(slug, locale) {
  const pack = blogPostOverrides[slug]
  if (!pack) return null
  const code = locale === 'ua' ? 'ua' : locale === 'en' ? 'en' : 'es'
  return pack[code] || pack.es
}
