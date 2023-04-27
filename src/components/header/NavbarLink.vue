<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  link: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <RouterLink
    :to="{ name: `${props.link.name}`}"
  >
    {{ props.link.name }}
  </RouterLink>
</template>

<style lang="scss" scoped>
a{
  @apply font-didact text-base uppercase tracking-wider text-primary mx-4 relative pb-[1px];

  &:hover {
    @apply text-black;
  }

  &::before {
    content: '';
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .4s ease-in-out;
    @apply absolute w-full h-[1px] rounded bg-black bottom-0 left-0;

  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
}
</style>