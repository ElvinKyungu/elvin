<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const textRef1 = ref<HTMLElement | null>(null)
const textRef2 = ref<HTMLElement | null>(null)
const textRef3 = ref<HTMLElement | null>(null)
const textRef4 = ref<HTMLElement | null>(null)
const paragraphRef1 = ref<HTMLElement | null>(null)
const paragraphRef2 = ref<HTMLElement | null>(null)


useTitleAnimation(titleRef1, .3)
useTitleAnimation(titleRef2, .5)
useParagraphAnimation(paragraphRef1, .5)
useParagraphAnimation(paragraphRef2, .7)
useTitleAnimation(textRef1, 0.5)
useTitleAnimation(textRef2, .7)
useTitleAnimation(textRef3, .7)
useTitleAnimation(textRef4, .9)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const sections = document.querySelectorAll('.animated-section')

  sections.forEach((section, index) => {
    gsap.fromTo(
      section,
      { x: index % 2 === 0 ? -450 : 450, }, 
      {
        x: 0,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'top center',
          scrub: true, 
        },
      }
    )
  })
})
</script>

<template>
  <section class="px-5 relative md:px-20 lg:gap-20 gap-5 grid py-5 md:py-10 grid-cols-12 w-full min-h-[50rem] overflow-hidden pt-5 md:pt-10 lg:pt-28">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="animated-section bg-green-400 md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10">
      <div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div class="relative z-20 text-black h-full">
        <div class="text-xs uppercase flex justify-between">
          <p ref="textRef1">Your Vision</p>
          <p ref="textRef2">My Expertise</p>
        </div>
        <div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto">
          <h1 ref="titleRef1" class="text-2xl md:text-3xl lg:text-5xl">
            Let me bring your projects to life
          </h1>
          <p ref="paragraphRef1" class="mt-2 md:mt-10">
            Together, we can transform your ideas into concrete, high-performance solutions. Whether it's creating modern interfaces or intuitive user experiences, I'm with you every step of the way to bring your ambitions to life.
          </p>
        </div>
        <div 
          class="md:bottom-5 rounded-lg bottom-0 justify-end items-end w-[95%] md:w-1/2 mx-auto bg-white text-black cursor-pointer absolute p-5 md:p-5 right-[2.5%]"
        >
          <a href="#contact">
            <div class="flex justify-between">
              <span class="text-sm md:text-sm">Start your project now</span>
              <IconsIconArrowGrowUp/>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="animated-section bg-gray-100 text-black md:h-full h-[30rem] relative rounded-lg col-span-12 md:col-span-6 p-5 md:p-10">
      <div class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.300)_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div class="relative z-20 h-full">
        <div class="text-xs uppercase flex justify-between">
          <p ref="textRef3">My Services</p>
          <p ref="textRef4">Let's Collaborate</p>
        </div>
        <div class="w-full md:max-w-[30rem] my-auto mt-28 mx-auto">
          <h1 ref="titleRef2" class="text-2xl md:text-3xl lg:text-5xl -mt-10 md:mt-0">
            What Do I Do?
          </h1>
          <p ref="paragraphRef2" class="mt-5 md:mt-10">
            I specialize in creating stunning, user-centered web interfaces, Progressive Web Apps (PWAs), and dynamic animations using GSAP. I integrate seamless API connections, ensure excellent performance, and provide comprehensive SEO optimization to help you stand out.
          </p>
        </div>
        <div 
          class="md:bottom-5 cursor-pointer bg-black rounded-lg bottom-0 justify-end items-end w-[95%] md:w-1/2 mx-auto text-white absolute p-5 md:p-5 right-[2.5%]"
        >
          <a href="#contact">
            <div class="flex justify-between">
              <span class="text-sm md:text-sm">Start your project</span>
              <IconArrowGrowUp class=" "/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>