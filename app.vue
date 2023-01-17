<script setup>
import { ref } from 'vue'

const isHidden = ref(true)

</script>

<template>
  <div class="h-screen">
    <!--      banner-->
    <div class="max-h-11/12 bg-rose-900 text-yellow-50 flex justify-center">
      <p class="py-2 font-body">Free delivery on orders £35+</p>
    </div>
    <!--      nav-->
    <nav class="bg-yellow-50 relative">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex w-full justify-between space-x-4">

          <!--            logo-->
          <div class="flex space-x-4">
            <NuxtLink to="/" class="flex items-center py-5 px-2">
              <!--              svg logo goes here-->
              <span class="uppercase text-[#3c081b] text-3xl font-display">Pouch</span>
            </NuxtLink>

            <!--            primary nav-->
            <div class="hidden md:flex flex items-center space-x-4 text-[#3c081b] text-md font-normal font-body">
              <NuxtLink to="/">Order Food</NuxtLink>
              <NuxtLink to="/">Meet Us</NuxtLink>
              <NuxtLink to="/">Menu</NuxtLink>
              <NuxtLink to="/">Contact</NuxtLink>
            </div>
          </div>

          <!--          secondary nav-->
          <div class="hidden md:flex flex items-center space-x-1">
            <NuxtLink to="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#3c081b]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </NuxtLink>
          </div>

          <!--          mobile btn goes here  -->
          <div class="md:hidden flex items-center">
            <button @click="isHidden = !isHidden">
              <!--              hamburger-->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition duration-300 delay-150 hover:transform hover:scale-110 hover:delay-150" :class="{ 'hidden': !isHidden }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <!--              cross-->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 transition duration-300 delay-150 hover:transform hover:scale-110 hover:delay-150" :class="{ 'hidden': isHidden }">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>


          </div>

        </div>
      </div>

      <!--          mobile menu-->
      <div :class="{ 'hidden': isHidden }"
           class="absolute bg-yellow-50 md:hidden w-full pb-8 border-b-4 border-[#3c081b]">
        <NuxtLink to="/" class="block mt-6 py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5">Order Food</NuxtLink>
        <NuxtLink to="/" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5">Meet Us</NuxtLink>
        <NuxtLink to="/" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5">Menu</NuxtLink>
        <NuxtLink to="/" class="block py-2 px-6 text-xl text-[#3c081b] font-body hover:bg-rose-900 hover:bg-opacity-5">Contact</NuxtLink>
      </div>

    </nav>
    <Header />
  </div>

</template>
