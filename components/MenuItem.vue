<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="flex flex-col">
    <div
      class="text-[#3c081b] grow min-w-full grid place-items-center max-w-xs overflow-hidden rounded-2xl shadow-md bg-yellow-50 border-x-2 border-x-[#3c081b] border-t-2 border-t-[#3c081b] border-b-8 border-b-[#3c081b] hover:shadow-xl transition-shadow duration-300 ease-in-out"
    >
      <slot />
    </div>
    <div class="flex flex-col my-2">
      <span
        class="flex items-center text-[#3c081b] font-body font-medium text-xl capitalize hover:underline hover:underline-offset-2"
      >
        {{ name }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="ml-2 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<style scoped></style>
