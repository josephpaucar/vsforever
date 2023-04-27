<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="w-full bg-grey-scale-200 text-center text-primary font-didact text-xs py-3 tracking-wider">
    {{ props.message }}
  </div>
</template>

<style scoped>
  
</style>