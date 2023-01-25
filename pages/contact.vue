<script>
export default {
  data () {
    return {
      message: {
        name: '',
        email: '',
        number: '',
        comment: ''
      }
    }
  }
}

</script>

<template>
  <div class="h-screen">
    <div class="max-w-4xl mt-12 lg:px-0 px-6 flex flex-col space-y-6">
      <h1 class="font-body font-medium text-5xl text-[#3c081b]">Contact</h1>
      <p class="pt-6 font-body font-medium text-2xl text-[#3c081b]">Have a question, comment, or just want to say hi? &#128071;</p>
      <BaseInput
         class="font-sans text-md text-[#3c081b] tracking-wider rounded-2xl py-3 px-4 bg-yellow-50 border-x-2 border-x-[#3c081b] border-t-2 border-t-[#3c081b] border-b-4 border-b-[#3c081b] placeholder:text-[#3c081b] placeholder:text-opacity-75"
         v-model="message.name"
         label="Name"
         type="text"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
