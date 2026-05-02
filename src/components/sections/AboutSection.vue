<script setup>
import portrait from '../../assets/author-photo.png'

const paragraphs = [
  '¡Hola! Soy María especialista en SMM y creadora de contenido con 3 años de experiencia en la creación de contenido y 1,5 años en la gestión integral de redes sociales. Ayudo a los negocios a atraer clientes, aumentar el reconocimiento de marca y mejorar las ventas a través de una estrategia de SMM efectiva.',
  'Me encargo del proyecto de forma completa: desde la estrategia y el desarrollo de branding hasta la producción de contenido, diseño, lanzamiento de publicidad y análisis mensual. Utilizo herramientas de IA para crear contenido visual único que hace destacar a la marca frente a la competencia.',
]

function scrollToContacts() {
  document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section id="about" class="scroll-mt-24 px-4 py-16 lg:px-8 lg:py-24">
    <div
      class="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14 xl:gap-16"
    >
      <div class="relative shrink-0 max-lg:mx-auto lg:justify-self-start">
        <!-- w-fit: рамка точно по краю фото, без «полів» зліва/справа всередині rounded-блоку -->
        <div
          class="inline-block w-fit max-w-[min(320px,92vw)] overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/[0.06]"
        >
          <img
            :src="portrait"
            alt="María"
            class="block h-auto max-h-[min(340px,48svh)] w-auto max-w-[min(320px,92vw)] object-contain object-top align-middle md:max-h-[min(380px,50svh)]"
            loading="lazy"
          />
        </div>
        <div class="pointer-events-none absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-full bg-brand/10 blur-2xl lg:block" />
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <p class="text-xs font-semibold uppercase tracking-[0.18em] text-brand/45">Про мене</p>
          <h2 class="font-serif text-3xl text-brand md:text-4xl">Марія · SMM Lead</h2>
        </div>

        <div class="space-y-5 text-base leading-relaxed text-brand/75 md:text-lg">
          <p v-for="(p, i) in paragraphs" :key="i">
            {{ p }}
          </p>
        </div>

        <button
          type="button"
          class="rounded-full bg-surface px-6 py-3 text-sm font-semibold text-brand ring-1 ring-black/[0.08] transition hover:bg-brand hover:text-white"
          @click="scrollToContacts"
        >
          Дізнатись більше
        </button>
      </div>
    </div>
  </section>
</template>
