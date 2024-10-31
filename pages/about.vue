<script setup lang="ts">
import imgLink from '@/assets/images/elvincode-og.png'

useHead({
  title: "About - My Portfolio",
  meta: [
    {
      name: 'description',
      content: "Discover who I am, my journey, skills, and passion for modern development and technology."
    },
    {
      property: 'og:title',
      content: "About - My Portfolio"
    },
    {
      property: 'og:description',
      content: "Learn more about my web development journey and the projects I've worked on."
    },
    {
      property: 'og:image',
      content: imgLink // Replace with the path to your image for social media
    },
    {
      property: 'og:url',
      content: 'https://elvincode.com/' // Replace with the URL of your page
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: "About - My Portfolio"
    },
    {
      name: 'twitter:description',
      content: "I'm a frontend developer with 4 years of experience, a Vue.js enthusiast, passionate about animations, and dedicated to creating engaging user experiences."
    },
    {
      name: 'twitter:image',
      content: imgLink // Use the same image as for Open Graph
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
})
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