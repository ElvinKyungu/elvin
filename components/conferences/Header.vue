<script setup lang="ts">
const props = defineProps<{
  headerImage: string,
  headerText: string,
}>()
</script>

<template>
  <div class="relative w-full h-[30vh]">
    <div class="absolute w-full h-full bg-black/50 z-40 rounded-xl"></div>
    <img :src="headerImage" class="rounded-xl absolute w-full h-full z-20 object-cover" alt="">
    <h1 class="px-5 lg:px-10 font-light relative text-center z-40 flex h-full w-full items-center justify-center text-3xl text-white">
      {{ headerText }}
    </h1>
  </div>
</template>

<style scoped>
</style>
