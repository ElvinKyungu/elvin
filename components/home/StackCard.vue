<script setup lang="ts">
import gsap from 'gsap'
import vuejs from '@/assets/images/vuejs.png'
import nuxt from '@/assets/images/nuxt.svg'
import ts from '@/assets/images/typescript.png'

const titleRef = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const images = document.querySelectorAll('.animate-img')
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.1 })

  tl.fromTo(images,
    {
      y: -200, 
      opacity: 0,
    },
    {
      y: 0, 
      opacity: 1,
      duration: 2,
      ease: "elastic.out(0.4, 0.4)", 
      stagger: {
        each: 0.2,
      }
    }
  );

  gsap.fromTo(titleRef.value, 
    {
      y: 50,
      opacity: 0,
      clipPath: "inset(100% 0% 0% 0%)",
    },
    {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0% 0% 0%)", 
      duration: 1.5,
      ease: "power4.out",
      delay: 0.5,
    }
  )

  gsap.fromTo(paragraphRef.value, 
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      delay: 1,
    }
  )
})

</script>

<template>
  <section class="grid bg-[#222] text-white relative z-40 md:gap-5 grid-cols-12 px-5 md:px-20  pt-36 md:pt-5 md:py-20 lg:py-36">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="col-span-12 relative z-20 md:col-span-5 lg:py-10">
      <h2 ref="titleRef" class="text-3xl md:mt-5 md:text-4xl lg:text-6xl">
        I am a developer based on vuejs
      </h2>
      <p ref="paragraphRef" class="mt-12 text-lg">
        Fueled by a passion for frontend development, I bring modern, responsive, and dynamic web applications to life. With expertise in Vue.js, Nuxt.js, and TailwindCSS, I craft seamless and high-performing user experiences. Ready to unlock new possibilities? Let’s build something remarkable together.
      </p>
    </div>
    <div class="relative z-20 col-span-12 md:col-span-7 overflow-hidden mt-10 pt-5 pb-16">
      <div class="flex flex-wrap gap-4 jcitems-center -space-x-40 wrap justify-center md:max-w-[32rem] h-full mx-auto">
        <img :src="ts" alt="TypeScript logo" class="animate-img bg-black image-animate -rotate-12">
        <img :src="nuxt" alt="Nuxt.js logo" class="animate-img bg-black image-animate rotate-12">
        <img :src="vuejs" alt="Vue.js logo" class="animate-img bg-black image-animate -rotate-12 ">
      </div>
    </div>
  </section>
</template>

<style>
</style>