<script setup lang="ts">
import imgLink from '@/assets/images/elvincode-og.png'

useHead({
  title: "Elvin code - frontend web developer",
  meta: [
    {
      name: 'description',
      content: "Discover who I am, my journey, skills, and passion for modern development and technology."
    },
    {
      property: 'og:title',
      content: "About - frontend web developer"
    },
    {
      property: 'og:description',
      content: "Learn more about my web development journey and the projects I've worked on."
    },
    {
      property: 'og:image',
      content: "@/assets/images/ek.jpg" // Replace with the path to your image for social media
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
  link: [
    {
      rel: 'icon',
      href: imgLink, // Replace with the path to your favicon
      sizes: 'any' // Can also specify sizes like '16x16' or '32x32'
    },
    {
      rel: 'apple-touch-icon',
      href: imgLink, // For Apple devices
      sizes: '180x180' // Example size for Apple touch icons
    }
  ]
})
</script>
<template>
  <div>
    <!-- <BaseLoader/> -->
    <NuxtPage />
  </div>
</template>
