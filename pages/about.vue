<script setup lang="ts">

</script>
<template>
  <div>
    <BaseHeader />
    <main class="flex flex-col relative justify-center bg-[#222] text-white">
      <AboutMe/>
      <div
        class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <AboutGrid/>
    </main> 
    <BaseFooter class="relative z-50"/>
  </div>
</template>
<style scoped>
.img-gallery{
  @apply block object-cover object-top w-full h-full rounded-lg cursor-pointer
}
</style>