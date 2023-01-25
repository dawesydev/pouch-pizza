<script setup>

defineProps({
  'label': { type: String, default: '' },
  'modelValue': { type: [String, Number], default: '' }
  })

</script>

<template>
  <label class="hidden">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<style scoped>

</style>
