<script setup lang="ts">
defineProps({
  date: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  isLast: {
    type: Boolean,
    default: false,
  },
})

</script>
<template>
  <div
    class="flex flex-wrap cursor-pointer hover:bg-white/10 transition rounded-lg
    "
  >
    <div class="pb-10">
      <div class="flex flex-col items-center justify-between h-full">
        <div class="block pb-4">
          <div
            class="flex items-center justify-center w-10 h-10 border border-neutral-300 rounded-full"
          >
            <slot name="icon">
              <span class="text-lg font-semibold">{{ date }}</span>
            </slot>
          </div>
        </div>
        <div v-if="!isLast" class="h-full border border-dashed border-gray-500"></div>
      </div>
    </div>
    <div class="flex-1 p-2">
      <h3 class="font-heading mb-0.5 text-lg font-light">
        <span class="font-extralight text-base">{{ date }}</span> <br />
        {{ title }}
      </h3>
      <ul v-if="description.length" class="flex mb-7 items-center flex-wrap gap-2 mt-3">
        <li
          class="relative overflow-hidden tag flex items-center text-sm font-light"
        >
          {{ description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.tag {
  @apply py-2 px-5  cursor-pointer;
}
</style>