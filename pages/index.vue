<script setup lang="ts">
</script>

<template>
  <main>
    <div class="bg-[#222] relative">
      <div
        class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
      ></div>
      <BaseHeader/>
      <AboutMe/>
      <HomeStackCard/>
      <HomeWalletCard/>
      <HomeStackClicakbleCard/>
      <Testimonials/>
      <ContactGetInTouch/>
      <ContactCardsInfos/>
      <HomeTextScroll class="hidden md:block"/>
      <BaseFooter /> 
    </div>
  </main>
</template>