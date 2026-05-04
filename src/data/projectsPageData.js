import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import p31 from '../assets/project3-1.jpg'
import p32 from '../assets/project3-2.jpg'
import p33 from '../assets/project3-3.jpg'
import p34 from '../assets/project3-4.jpg'
import p35 from '../assets/project3-5.jpg'
import p36 from '../assets/project3-6.jpg'
import p37 from '../assets/project3-7.jpg'
import p38 from '../assets/project3-8.jpg'
import p39 from '../assets/project3-9.jpg'
import p310 from '../assets/project3-10.jpg'

const blokFortSlides = [p31, p32, p33, p34, p35, p36, p37, p38, p39, p310].map((src, i) => ({
  src,
  alt: `Blok-Fort · ${i + 1}`,
}))

/**
 * @typedef {{ label: string, value: string }} ProjectMetric
 * @typedef {{ title: string, subtitle: string, metrics: ProjectMetric[], contexto: string, queHice: string, resultado: string }} ProjectCopy
 */

/** @type {{ id: string, media: { type: 'single', src: string, alt: string } | { type: 'carousel', slides: { src: string, alt: string }[] }, copy: { es: ProjectCopy, en: ProjectCopy, ua: ProjectCopy } }[]} */
export const projectsCatalog = [
  {
    id: 'campamento-bulgaria',
    media: { type: 'single', src: project1, alt: 'Campamento infantil en Bulgaria' },
    copy: {
      es: {
        title: 'Campamento infantil en Bulgaria',
        subtitle: 'Nicho: campamentos para niños / educación · Duración: 5 meses',
        metrics: [
          { label: 'Presupuesto', value: '900€' },
          { label: 'Solicitudes', value: '34' },
          { label: 'Precio por solicitud', value: '~26€' },
          { label: 'Ingreso del cliente', value: '~11 900€' },
        ],
        contexto:
          'El cliente organiza un campamento infantil en Bulgaria. Quería formar grupos de niños para tres turnos en 8 meses. Necesitaba una persona que gestione redes sociales y publicidad para recibir solicitudes de padres.',
        queHice:
          'Empezamos desde cero. La página no generaba confianza. Primero cambié el diseño y el estilo del perfil.\n\nDespués creamos contenido: vídeos del campamento, opiniones de padres y explicaciones de las actividades.\n\nTambién lancé anuncios con diferentes creatividades y probé qué funciona mejor.',
        resultado:
          'Los grupos se llenaron en 3 meses (no en 8). Las familias llegaban con dudas resueltas y el flujo de solicitudes se mantuvo estable durante la campaña.',
      },
      en: {
        title: 'Kids’ summer camp in Bulgaria',
        subtitle: 'Niche: children’s camps / education · Duration: 5 months',
        metrics: [
          { label: 'Budget', value: '€900' },
          { label: 'Leads', value: '34' },
          { label: 'Cost per lead', value: '~€26' },
          { label: 'Client revenue', value: '~€11,900' },
        ],
        contexto:
          'The client runs a children’s camp in Bulgaria. They needed to fill three cohorts over eight months and wanted one person to run social media and ads so parents would send enquiries.',
        queHice:
          'We started from scratch: the page did not build trust, so I refreshed the layout and visual style first.\n\nThen we produced content — camp videos, parent testimonials, and clear explanations of activities.\n\nI also launched ads with multiple creatives and iterated on what performed best.',
        resultado:
          'Groups filled in 3 months instead of 8. Parents arrived better informed and the lead flow stayed steady through the campaign.',
      },
      ua: {
        title: 'Дитячий табір у Болгарії',
        subtitle: 'Ніша: дитячі табори / освіта · Тривалість: 5 місяців',
        metrics: [
          { label: 'Бюджет', value: '900€' },
          { label: 'Заявки', value: '34' },
          { label: 'Ціна заявки', value: '~26€' },
          { label: 'Дохід клієнта', value: '~11 900€' },
        ],
        contexto:
          'Клієнт організовує дитячий табір у Болгарії. Потрібно було набрати групи на три зміни за 8 місяців — і вести соцмережі та рекламу, щоб батьки залишали заявки.',
        queHice:
          'Почали з нуля: профіль не вселяв довіру — спочатку оновила дизайн і стиль сторінки.\n\nДалі зробили контент: відео з табору, відгуки батьків і зрозумілі описи активностей.\n\nЗапустила рекламу з різними креативами й тестувала, що працює краще.',
        resultado:
          'Групи заповнились за 3 місяці замість 8. Потік заявок тримався стабільно протягом кампанії.',
      },
    },
  },
  {
    id: 'femka',
    media: { type: 'single', src: project2, alt: 'FEMKA' },
    copy: {
      es: {
        title: 'FEMKA',
        subtitle: 'Nicho: moda / ropa con mensaje · Duración: 8 meses',
        metrics: [
          { label: 'Alcance', value: '+38 600' },
          { label: 'Nuevos seguidores', value: '+1 548' },
          { label: 'Ingresos extra', value: '+9 000$' },
          { label: 'ROI', value: '303%' },
        ],
        contexto:
          'FEMKA es una marca de ropa con valores: igualdad, apoyo a la comunidad LGBT y contra la discriminación.',
        queHice:
          'La estrategia fue sobre el mensaje, no solo el producto.\n\nCreamos contenido que explica el significado de la ropa.\n\nLa publicidad se dirigía a personas con los mismos valores.',
        resultado:
          'Crecimiento de alcance y comunidad alineada con la marca, con ingresos adicionales atribuibles a la campaña y un ROI medible en el periodo.',
      },
      en: {
        title: 'FEMKA',
        subtitle: 'Niche: fashion / message-driven apparel · Duration: 8 months',
        metrics: [
          { label: 'Reach', value: '+38,600' },
          { label: 'New followers', value: '+1,548' },
          { label: 'Extra revenue', value: '+$9,000' },
          { label: 'ROI', value: '303%' },
        ],
        contexto:
          'FEMKA is a clothing brand built around values: equality, support for the LGBT+ community, and standing against discrimination.',
        queHice:
          'The strategy focused on the message, not only the product.\n\nWe created content that explains what the clothing stands for.\n\nAds targeted people who share those values.',
        resultado:
          'Reach and community growth aligned with the brand, with additional revenue attributable to the campaign and a measurable ROI over the period.',
      },
      ua: {
        title: 'FEMKA',
        subtitle: 'Ніша: мода / одяг із сенсомом · Тривалість: 8 місяців',
        metrics: [
          { label: 'Охоплення', value: '+38 600' },
          { label: 'Нові підписники', value: '+1 548' },
          { label: 'Додатковий дохід', value: '+9 000$' },
          { label: 'ROI', value: '303%' },
        ],
        contexto:
          'FEMKA — бренд одягу з цінностями: рівність, підтримка ЛГБТ+ спільноти та протидія дискримінації.',
        queHice:
          'Стратегія будувалась навколо меседжу, а не лише продукту.\n\nЗробили контент, який пояснює сенс одягу.\n\nРеклама таргетувалась на людей зі схожими цінностями.',
        resultado:
          'Зростання охоплення та спільноти в тон бренду, додатковий дохід від кампанії та вимірюваний ROI за період.',
      },
    },
  },
  {
    id: 'blok-fort',
    media: { type: 'carousel', slides: blokFortSlides },
    copy: {
      es: {
        title: 'Blok-Fort',
        subtitle: 'Nicho: productos de hormigón / B2B + B2C · Duración: 2 años y 7 meses',
        metrics: [
          { label: 'Ingreso mensual', value: '60 000€' },
          { label: 'Presupuesto', value: '1 500€/mes' },
          { label: 'ROAS', value: '×40' },
          { label: 'Resultado estable', value: '+2 años' },
        ],
        contexto:
          'La empresa tenía buen producto, pero poca presencia en redes. El objetivo era vender más cada mes.',
        queHice:
          'Trabajamos con dos públicos: clientes privados y empresas.\n\nCreamos contenido diferente para cada grupo.\n\nTambién usamos anuncios, chatbots y análisis mensual.',
        resultado:
          'Resultado estable a escala durante más de dos años: ingresos recurrentes, presupuesto de ads optimizado y ROAS sostenido en el tiempo.',
      },
      en: {
        title: 'Blok-Fort',
        subtitle: 'Niche: concrete products / B2B + B2C · Duration: 2 years 7 months',
        metrics: [
          { label: 'Monthly revenue', value: '€60,000' },
          { label: 'Ad budget', value: '€1,500/mo' },
          { label: 'ROAS', value: '×40' },
          { label: 'Stable performance', value: '2+ yrs' },
        ],
        contexto:
          'The company had a strong product but limited social presence. The goal was to sell more every month.',
        queHice:
          'We worked two audiences: private buyers and businesses.\n\nWe produced different content for each group.\n\nWe also ran ads, chatbots, and monthly analytics.',
        resultado:
          'Stable performance at scale for over two years: recurring revenue, optimised ad spend, and sustained ROAS.',
      },
      ua: {
        title: 'Blok-Fort',
        subtitle: 'Ніша: бетонні вироби / B2B + B2C · Тривалість: 2 роки 7 місяців',
        metrics: [
          { label: 'Щомісячний дохід', value: '60 000€' },
          { label: 'Бюджет на рекламу', value: '1 500€/міс' },
          { label: 'ROAS', value: '×40' },
          { label: 'Стабільний результат', value: '+2 роки' },
        ],
        contexto:
          'У компанії був сильний продукт, але слабка присутність у соцмережах. Ціль — стабільно продавати більше щомісяця.',
        queHice:
          'Працювали з двома аудиторіями: приватні клієнти та бізнес.\n\nРізний контент для кожної групи.\n\nРеклама, чат-боти та щомісячна аналітика.',
        resultado:
          'Стабільний масштабований результат понад два роки: повторюваний дохід, оптимізований бюджет реклами та стійкий ROAS.',
      },
    },
  },
  {
    id: 'arena-gatos',
    media: { type: 'single', src: project4, alt: 'Arena para gatos' },
    copy: {
      es: {
        title: 'Arena para gatos',
        subtitle: 'Nicho: productos para animales · Duración: 1 año y 9 meses',
        metrics: [
          { label: 'Seguidores sin publicidad', value: '1 000+' },
          { label: 'Crecimiento orgánico', value: '~100 / mes' },
          { label: 'Duración cooperación', value: '1 año 9 meses' },
          { label: 'Nicho', value: 'Pet care' },
        ],
        contexto:
          'El producto ya estaba en tiendas, pero la gente no conocía la marca.',
        queHice:
          'Creamos una comunidad de dueños de gatos.\n\nPublicamos contenido útil y colaboramos con influencers y refugios.',
        resultado:
          'Crecimiento orgánico constante y comunidad activa alrededor de la marca, sin depender solo de paid media.',
      },
      en: {
        title: 'Cat litter',
        subtitle: 'Niche: pet products · Duration: 1 year 9 months',
        metrics: [
          { label: 'Organic followers', value: '1,000+' },
          { label: 'Organic growth', value: '~100 / mo' },
          { label: 'Engagement length', value: '1 yr 9 mo' },
          { label: 'Niche', value: 'Pet care' },
        ],
        contexto:
          'The product was already in retail, but people did not recognise the brand.',
        queHice:
          'We built a community of cat owners.\n\nWe published helpful content and partnered with influencers and shelters.',
        resultado:
          'Steady organic growth and an active brand community without relying only on paid media.',
      },
      ua: {
        title: 'Наповнювач для котячого туалету',
        subtitle: 'Ніша: товари для тварин · Тривалість: 1 рік 9 місяців',
        metrics: [
          { label: 'Підписники без реклами', value: '1 000+' },
          { label: 'Органічне зростання', value: '~100 / міс' },
          { label: 'Співпраця', value: '1 р 9 міс' },
          { label: 'Ніша', value: 'Pet care' },
        ],
        contexto:
          'Товар уже був у магазинах, але бренд мало хто знав.',
        queHice:
          'Побудували спільноту власників котів.\n\nКорисний контент і колаборації з інфлюенсерами та притулками.',
        resultado:
          'Стабільне органічне зростання та активна спільнота без опори лише на платні медіа.',
      },
    },
  },
  {
    id: 'tienda-hogar-jardin',
    media: { type: 'single', src: project5, alt: 'Tienda online hogar y jardín' },
    copy: {
      es: {
        title: 'Tienda online de hogar y jardín',
        subtitle: 'Nicho: e-commerce · Duración: 7 meses',
        metrics: [
          { label: 'Duración', value: '7 meses' },
          { label: 'Enfoque', value: 'E-commerce + IA' },
          { label: 'Catálogo', value: 'Amplio' },
          { label: 'Objetivo', value: 'Ventas web' },
        ],
        contexto:
          'La tienda tenía muchos productos. Era difícil mostrarlos de forma interesante.',
        queHice:
          'Usamos imágenes con IA para crear contenido rápido.\n\nTambién hicimos vídeos reales mostrando productos en uso.\n\nTodo el contenido llevaba a la tienda online para vender.',
        resultado:
          'Flujo de contenido ágil para un catálogo grande, combinando IA y vídeo real para empujar tráfico cualificado hacia la tienda.',
      },
      en: {
        title: 'Home & garden online store',
        subtitle: 'Niche: e-commerce · Duration: 7 months',
        metrics: [
          { label: 'Duration', value: '7 months' },
          { label: 'Focus', value: 'E-commerce + AI' },
          { label: 'Catalogue', value: 'Large' },
          { label: 'Goal', value: 'Web sales' },
        ],
        contexto:
          'The store had a huge SKU count — it was hard to present products in an engaging way.',
        queHice:
          'We used AI-assisted visuals to speed up content production.\n\nWe also shot real product-in-use videos.\n\nEvery piece pushed traffic to the online store.',
        resultado:
          'A scalable content pipeline for a large catalogue, mixing AI and real video to drive qualified traffic to the shop.',
      },
      ua: {
        title: 'Онлайн-магазин дому та саду',
        subtitle: 'Ніша: e-commerce · Тривалість: 7 місяців',
        metrics: [
          { label: 'Тривалість', value: '7 міс' },
          { label: 'Фокус', value: 'E-commerce + ШІ' },
          { label: 'Каталог', value: 'Великий' },
          { label: 'Ціль', value: 'Продажі онлайн' },
        ],
        contexto:
          'У магазину було багато товарів — складно показувати їх цікаво.',
        queHice:
          'ШІ-візуали для швидкого контенту.\n\nПлюс реальні відео продукту в використанні.\n\nУсе вело в онлайн-магазин.',
        resultado:
          'Масштабований контент для великого каталогу: ШІ + реальне відео для трафіку в магазин.',
      },
    },
  },
]

/**
 * @param {string} locale
 */
export function getLocalizedProjects(locale) {
  const loc = locale === 'en' ? 'en' : locale === 'ua' ? 'ua' : 'es'
  return projectsCatalog.map((p) => {
    const c = p.copy[loc] ?? p.copy.es
    return {
      id: p.id,
      media: p.media,
      title: c.title,
      subtitle: c.subtitle,
      metrics: c.metrics,
      contexto: c.contexto,
      queHice: c.queHice,
      resultado: c.resultado,
    }
  })
}
