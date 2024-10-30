<script setup lang="ts">
import conf12 from '@/assets/images/conf12.jpg'
import conf15 from '@/assets/images/elvin2.jpeg'
import conf16 from '@/assets/images/elvin10.jpeg'
import conf17 from '@/assets/images/elvin7.jpeg'
import conf1 from '@/assets/images/conf1.jpeg'
import conf2 from '@/assets/images/conf2.jpeg'
import conf3 from '@/assets/images/conf3.jpg'
import conf4 from '@/assets/images/conf4.jpg'
import conf5 from '@/assets/images/conf5.jpg'
import conf6 from '@/assets/images/conf6.png'
import conf7 from '@/assets/images/conf7.jpg'
import conf8 from '@/assets/images/conf8.jpg'
import conf9 from '@/assets/images/conf9.jpeg'
import conf10 from '@/assets/images/conf10.png'
import conf13 from '@/assets/images/conf13.jpeg'
import conf14 from '@/assets/images/conf14.jpg'

const conferences = [
  { img: conf15, title: "A passion for tech as a lever...", price: 2024 },
  { img: conf16, title: "Community development drives...", price: 2022 },
  { img: conf17, title: "Economic, environmental...", price: 2023 },
  { img: conf1, title: "Concours solution", price: 2024 },
  { img: conf2, title: "Devfest student edition", price: 2023 },
  { img: conf3, title: "Code fiesta 2023", price: 2023 },
  { img: conf4, title: "Soft Day 2024", price: 2024 },
  { img: conf5, title: "Evangelization tour...", price: 2024 },
  { img: conf6, title: "Frontend web development contest", price: 2022 },
  { img: conf7, title: "Artificial intelligence in DRC", price: 2023 },
  { img: conf8, title: "Young people in digital", price: 2022 },
  { img: conf9, title: "Introduction to the developer professions", price: 2023 },
  { img: conf10, title: "Essential computer skills.", price: 2024 },
  { img: conf13, title: "Devfest GDG Lubumbashi", price: 2024 },
  { img: conf14, title: "Devfest GDG Lubumbashi", price: 2023 },
]
</script>

<template>
  <main>
    <BaseHeader class="header w-full h-full" />
    <section class="w-full relative px-5 bg-[#222] text-white md:px-20 py-10 md:py-20 lg:py-28">
      <ConferencesHeader
        :headerImage="conf12"
        headerText="One of my greatest passions outside of coding is clearly sharing knowledge..."
      />
      <div class="relative">
        <h2 class="pt-10 text-3xl md:text-5xl relative z-10 my-10">
          Conference speaker
        </h2>
        <ConferencesGrid :conferences="conferences" />
      </div>
    </section>
    <BaseFooter />
  </main>
</template>
