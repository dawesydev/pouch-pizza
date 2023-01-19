<script>

</script>

<template>
  <section class="min-h-fit bg-yellow-50 py-12">
    <div class="max-w-6xl mx-auto">
      <div class="pb-8">
        <h3 class="font-body text-[#3c081b] text-2xl">Find your fave pouch</h3>
      </div>

      <!--      menu for large screens-->
      <div class="h-screen md:visible grid grid-cols-3 grid-rows-2 gap-8">
        <MenuItem name="Pouch 1" class="col-start-1 row-start-1 row-span-1"/>
        <MenuItem name="Pouch 2" class="col-start-1 row-start-2 row-span-1"/>
        <MenuItem name="Pouch 3" class="col-start-2 row-start-1 row-span-2 col-span-2"/>
      </div>

      <!--      menu for large screens-->
    </div>
  </section>
</template>

<style scoped>

</style>
