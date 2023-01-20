<script setup>
  defineProps({
    name: String,
  })
</script>

<template>
  <div class="flex flex-col">
    <div class="text-[#3c081b] grow min-w-full grid place-items-center max-w-xs overflow-hidden rounded-2xl shadow-md bg-yellow-50 border-x-2 border-x-[#3c081b] border-t-2 border-t-[#3c081b] border-b-8 border-b-[#3c081b] hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    </div>
    <div class="flex flex-col my-2">
      <span class="flex items-center text-[#3c081b] font-body font-medium text-xl capitalize hover:underline hover:underline-offset-2">
        {{ name }}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>
