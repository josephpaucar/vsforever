<script setup>
import CarouselComponent from '../components/carousel/CarouselComponent.vue';
import SlideComponent from '../components/carousel/SlideComponent.vue';


</script>

<template>
  <main>
    <div class="container mx-auto px-3">
      <CarouselComponent>
        <SlideComponent>
          <p>Hello World</p>
        </SlideComponent>
      </CarouselComponent>
    </div>
  </main>
</template>
