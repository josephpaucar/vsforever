<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import NavbarLink from '@/components/header/NavbarLink.vue'
import TopbarHeader from '@/components/header/TopbarHeader.vue'
import SocialLinks from '@/components/SocialLinks.vue'

const activeMenu = ref(false)
const links = ref([
  {
    name: 'home'
  },
  {
    name: 'about'
  }
])
</script>

<template>
  <TopbarHeader message="Delivery gratis a partir de S/. 150" />
  <header>
    <div class="wrapper">
      <div class="logo">
        <p><RouterLink to="/">VS Forever</RouterLink></p>
      </div>
      <nav class="main-navigation">
        <NavbarLink 
          @click="activeMenu = false" 
          v-for="link in links" 
          :link="link" 
          :key="`${link.name}-main-navigation`" />
      </nav>
      <div class="actions">
        <button>
          <svg class="hidden md:block mr-5" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-grey-scale-800" d="M15.9 17.3L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L17.325 15.925C17.5083 16.1083 17.6 16.3333 17.6 16.6C17.6 16.8667 17.5 17.1 17.3 17.3C17.1167 17.4833 16.8833 17.575 16.6 17.575C16.3167 17.575 16.0833 17.4833 15.9 17.3ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z"/>
          </svg>
        </button>
        <button>
          <svg class="hidden md:block mr-5" width="22" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-grey-scale-800" d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z" />
          </svg>
        </button>
        <button>
          <svg class="mr-5 md:mr-0" width="23" height="21" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="fill-grey-scale-800" d="M14.55 11C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.9643 3.32843 20.0075 3.15747 20.0054 2.98406C20.0034 2.81064 19.956 2.64077 19.8681 2.49126C19.7803 2.34175 19.6548 2.21778 19.5043 2.13162C19.3538 2.04546 19.1834 2.00009 19.01 2H4.21L3.27 0H0V2H2L5.6 9.59L4.25 12.03C3.52 13.37 4.48 15 6 15H18V13H6L7.1 11H14.55ZM5.16 4H17.31L14.55 9H7.53L5.16 4ZM6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" />
          </svg>
        </button>
        <button @click="activeMenu = !activeMenu">
          <svg class="md:hidden block ham hamRotate ham1" :class="{ active : activeMenu }" viewBox="0 0 100 100" width="45" >
            <path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
            <path class="line middle" d="m 30,50 h 40" />
            <path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
          </svg>
        </button>
      </div>
    </div>
    <div v-show="activeMenu" class="mobile-navigation">
      <nav>
        <NavbarLink @click="activeMenu = false"  v-for="link in links" :link="link" :key="`${link.name}-mobile-navigation`" />
        <SocialLinks />
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  .wrapper {
    @apply container mx-auto md:mt-5 h-[100px] flex justify-between items-center px-3;
    .logo {
      @apply ml-0 font-didact text-3xl text-primary w-full md:w-[145px];
    }
    .main-navigation {
      @apply hidden md:block;
    }
    .actions {
      @apply w-full md:w-[145px] flex items-center justify-end;
    }
  }
  .mobile-navigation {
      @apply fixed bg-white md:hidden w-full;
      height: calc(100vh - 140px);

      nav {
        @apply w-full h-full flex flex-col justify-center items-center;
        a {
          @apply mb-3;
        }
      }
    }
  .ham {
    cursor: pointer;
    transition: transform 400ms;
    user-select: none;
  }
  .hamRotate.active {
    transform: rotate(45deg);
  }
  .hamRotate180.active {
    transform: rotate(180deg);
  }
  .line {
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:#000;
    stroke-width:5.5;
    stroke-linecap:round;
  }
  .ham1 .top {
    stroke-dasharray: 40 139;
  }
  .ham1 .bottom {
    stroke-dasharray: 40 180;
  }
  .ham1.active .top {
    stroke-dashoffset: -98px;
  }
  .ham1.active .bottom {
    stroke-dashoffset: -138px;
  }
}

</style>