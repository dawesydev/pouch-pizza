<script setup>

</script>

<template>
  <footer class="h-fit py-12 bg-rose-900">
    <div class="flex justify-center">
      <h3 class="uppercase text-yellow-50 text-4xl font-display">Pouch</h3>
    </div>
    <div class="pt-8 pl-6 text-yellow-50">
      <h4 class="font-body text-xl opacity-95">Quick links</h4>
      <nav class="flex flex-col mt-8 space-y-6">
          <NuxtLink to="" class="tracking-wider opacity-60 font-sans text-sm">Order now</NuxtLink>
          <NuxtLink to="" class="tracking-wider opacity-60 font-sans text-sm">Meet us</NuxtLink>
          <NuxtLink to="" class="tracking-wider opacity-60 font-sans text-sm">Menu</NuxtLink>
          <NuxtLink to="" class="tracking-wider opacity-60 font-sans text-sm">Contact</NuxtLink>
      </nav>
    </div>
    <div class="py-12 px-6 text-yellow-50 border-b border-b-yellow-50 border-opacity-25">
      <h4 class="font-body text-xl opacity-95">Our mission</h4>
      <p class="flex flex-col mt-6 tracking-wider opacity-60 font-sans text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div class="flex flex-col items-center pt-12 px-6 text-yellow-50">
      <NuxtLink to="https://www.danieldawes.com/" target="_blank" class="flex space-x-1 px-6 py-2 border border-yellow-50 border-b-4 border-b-yellow-50 rounded-xl w-fit transition duration-300 delay-150 hover:transform hover:scale-110 hover:delay-15">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
        <span class="font-sans tracking-wide">danieldawes.com</span>
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped>

</style>
