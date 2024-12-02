<script setup lang="ts">
import type { ArticleDetail } from '@/types/experiences'

const { rt } = useI18n()
defineProps<{
  experienceContent: ArticleDetail[]
}>()
</script>

<template>
  <section>
    <div v-for="(history, index) in experienceContent" :key="index" class="mt-5">
      <div class="flex gap-4">
        <img :src="rt(history.img)" class="w-28 h-20" :alt="rt(history.title)">
        <div>
          <h3 class="">{{ rt(history.title) }}</h3>
          <h3 class="text-sm">{{ rt(history.description) }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>