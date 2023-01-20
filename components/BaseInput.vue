<script setup>
 defineProps(['email'])
 defineEmits(['update:email'])
</script>

<template>
  <input
      type="email"
      :value="email"
      @input="$emit('update:title', $event.target.value)"
      placeholder="Email"
  >
</template>

<style scoped>

</style>
