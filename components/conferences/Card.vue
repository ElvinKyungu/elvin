<script setup lang="ts">
const props = defineProps<{
  image: string,
  title: string,
  price: number,
}>()
</script>

<template>
  <figure class="p-2 relative overflow-hidden group">
    <div class="relative overflow-hidden w-full h-64 rounded-lg">
      <img 
        :src="image" 
        class="transition-transform duration-500 transform group-hover:scale-140 rounded-lg w-full h-full object-cover cursor-pointer" 
        :alt="title"
      >
    </div>
    <figcaption class="top-5 right-5 absolute">
      <IconsIconHeart/>
    </figcaption>
    <figcaption class="outside">
      <div class="flex justify-between px-2 mt-5">
        <h3 class="text-lg">{{ title }}</h3>
      </div>
    </figcaption>
    <p class="px-2 text-sm text-gray-300">{{ price }}</p>
  </figure>
  <!-- <div class="col-span-12 md:col-span-4 lg:col-span-3">
    <div class="relative rounded-lg overflow-hidden ">
      <img :src="image" alt="Conference image" class="w-full h-64 object-cover rounded-t-lg">
      <div class="p-4">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <p class="text-gray-400">{{ price }}</p>
      </div>
    </div>
  </div> -->
</template>

<style scoped>
</style>
