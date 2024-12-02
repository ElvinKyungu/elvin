<script setup lang="ts">
import gsap from 'gsap'

import type { ExperienceDetail, Experience } from '@/types/experiences'
import { useTitleAnimation } from '@/composables/useTitleAnimation'

const { rt, t, tm } = useI18n()

const experiences = ref<Experience []>(tm("experiences"))
console.log(experiences)

const [rawExperienceDetails]: ExperienceDetail[] = tm("experiencesDetails")

console.log(rt(rawExperienceDetails.image));

// const activeExperienceTitle = ref(experiences.title) 

const cardHistory = ref<HTMLElement | null>(null)

useTitleAnimation(cardHistory, .5)

function getExperienceDetails(title: string) {
  console.log(title);
  // return experiences.value.find((experience: Experience) => experience.title === title)
}

// Function to handle the animation sequence
function selectExperience(experienceDetail) {
  console.log( experienceDetail.title);

  gsap.to('.experience-details', {
    opacity: 0,
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete() {
      // Change the content after fade out
      // selectedExperience = experienceDetail
      // activeExperienceTitle = experienceDetail.title

      gsap.to('.experience-details', {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  })
}

onMounted(() => {
  // Initial fade-in animation when the component is mounted
  gsap.fromTo('.experience-details', {
    opacity: 0
  }, {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.inOut'
  })
})
</script>

<template>
  <div>
    <BaseHeader class="header w-full h-full" />
    <main class="w-full relative px-5 md:px-20 py-10 bg-[#222] text-white">
      <div
        class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
      ></div> 
      <section ref="cardHistory" class="py-4 flex justify-center w-full relative z-0 mt-20">
        <main class="px-5 w-full relative">
          <h1 class="my-10 text-5xl">{{ t('experience_title')}}</h1>
          <div class="relative pb-7 rounded-xl">
            <div class="grid grid-cols-12 md:space-x-10 lg:space-x-20">

              <div v-if="experiences.length>0" class="col-span-12 md:col-span-5">
                <Experiences
                  v-for="(experience, index) in experiences"
                  :key="index"
                  :date="rt(experience.date)"
                  :title="rt(experience.title)"
                  :description="rt(experience.description)"
                  :isLast="false"
                 >
                  <template #icon>
                    <IconsIconCheck />
                  </template>
                </Experiences>
              </div>
              <div class="col-span-12 md:col-span-1"></div>
              <div  class="col-span-12 md:col-span-6 rounded-lg py-5 -mt-10 relative">
                <ExperiencesDetails 
                  :experiences="rawExperienceDetails"
                  class="experience-details"
                />
              </div>
            </div>
          </div>
        </main>
      </section>
    </main>
    <BaseFooter />
  </div>
</template>

<style>
.img-culture{
  @apply rounded-lg w-full h-full overflow-hidden object-cover transition-transform duration-300 ease-in-out transform hover:scale-110
}
.container-img-culture{
  @apply relative h-64 w-full overflow-hidden rounded-lg
}
</style>