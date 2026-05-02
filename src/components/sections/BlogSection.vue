<script setup>
import blogCover from '../../assets/large-project.png'

const paragraphs = [
  '¡Hola! Soy María especialista en SMM y creadora de contenido con 3 años de experiencia en la creación de contenido y 1,5 años en la gestión integral de redes sociales. Ayudo a los negocios a atraer clientes, aumentar el reconocimiento de marca y mejorar las ventas a través de una estrategia de SMM efectiva.',
  'Me encargo del proyecto de forma completa: desde la estrategia y el desarrollo de branding hasta la producción de contenido, diseño, lanzamiento de publicidad y análisis mensual. Utilizo herramientas de IA para crear contenido visual único que hace destacar a la marca frente a la competencia.',
]

function scrollToContacts() {
  document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="blog" class="scroll-mt-24 px-4 py-16 lg:px-8 lg:py-24">
    <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-16">
      <div class="space-y-8">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">Ідеї та матеріали</p>
          <h2 class="mt-3 font-serif text-4xl text-brand md:text-5xl">Блог</h2>
        </div>

        <div class="space-y-5">
          <h3 class="text-xl font-semibold leading-snug text-brand md:text-2xl">
            Як AI може допомогти твоєму бізнесу
          </h3>
          <div class="space-y-4 text-sm leading-relaxed text-brand/75 md:text-base">
            <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
          </div>
        </div>

        <button
          type="button"
          class="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-brand ring-1 ring-black/[0.08] transition hover:bg-brand hover:text-white"
          @click="scrollToContacts"
        >
          Дізнатись більше
        </button>
      </div>

      <div class="relative space-y-6">
        <div class="overflow-hidden rounded-[1.75rem] bg-surface ring-1 ring-black/[0.06] shadow-[0_28px_90px_-48px_rgba(14,32,52,0.55)]">
          <img :src="blogCover" alt="" class="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[420px]" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>
