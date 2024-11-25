<script setup lang="ts">
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import firstImg from '@/assets/images/elvin2.jpeg'
import secondImg from '@/assets/images/elvin3.jpeg'
import thirtImg from '@/assets/images/elvin7.jpeg'
import thourthImg from '@/assets/images/elvin8.jpeg'
import fiveImg from '@/assets/images/elvin11.png'
import sixImg from '@/assets/images/ekn.jpeg'

interface GalleryImages {
  elvin2: string
  elvin3: string
  elvin7: string
  elvin8: string
  elvin11: string
  ek: string
}

const images: GalleryImages = {
  elvin2: firstImg,
  elvin3: secondImg,
  elvin7: thirtImg,
  elvin8: thourthImg,
  elvin11: fiveImg,
  ek: sixImg,
}

const firstImage = ref<HTMLElement | null>(null)
const secondImage = ref<HTMLElement | null>(null)
const thirtImage = ref<HTMLElement | null>(null)
const fourthImage = ref<HTMLElement | null>(null)
const fiveImage = ref<HTMLElement | null>(null)
const sixImage = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

useParagraphAnimation(titleRef, .3)
useTitleAnimation(firstImage, .1)
useTitleAnimation(secondImage, .2)
useTitleAnimation(thirtImage, .3)
useTitleAnimation(fourthImage, .1)
useTitleAnimation(fiveImage, .2)
useTitleAnimation(sixImage, .3)

</script>
<template>
  <section class="relative z-50 overflow-hidden">
    <div class="relative mx-auto w-full px-4 py-6 sm:px-6 lg:px-16 lg:py-20">
      <h1 ref="titleRef" class="mb-8 mt-10 text-center text-3xl sm:text-3xl lg:mb-12 lg:text-5xl">
        Gallery
      </h1>
      <div class="flex flex-col gap-4 md:flex-row">
        <div class="w-full md:w-1/2">
          <div class="flex flex-col gap-4 sm:flex-row">
            <div ref="firstImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
              <img
                :src="images.elvin3"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
            <div ref="secondImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
              <img
                :src="images.elvin11"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div ref="thirtImage" class="relative mt-4 h-96 w-full overflow-hidden rounded-lg lg:h-[40rem]">
            <img
              :src="images.ek"
              alt="gallery"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div ref="fourthImage" class="relative h-96 w-full overflow-hidden rounded-lg lg:h-[40rem]">
            <img
              :src="images.elvin8"
              alt="gallery"
              class="h-full w-full object-cover"
            />
          </div>
          <div  class="mt-4 flex flex-col gap-4 sm:flex-row">
            <div ref="fiveImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
              <img
                :src="images.elvin2"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
            <div ref="sixImage" class="relative h-64 w-full overflow-hidden rounded-lg sm:w-1/2 lg:h-96">
              <img
                :src="images.elvin7"
                alt="gallery"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>