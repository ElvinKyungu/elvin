<script setup lang="ts">
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'


const { rt, t, tm } = useI18n()

const testimonials = tm("home_testimonials")

const paragraphRef = ref<HTMLElement | null>(null)
useParagraphAnimation(paragraphRef, 0.5)
</script>

<template>
  <div ref="paragraphRef" class="pt-20 px-5 md:px-20 relative z-10 text-white bg-[#222]">
    <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <h2 class="text-3xl lg:text-5xl relative mb-10">{{ t('home_title_testimonial') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
      <TestimonialsTestimonialCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card"
        :user-image="rt(testimonial.image)"
        :user-text="rt(testimonial.message)"
        :user-name="rt(testimonial.name)"
        :user-title="rt(testimonial.title)"
      />
    </div>
  </div>
</template>