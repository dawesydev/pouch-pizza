<script setup></script>

<template>
  <section class="min-h-fit bg-yellow-50 py-2">
    <div class="max-w-6xl mx-auto">
      <div class="pb-8 lg:ml-0 md:ml-6 ml-3">
        <h3 class="font-body text-[#3c081b] text-2xl">
          Get stuck-in to our bestsellers &#128293;
        </h3>
      </div>

      <!--      bestsellers for large screens-->
      <div class="hidden lg:grid grid-cols-4 gap-2">
        <!--        bestseller-->
        <Bestseller name="ullamcorper malesuada proin" :price="12"
          ><img src="../public/1.jpg" alt="pizza"
        /></Bestseller>
        <!--        bestseller-->
        <Bestseller name="in fermentum et" :price="12"
          ><img src="../public/2.jpg" alt="pizza"
        /></Bestseller>
        <!--        bestseller-->
        <Bestseller name="ultrices tincidunt arcu" :price="12"
          ><img src="../public/3.jpg" alt="pizza"
        /></Bestseller>
        <!--        bestseller-->
        <Bestseller name="mus mauris vitae" :price="12"
          ><img src="../public/4.jpg" alt="pizza"
        /></Bestseller>
      </div>

      <!--      bestsellers for small screens-->
      <div
        class="lg:hidden flex overflow-scroll max-w-6xl mx-auto h-full no-scrollbar"
      >
        <div class="flex flex-nowrap md:ml-6 ml-3 space-x-2">
          <!--        bestseller-->
          <Bestseller name="ullamcorper malesuada proin" :price="12" />
          <!--        bestseller-->
          <Bestseller name="in fermentum et" :price="12" />
          <!--        bestseller-->
          <Bestseller name="ultrices tincidunt arcu" :price="12" />
          <!--        bestseller-->
          <Bestseller name="mus mauris vitae" :price="12" />
          <!--        bestseller-->
          <Bestseller name="ullamcorper malesuada proin" :price="12" />
          <!--        bestseller-->
          <Bestseller name="in fermentum et" :price="12" />
          <!--        bestseller-->
          <Bestseller name="ultrices tincidunt arcu" :price="12" />
          <!--        bestseller-->
          <Bestseller name="mus mauris vitae" :price="12" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
