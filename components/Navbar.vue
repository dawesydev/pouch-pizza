<script setup>
import {ref} from "vue";

import CartIcon from "./CartIcon";

const isHidden = ref(true)

</script>

<template>
  <nav class="bg-yellow-50 relative sticky top-0">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between">
        <div class="flex w-full justify-between space-x-4">

          <!--            logo-->
          <div class="flex space-x-4">
            <NuxtLink to="/" class="flex items-center py-5 lg:px-0 px-6">
              <!--              svg logo goes here-->
              <span class="uppercase text-[#3c081b] text-4xl font-display">Pouch</span>
            </NuxtLink>

            <!--            primary nav-->
            <div class="hidden md:flex flex items-center pl-4 space-x-6 text-[#3c081b] text-sm tracking-wider font-sans">
              <NuxtLink to="/" class="opacity-75 hover:opacity-100 hover:underline hover:underline-offset-4">Order now</NuxtLink>
              <NuxtLink to="/" class="opacity-75 hover:opacity-100 hover:underline hover:underline-offset-4">Meet us</NuxtLink>
              <NuxtLink to="/" class="opacity-75 hover:opacity-100 hover:underline hover:underline-offset-4">Menu</NuxtLink>
              <NuxtLink to="/contact" class="opacity-75 hover:opacity-100 hover:underline hover:underline-offset-4">Contact</NuxtLink>
            </div>
          </div>

          <!--          secondary nav-->
          <div class="hidden md:flex flex items-center space-x-1">
            <NuxtLink to="/">
              <CartIcon />
            </NuxtLink>
          </div>

          <!--          mobile btn goes here  -->
          <div class="md:hidden flex items-center lg:px-0 px-6">
            <button @click="isHidden = !isHidden">
              <!--              hamburger-->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 transition duration-300 delay-150 hover:transform hover:scale-110 hover:delay-150" :class="{ 'hidden': !isHidden }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--              cross-->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 transition duration-300 delay-150 hover:transform hover:scale-110 hover:delay-150" :class="{ 'hidden': isHidden }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>


        </div>

      </div>
    </div>

    <!--          mobile menu-->
    <div :class="{ 'hidden': isHidden }"
         class="absolute left-1/2 transform -translate-x-1/2 text-center bg-yellow-50 md:hidden w-5/6 mx-auto p-8 rounded-xl border-2 border-[#3c081b] border-b-8 border-b-[#3c081b]">
      <NuxtLink to="/" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5 rounded-xl">Order now</NuxtLink>
      <NuxtLink to="/" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5 rounded-xl">Meet us</NuxtLink>
      <NuxtLink to="/" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5 rounded-xl">Menu</NuxtLink>
      <NuxtLink to="/contact" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5 rounded-xl">Contact</NuxtLink>
    </div>

  </nav>
</template>

<style scoped>

</style>
