<script setup>
import { useCollection, useFirestore } from 'vuefire'
import { collection } from '@firebase/firestore';

const db = useFirestore()
const productsCollection = useCollection(collection(db, 'products'))
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ul>
      <li v-for="product in productsCollection" :key="product.id">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.description[0] }}</p>
        <p>{{ product.description[1] }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
