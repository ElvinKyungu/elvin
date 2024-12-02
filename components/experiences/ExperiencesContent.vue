<script setup lang="ts">
import type { ArticleDetail } from '@/types/experiences'

const { rt } = useI18n()
defineProps<{
  experienceContent: ArticleDetail[]
}>()
</script>

<template>
  <section>
    <div v-for="(experience, index) in experienceContent" :key="index" class="mt-5">
      <div class="flex gap-4">
        <img :src="rt(experience.img)" class="w-28 h-20" :alt="rt(experience.title)">
        <div>
          <h3 class="">{{ rt(experience.title) }}</h3>
          <h3 class="text-sm">{{ rt(experience.description) }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>