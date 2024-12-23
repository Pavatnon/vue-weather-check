<template>
    <div>
      <input v-model="city" placeholder="Enter city name" />
      <button @click="search">Search</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const city = ref('');
  const emit = defineEmits<{
    (event: 'searchCity', city: string): void;
  }>();
  
  const search = () => {
    if (city.value.trim()) {
      emit('searchCity', city.value);
    } else {
      alert('Please enter a city name!');
    }
  };
  </script>
  