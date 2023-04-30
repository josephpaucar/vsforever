<script setup>
</script>
<template>
  <div class="slide">
    <transition name="slide">
      <slot  />
    </transition>
  </div>  
</template>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  @apply transition-opacity duration-700 ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  @apply opacity-0;
}

.slide-enter-to,
.slide-leave-from {
  @apply opacity-100;
}
</style>