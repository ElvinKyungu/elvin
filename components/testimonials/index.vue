<script setup lang="ts">
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'
import gabriel  from '@/assets/images/gabriel.jpeg'
import patrick  from '@/assets/images/pro-patrick.jpeg'
// import emma  from '@/assets/emma.jpeg'
import eric  from '@/assets/images/eric.jpeg'
import katya  from '@/assets/images/kat.jpg'
// import oxana  from '@/assets/oxana.jpeg'
import userProfile  from '@/assets/images/user.jpeg'
// import van  from '@/assets/van.jpeg'
// import yves  from '@/assets/yves.webp'
// import ana  from '@/assets/ana.jpeg'
// import deb  from '@/assets/deb.jpeg'
import kevin  from '@/assets/images/kevin.jpeg'
import type { TestimonialsTestimonialCard } from '#build/components'

const titleRef1 = ref<HTMLElement | null>(null)
const titleRef2 = ref<HTMLElement | null>(null)
const titleRef3= ref<HTMLElement | null>(null)
const titleRef4 = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)
const imageRef4 = ref<HTMLElement | null>(null)

const testimonials = ref([
  {
    userImage: gabriel,
    userText: "I had the privilege of recruiting Elvin a year and a half ago. Since then, he has demonstrated remarkable growth, consistently delivering elegant and impactful user interfaces. He is a highly skilled and well-rounded frontend developer, with both creativity and technical expertise.",
    userName: "Gabriel Delattre",
    userTitle: "Cofounder at @Capte"
  },
  {
    userImage: patrick,
    userText: "I had the pleasure of teaching Elvin programming at university, and from the start, I recognized his exceptional potential. Today, he has become one of the best frontend developers, combining creativity with technical expertise. I highly recommend him for any opportunity!",
    userName: "Patrick Mukala",
    userTitle: "Professor at the University of Lubumbashi"
  },
  {
    userImage: kevin,
    userText: "At Soixante Circuits, Elvin quickly stood out for his ability to turn complex challenges into sleek solutions. He excels in front-end technologies while adding his creative flair to each project. Fast, efficient, and detail-oriented, he's a valuable asset to any team.",
    userName: "Kevin Maginot",
    userTitle: "Interactive & immersive experience architect"
  },
  // {
  //   userImage: ana,
  //   userText: "I was lucky enough to work with Elvin as Product Manager. His collaboration was seamless, and his work is always of the highest quality. Excellent developer!",
  //   userName: "Ana Forostovschi",
  //   userTitle: "Head of Render Wrangling at  @Atlantic Zone"
  // },
  {
    userImage: eric,
    userText: "I have worked with Elvin on several projects where he stood out for his professionalism, passion for frontend development, and proactive approach. He excels in modern technologies, shows initiative, and offers innovative solutions. His enthusiasm and adaptability make him a valuable asset to any team.",
    userName: "Eric Ampire",
    userTitle: "iOS & Android Engineer at BRP"
  },
  {
    userImage: katya,
    userText: "I highly recommend Elvin Kyungu, an excellent frontend developer. He creates aesthetic and functional interfaces with remarkable attention to detail. His ability to collaborate and deliver quickly makes him a valuable asset to any team.",
    userName: "Katya Kurkubet",
    userTitle: "Frontend developer"
  },
  {
    userImage: userProfile,
    userText: "I worked with Elvin on a project for my company Atlantic Zone, and was very pleased with the quality of his work. He's an excellent front-end web developer.",
    userName: "Valeriu Stinca",
    userTitle: "CEO at @Atlantic Zone"
  },
  // {
  //   userImage: oxana,
  //   userText: "I had the opportunity to work with Elvin on a project. His ability to reproduce models with great precision really impressed me. He excels at integration, and I highly recommend him.",
  //   userName: "Oxana Kiss",
  //   userTitle: "Software engineer"
  // },
  // {
  //   userImage: emma,
  //   userText: "I had the opportunity to work with Elvin on a project. His ability to reproduce models with great precision really impressed me. He excels at integration, and I highly recommend him.",
  //   userName: "Emmanuel Makabu",
  //   userTitle: "Lead Designer at @KreativeTuch"
  // },
  // {
  //   userImage: userProfile,
  //   userText: "I am happy to recommend Elvin Kyungu as a skilled and reliable frontend developer. I had the pleasure of working with him and was impressed by his ability of delivering high-quality work and his passion for web development. Elvin is a great team player, always contributing positively to the project we were working on together. I am confident that Elvin would be a valuable asset to any team, and I highly recommend him for any front-end development role.",
  //   userName: "Vladislav Gargai",
  //   userTitle: "Golang developer at @Efficient Outsource"
  // },
  // {
  //   userImage: yves,
  //   userText: "I've seen Elvin's front-end work, and his passion is obvious. He masters web technologies perfectly and creates exceptional interfaces. A valuable asset for any team. Highly recommended!",
  //   userName: "Yves Kalume",
  //   userTitle: "Google Developer Expert for Android"
  // },
  // {
  //   userImage: van,
  //   userText: "Elvin is not only an excellent developer, but also someone with a rare open-mindedness. After joining my team at CodeLab DRC in 2022, he impressed me with his ability to deliver quality projects quickly. A real asset to any team.",
  //   userName: "Vander Otis",
  //   userTitle: "Mobile and web developer"
  // },
  // {
  //   userImage: deb,
  //   userText: "Elvin is a creative front-end developer, a fast learner, and always goes the extra mile. His work is top-notch, and having him on your team is a valuable asset. I highly recommend him.",
  //   userName: "Deborah Yambenu",
  //   userTitle: "Data Analyst"
  // },
])

useParagraphAnimation(paragraphRef, 0.5)
</script>

<template>
  <div ref="paragraphRef" class="pt-20 px-5 md:px-20 relative z-10 text-white bg-[#222]">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <h2 class="text-3xl lg:text-5xl relative mb-10">Testimonials</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
      <TestimonialsTestimonialCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-card"
        :userImage="testimonial.userImage"
        :userText="testimonial.userText"
        :userName="testimonial.userName"
        :userTitle="testimonial.userTitle"
      />
    </div>
  </div>
</template>
<style>


</style>