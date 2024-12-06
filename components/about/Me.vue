<script setup lang="ts">
import { useTitleAnimation } from '@/composables/useTitleAnimation'
import { useParagraphAnimation } from '@/composables/useParagraphAnimation'

const firstImage = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const paragraphRef = ref<HTMLElement | null>(null)

useParagraphAnimation(titleRef, .3)
useTitleAnimation(firstImage, .3)
useTitleAnimation(paragraphRef, .3)
</script>
<template>
 <main class="pt-20 md:pt-40 bg-[#222] text-white  ">
  <div
      class="absolute z-0 inset-0 h-full w-full bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
  <section ref="firstImage" class="flex relative justify-center pt-5 pb-10  z-50">
    <div class="absolute pl top-44">
      <div class="pl__outer-ring"></div>
      <div class="pl__inner-ring"></div>
      <div class="pl__track-cover"></div>
      <div class="pl__ball">
        <div class="pl__ball-texture"></div>
        <div class="pl__ball-outer-shadow"></div>
        <div class="pl__ball-inner-shadow"></div>
        <div class="pl__ball-side-shadows"></div>
      </div>
    </div>
    <div class="bg-black/10 backdrop-blur-md ul p-10 rounded-full mt-10">
      <div class="avatar flex justify-center items-center">
        <div
          class="ring-primary ring-offset-base-100 w-36 rounded-full ring ring-offset-2"
        >
          <img src="@/assets/images/elvin.png" class="rounded-full" />
        </div>
      </div>
    </div>
  </section>
  <div class="text-center relative mt-10">
    <h1 ref="titleRef" class="text-2xl md:text-3xl lg:text-6xl mb-10"> 
      Hi, I'm Elvin, but you can call me Elvin Code :) 
    </h1> 
    <p ref="paragraphRef" class="text-lg md:text-xl px-5 text-center flex justify-center md:max-w-7xl mx-auto"> 
      I'm a frontend developer passionate about transforming ideas into sleek, intuitive digital experiences. With a deep love for remote work, I thrive in flexible environments where creativity and efficiency meet. 
      I specialize in Vue.js
    </p> 
  </div>
 </main>
</template>
<style scoped>
.pl,
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
  border-radius: 50%;
}

.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-side-shadows,
.pl__ball-texture,
.pl__ball-texture:before,
.pl__inner-ring,
.pl__outer-ring,
.pl__track-cover {
  position: absolute;
}
.pl__ball,
.pl__ball-inner-shadow,
.pl__ball-outer-shadow,
.pl__ball-texture:before,
.pl__track-cover {
  animation: ball 3s linear infinite;
}
.pl__ball {
  top: calc(40% - 1.25em);
  left: calc(40% - 1.25em);
  transform: rotate(0) translateY(-6.5em);
  width: 2.5em;
  height: 2.5em;
}
.pl__ball-inner-shadow {
  animation-name: ballInnerShadow;
  box-shadow:
    0 0.1em 0.2em hsla(0, 0%, 0%, 0.3),
    0 0 0.2em hsla(0, 0%, 0%, 0.1) inset,
    0 -1em 0.5em hsla(0, 0%, 0%, 0.15) inset;
  width: 100%;
  height: 100%;
}

.pl__ball-side-shadows {
  background-color: hsla(0, 0%, 0%, 0.1);
  filter: blur(2px);
  width: 100%;
  height: 100%;
  transform: scale(0.75, 1.1);
  z-index: -1;
}
.pl__ball-texture {
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translate3d(0, 0, 0);
}
.pl__ball-texture:before {
  animation-name: ballTexture;
  animation-duration: 0.25s;
  background: url(https://assets.codepen.io/416221/snow.jpg) 0 0 / 50% 100%;
  content: "";
  display: block;
  filter: brightness(1.05);
  top: 0;
  right: 0;
  width: 200%;
  height: 100%;
}

/* Animations */
@keyframes ball {
  from {
    transform: rotate(0) translateY(-6.5em);
  }
  50% {
    transform: rotate(180deg) translateY(-6em);
  }
  to {
    transform: rotate(360deg) translateY(-6.5em);
  }
}
@keyframes ballInnerShadow {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(-360deg);
  }
}
@keyframes ballOuterShadow {
  from {
    transform: rotate(20deg);
  }
  to {
    transform: rotate(-340deg);
  }
}
@keyframes ballTexture {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50%);
  }
}
@keyframes trackCover {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>