<script setup lang="ts">
const props = defineProps<{
  conferences: Array<{
    img: string,
    title: string,
    price: number,
  }>
}>()
</script>
<template>
  <div ref="cards1Ref1" class="grid relative md:gap-10 z-40 grid-cols-12">
    <ConferencesCard 
      v-for="(conference, index) in conferences" 
      :key="index" 
      :image="conference.img"
      :title="conference.title"
      :price="conference.price"
      class="col-span-12 md:col-span-4 lg:col-span-3"
    />
  </div>
</template>
