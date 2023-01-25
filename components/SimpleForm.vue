<script>
import BaseSelect from "./BaseSelect";
export default {
  components: {BaseSelect},
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  }
}
</script>


<template>
  <div>
    <h1>Simple Form</h1>
    <form>
      <BaseSelect
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />
      <BaseInput
        v-model="event.title"
        label="Title"
        type="text"
      />
      <BaseInput
        v-model="event.description"
        label="Description"
        type="text"
      />
    </form>
  </div>
</template>

<style scoped>

</style>
