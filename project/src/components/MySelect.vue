<template>
<select  @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" 
    :key="option.value"
    :value="option.value">Выберите из списка</option>
  <!-- {{ option.name }} -->
  </select>
</template>

<script>

export default {

  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  }, 
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }

}
</script>

<style scoped>

</style>
