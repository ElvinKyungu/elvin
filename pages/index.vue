<script setup lang="ts">

const { setLocale } = useI18n()

</script>

<template>
  <main>
    
    <!-- <div>
      <div>
        <div class="flex gap-5">
          <button @click="setLocale('en')">en</button>
          <button @click="setLocale('fr')">fr</button>
        </div>
        <p>{{ $t('welcome') }}</p>
      </div>
    </div> -->
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