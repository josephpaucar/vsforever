<script setup>
import { ref } from 'vue';
import CarouselComponent from '../components/carousel/CarouselComponent.vue';
import SlideComponent from '../components/carousel/SlideComponent.vue';


const imageUrl = (image) => {
  return new URL(`../assets/${image}.jpg`, import.meta.url).href

}
const carouselSlides = ref(['img1', 'img2', 'img3'])

const categories = ref([
  {
    img: 'img1',
    title: 'Title 1'
  },
  {
    img: 'img2',
    title: 'Title 2'
  },
  {
    img: 'img3',
    title: 'Title 3'
  }
])
</script>

<template>
  <main>
    <div class="container mx-auto px-3">
      <CarouselComponent 
        :navigation="true" 
        :pagination="true" 
        :startAutoPlay="true"
        :timeout="7000"
        class="carousel" 
        v-slot="{ currentSlide }" 
      >
        <SlideComponent 
          v-for="(slide, index) in carouselSlides" 
          :key="index" 
        >
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="imageUrl(slide)" :alt="slide">
          </div>
        </SlideComponent>
      </CarouselComponent>
    </div>

    <section class="wellcome-section container mx-auto px-3">
      <div class="title">
        <h1>Vive una vida sana</h1>
        <p>Bienvenidos a VidaSana Forever</p>
      </div>
      <div class="description">
        <p>Learts is an online shop of two passionate craftsmen where they sell handicrafts and arts’ works in the US.</p>
        <p>We provide high-end unique vases, wall arts, home accessories, and furniture pieces.</p>
      </div>

      <div class="categories-links">
        <div v-for="category in categories" :key="category.title" class="category-card">
          <a href="#">
            <div class="img-wrapper">
              <img :src="imageUrl(category.img)" :alt="category.title">
            </div>
            <div class="category-title">
              <p>{{ category.title }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.carousel {
  @apply h-[620px] max-h-[620px] w-full relative;
  
  .slide-info {
    @apply absolute top-0 left-0 w-full max-h-full h-full;

    img {
      @apply min-w-full h-full aspect-video object-cover;
    }
  }
}

.wellcome-section{
  @apply mt-32;
  
  .title {
    @apply my-10;

    h1 {
      @apply font-caveat font-thin text-7xl text-primary text-center;
    }
    p {
      @apply text-lg uppercase font-marcellus text-flp-dark text-center;
    }
  }
  .description {
    @apply mb-16 font-didact text-base text-primary font-light;

    p {
      @apply tracking-wider text-center;
    }
  }
  .categories-links {
    @apply flex gap-4;
  }
}
</style>