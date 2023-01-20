<script>

</script>

<template>
  <section class="min-h-fit bg-yellow-50 py-12">
    <div class="max-w-6xl mx-auto">
      <div class="lg:ml-0 md:ml-6 ml-3 pb-8">
        <h3 class="font-body text-[#3c081b] text-2xl">Find your fave pouch &#127829;</h3>
      </div>

      <!--      menu for large screens-->
      <div class="h-screen hidden md:grid grid-cols-3 grid-rows-2 gap-8">
        <MenuItem name="Fugiat fugit" class="col-start-1 row-start-1 row-span-1"/>
        <MenuItem name="Magni nisi" class="col-start-1 row-start-2 row-span-1"/>
        <MenuItem name="Aliquid beatae" class="col-start-2 row-start-1 row-span-2 col-span-2"/>
      </div>
      <!--      menu for small screens-->
      <div class="h-screen md:hidden grid grid-cols-2 grid-rows-3 gap-2 mx-3">
        <MenuItem name="Fugiat fugit" class="col-start-1 row-start-1 col-span-1 row-span-1" />
        <MenuItem name="Magni nisi" class="col-start-2 row-start-1 col-span-1 row-span-1" />
        <MenuItem name="Aliquid beatae" class="col-start-1 row-start-2 col-span-2 row-span-2" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
