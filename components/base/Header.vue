<script setup lang="ts">
import gsap from "gsap"

const { locale } = useI18n()

const isMenuOpen = ref(false)
const showLanguagePopup = ref(false)
const toggleLanguagePopup = useToggle(showLanguagePopup)


function open_menu() {
  isMenuOpen.value = true
  const tl = gsap.timeline()
  tl.to(".container--menu", {
    "--clip": "110vw",
    duration: 1,
    ease: "power2.out",
  })
    .fromTo(
      ".menu__left > *",
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: { from: "center", each: 0.05 },
      },
      "0"
    )
    .fromTo(
      ".menu__right",
      { x: -100, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      },
      "<0.5"
    );
  return tl;
}

function close_menu() {
  const tl = gsap.timeline();
  tl.fromTo(
    [".menu__left > *", ".menu__right"],
    { x: 0, opacity: 1 },
    {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }
  ).to(
    ".container--menu",
    {
      "--clip": "0rem",
      duration: 1,
      ease: "power2.out",
    },
    "=-1"
  );
  isMenuOpen.value = false;
  return tl;
}
const menuItems = [
  { name: 'Home', route: '/' },
  // { name: 'Components', route: '/components' },
  { name: 'About', route: '/about' },
  { name: 'Experiences', route: '/experiences' },
  { name: 'Articles', route: 'https://elvincode.hashnode.dev/' },
  { name: 'Conferences', route: '/conferences' },
]

const enter = (event: MouseEvent) => {
  const icon = (event.currentTarget as HTMLElement).querySelector('.icon')
  gsap.to(icon, { opacity: 1, x: 0, duration: 0.2, ease: 'power2.out' })
}

const leave = (event: MouseEvent) => {
  const icon = (event.currentTarget as HTMLElement).querySelector('.icon')
  gsap.to(icon, { opacity: 0, x: -20, duration: 0.2, ease: 'power2.in' })
}

const showPopup = () => {
  toggleLanguagePopup()
  if (showLanguagePopup.value) {
    gsap.fromTo(
      ".language-popup",
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
    )
  }
}

const languagePopupRef = ref(null)

onClickOutside(languagePopupRef, () => {
  if (showLanguagePopup.value) toggleLanguagePopup(false)
})

const setLanguage = (lang: 'en' | 'fr') => {
  locale.value = lang
  showLanguagePopup.value = false
}

</script>

<template>
  <header class="relative">
    <nav
      class=" relative
      "
    >
      <ul class="fixed px-5 md:px-20  bg-[#222] shadow-md backdrop-blur-sm items-center w-full flex justify-between py-3 space-x-5 z-header">
        <div
          class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
        ></div>
        <li class="cursor-pointer relative">
          <router-link to="/" class="text-3xl text-green-500">Elvin Code</router-link>
        </li>
        <li class="relative">
          <ul class="flex space-x-7">
            <li class="cursor-pointer hidden md:flex">
              <ul class="flex space-x-7 text-lg">
                <li class="border-b-4 py-3 border-transparent">
                  <a href="https://github.com/elvinKyungu/" target="_blanck">
                    <IconsIconGithub class="w-7 h-7 relative z-10 text-white"/>
                  </a>
                </li>
                <li class="border-b-4 py-3 border-transparent">
                  <a href="https://www.linkedin.com/in/elvin-kyungu/" target="_blanck">
                    <IconsIconLinkedin class="w-7 h-7 relative z-10 text-white"/>
                  </a>
                </li>
                <li class="border-b-4 py-3 border-transparent">
                  <a href="https://x.com/ElvinKyungu" target="_blanck">
                    <IconsIconX class="w-7 h-7 relative z-10 text-white"/>
                  </a>
                </li>
                <li class="border-b-4 py-3 border-transparent">
                  <a href="https://www.instagram.com/elvin.kyungu/" target="_blanck">
                    <IconsIconInstagram class="w-7 h-7 relative z-10 text-white"/>
                  </a>
                </li>
              </ul>
            </li>
            <li class="border-b-4 py-3 border-transparent relative">
              <a @click="showPopup">
                <IconsIconTranslate class="w-7 h-7 text-white cursor-pointer"/>
              </a>
              <div 
                v-if="showLanguagePopup"
                ref="languagePopupRef"
                class="
                  language-popup absolute top-full 
                  bg-[#222] backdrop-blur-3xl border borderg p-3 border-[#666666] rounded shadow-lg
                "
              >
                <p
                  class="text-white cursor-pointer hover:text-green-500"
                  @click="setLanguage('fr')"
                >
                  French
                </p>
                <p
                  class="text-white cursor-pointer hover:text-green-500"
                  @click="setLanguage('en')"
                >
                  English
                </p>
              </div>
            </li>
            <li @click="open_menu" class="md:border-b-4 cursor-pointer py-3 border-transparent">
              <IconsIconBars class="text-white w-8 h-8 relative z-10"/>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div >
      <div
        class="container text-white container--menu bg-black/40 h-full backdrop-blur-md flex justify-between px-5 md:px-10 lg:px-20 py-10"
      >
        <div class="sidebar">
          <button class="sidebar__menu-trigger menu__right" @click="close_menu">
            <IconsIconClose
              class="w-10 h-10"
            />
          </button>
        </div>
        <div class="menu__layout">
          <ul class="menu__left text-xl space-y-5">
            <li v-for="item in menuItems" :key="item.name" @mouseenter="enter" @mouseleave="leave" class="menu-item">
              <template v-if="item.route.startsWith('http')">
                <a :href="item.route" target="_blank" class="flex gap-4 items-center">
                  <span ref="icons" class="icon">
                    <IconsIconArrowGrowUp class="text-white" />
                  </span>
                  {{ item.name }}
                </a>
              </template>
              <template v-else>
                <router-link :to="item.route" class="flex gap-4 items-center">
                  <span ref="icons" class="icon">
                    <IconsIconArrowGrowUp class="text-white" />
                  </span>
                  {{ item.name }}
                </router-link>
              </template>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.z-header{
  z-index: 99;
}
.container--menu,
.container--main {
  width: 100%;
  max-height: 100vh;
  height: 100%;
  display: flex;
  z-index: 99;
  position: fixed !important;
}

.container--menu {
  --clip: 0;
  clip-path: circle(var(--clip) at calc(100% - 3rem) 1rem);
  position: absolute;
  right: 0px;
  width: 100vw ;
  height: calc(100vh); 
}

.sidebar__menu-trigger {
  z-index: 99;
}
.menu-item {
  position: relative;
}

.icon {
  display: inline-block;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.1s ease, transform 0.1s ease;
}
.hover-component {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  height: 20rem;
  z-index: 99999;
} 

</style>