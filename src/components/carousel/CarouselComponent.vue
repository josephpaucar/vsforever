<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  startAutoPlay: {
    type: Boolean,
    required: false,
    default: true
  },
  timeout: {
    type: Number,
    required: false,
    default: 5000
  },
  navigation: {
    type: Boolean,
    required: false,
    default: true
  },
  pagination: {
    type: Boolean,
    required: false,
    default: true
  },
})

const currentSlide = ref(1)
const getSlideCount = ref(null)
const autoPlayEnabled = ref(props.startAutoPlay)

onMounted(() => {
  getSlideCount.value = document.querySelectorAll('.slide').length;
})

//Next Prev Buttons
const nextSlide = () => {
  if(currentSlide.value === getSlideCount.value) {
    currentSlide.value = 1
    return
  }
  currentSlide.value += 1
}

const prevSlide = () => {
  if(currentSlide.value === 1) {
    currentSlide.value = getSlideCount.value
    return
  }
  currentSlide.value -= 1
}

//Pagination
const goToSlide = (index) => {
  currentSlide.value = index + 1
}

//AutoPlay
const autoPlay = () => {
  setInterval(() => {
    nextSlide()
  }, props.timeout)
}

if(autoPlayEnabled.value) {
  autoPlay()
}
</script>

<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide"></slot>

    <div v-if="props.navigation" class="navigate">
      <div class="toggle-page left">
        <button @click="prevSlide">&#8249;</button> 
      </div>
      <div class="toggle-page right">
        <button @click="nextSlide">&#8250;</button>
      </div>
    </div>

    <div v-if="props.pagination" class="pagination">
      <span  
        v-for="(slide, index) in getSlideCount" 
        :key="index" 
        :class="{ active : index + 1 === currentSlide }"
        @click="goToSlide(index)"
      >
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigate{
  @apply p-0 h-full absolute flex justify-center items-center;
  width: calc(100% + 80px);
  margin-left: -40px;

  .toggle-page {
    @apply flex flex-1;

    button {
      @apply text-5xl text-slate-300 py-4 px-3 transition-all duration-300 ease-out;

      &:hover {
        @apply text-black;
      }
    }
  }
  .right {
    @apply justify-end;
  }
}

.pagination {
  @apply absolute bottom-[-55px] w-full flex justify-center items-center gap-4;

  span {
    @apply w-3 h-3 cursor-pointer rounded-full bg-slate-300 shadow-md transition-all duration-300 ease-in-out;

    &:hover {
      @apply bg-black;
    }
  }
  .active {
    @apply w-5 h-5 border-[1px] border-slate-700 bg-white;

    &:hover {
      @apply bg-white;
    }
  }
}
</style>