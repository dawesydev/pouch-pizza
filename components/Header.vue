<script></script>

<template>
  <div class="h-[90vh]">
    <div
      class="h-1/2 w-full grid place-items-center text-[#3c081b] bg-[url('/public/header.jpg')] bg-cover bg-bottom border-b-2 border-b-[#3c081b]"
    ></div>
    <div
      class="h-1/2 w-full grid place-items-center bg-yellow-50 relative mx-auto"
    >
      <div class="w-2/3 flex flex-col items-center text-center space-y-6">
        <img
          src="../public/PIZZA.png"
          alt="logo"
          height="auto"
          width="200"
          class="-skew-y-2"
        />
        <h1 class="font-body font-medium text-4xl text-[#3c081b]">
          Meet your new favourite pizza joint!
        </h1>
        <p
          class="font-sans text-[#3c081b] text-sm tracking-wider leading-6 opacity-75"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias
          aliquid aperiam.
        </p>
        <NuxtLink
          to="/"
          class="text-[#3c081b] text-md font-sans tracking-wider py-2 px-8 rounded-full border-2 border-[#3c081b] border-b-4 border-b-[#3c081b] hover:transform hover:scale-110 duration-300 ease-in-out"
          >Order now</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
