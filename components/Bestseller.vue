<script setup>
defineProps({
  name: String,
  price: Number,
});
</script>

<template>
  <div class="inline-block">
    <div
      class="text-[#3c081b] w-64 h-64 grid place-items-center max-w-xs overflow-hidden rounded-2xl shadow-md bg-yellow-50 border-x-2 border-x-[#3c081b] border-t-2 border-t-[#3c081b] border-b-8 border-b-[#3c081b] hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <slot />
    </div>
    <div class="flex flex-col my-2 space-y-4">
      <span
        class="block text-[#3c081b] font-body text-md capitalize hover:underline hover:underline-offset-2"
        >{{ name }}</span
      >
      <span class="text-[#3c081b] font-sans text-md tracking-wider"
        >£{{ price }}</span
      >
    </div>
  </div>
</template>
