<script setup lang="ts">
import { gsap } from 'gsap'

const rows = ref<HTMLElement[]>([])

const tagRows = [
  [
    { text: 'elvin', styleClass: '' },
    { text: '<Code />', styleClass: '-stroke' },
    { text: 'elvin', styleClass: '' },
    { text: '<Code  />', styleClass: '-stroke' },
    { text: 'elvin', styleClass: '' },
    { text: '<Code  />', styleClass: '-stroke' },
  ],
]

let lastScrollTop = 0

onMounted(() => {
  rows.value.forEach((row: HTMLElement|null, i: number) => {
    const rowWidth = row?.getBoundingClientRect().width;
    const rowItemWidth = row?.children[0].getBoundingClientRect().width;
    if(rowWidth && rowItemWidth){
      const initialOffset = ((2 * rowItemWidth) / rowWidth) * 100 * -1;
      gsap.set(row, { xPercent: `${initialOffset}` });

      const duration = 5 * (i + 1)

      const tl = gsap.timeline({ repeat: -1 })
      tl.to(row, { xPercent: 0, ease: 'none', duration })
      window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          tl.reverse() 
        } else {
          tl.play()
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
      })
    }
  })
})
</script>
<template>
  <section class="text-scroll-container -mt-5 relative bg-[#222]">
    <div
      class="absolute z-0 inset-0 h-full w-full   bg-[radial-gradient(theme(colors.green.900)_1px,transparent_1px)] [background-size:16px_16px]"
    ></div>
    <div class="text-scroll-content py-10 mg:py-20 lg:py-28">
      <div class="text-scroll-items bg-white/5 text-green-600" role="marquee">
        <div v-for="(row, index) in tagRows" :key="index" class="text-scroll-row" ref="rows">
          <div v-for="(item, idx) in row" :key="idx" :class="item.styleClass" class="text-scroll-item">
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>

.text-scroll-container {
  position: relative;
}

.text-scroll-items {
  margin: -58px 0;
  overflow: hidden;
  cursor: default;

}

.text-scroll-row {
  display: flex;
  position: relative;
  text-align: center;
  white-space: nowrap;
}

.text-scroll-item {
  position: relative;
  line-height: 100%;
  font-size: 7.75vw;
  flex: 0 0 33%;
  font-weight: 500;
}

.text-scroll-item.-stroke {
  color: transparent;
  text-shadow: none;
  -webkit-text-stroke: 2px rgba(255, 247, 247, 0.5);
}

.text-scroll-item span {
  position: relative;
  display: inline-block;
  z-index: 1;
}
</style>