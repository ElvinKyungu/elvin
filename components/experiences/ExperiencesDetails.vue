<script setup lang="ts">
import type { ExperienceDetail } from '~/types/experiences';
import gsap from 'gsap';

const props = defineProps<{
  experiences: ExperienceDetail[];
}>();

const { rt } = useI18n();
const activeExperienceType = ref<'learned' | 'locatedCompany'>('learned');
const experienceContentRef = ref<HTMLElement | null>(null);

const currentExperience = computed(() => props.experiences[0] || null);

const triggerAnimations = () => {
  gsap.from('.stagger-element', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    stagger: 0.1,
    ease: 'power2.out',
  });

  gsap.from('.stagger-element2', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });

  if (experienceContentRef.value) {
    gsap.fromTo(
      experienceContentRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'quad.inOut' }
    );
  }
};

const switchSkillType = (skillType: 'learned' | 'locatedCompany') => {
  if (skillType !== activeExperienceType.value) {
    activeExperienceType.value = skillType;
  }
  else {
    console.log(activeExperienceType.value);
  }
};

watch(activeExperienceType, async () => {
  await nextTick();
  triggerAnimations();
});

onMounted(() => {
  triggerAnimations();
});
</script>

<template>
  <div v-if="currentExperience" class="">
    <div class="flex justify-between stagger-element my-5 lg:-mt-10">
      <img 
        :src="rt(currentExperience.image)" 
        :alt="rt(currentExperience.title)" 
        class="rounded-lg h-96 w-full object-cover cursor-pointer"
      >
    </div>
    <div class="relative">
      <div class="grid grid-cols-12 stagger-element">
        <div class="col-span-12 md:col-span-6" />
        <div class="col-span-12 md:col-span-6 relative">
          <div class="flex justify-end items-end gap-4 absolute -bottom-5 right-10">
            <div class="bg-yellow-500 stagger-element h-20 z-50 w-2 rounded-full" />
            <div class="bg-white stagger-element h-40 z-50 w-2 rounded-full" />
            <div class="bg-yellow-300 stagger-element h-56 z-50 w-2 rounded-full" />
            <div class="bg-green-600 stagger-element h-10 z-50 w-2 rounded-full" />
            <div class="bg-white stagger-element h-32 z-50 w-2 rounded-full" />
            <div class="bg-indigo-500 stagger-element h-20 z-50 w-2 rounded-full" />
            <div class="bg-red-500 stagger-element h-40 z-50 w-2 rounded-full" />
          </div>
        </div>
      </div>
    </div>

    <h1 class="mt-7 text-2xl stagger-element2">
      {{ rt(currentExperience.title) }}
    </h1>
    <p class="mt-5 stagger-element2 mb-10">{{ rt(currentExperience.description) }}</p>

    <div class="flex justify-start flex-wrap gap-5 mt-5 stagger-element2">
      <button
        class="py-2 px-5 rounded-full transition-colors duration-300"
        :class="activeExperienceType === 'learned' ? 'bg-black text-white border border-black' : 'border'"
        @click="switchSkillType('learned')"
      >
        what I've learned
      </button>
      <button
        class="py-2 px-5 rounded-full transition-colors duration-300"
        :class="activeExperienceType === 'locatedCompany' ? 'bg-black text-white border border-black' : 'border'"
        @click="switchSkillType('locatedCompany')"
      >
        Company location
      </button>
    </div>

    <div ref="experienceContentRef" class="mt-8">
      <ExperiencesContent 
        :experienceContent="currentExperience[activeExperienceType]"
      />
    </div>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s, color 0.3s;
}
</style>