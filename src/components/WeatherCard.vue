<template>
    <div v-if="city">
      <h2>{{ city }}</h2>
      <!-- เพิ่มไอคอน -->
      <img :src="`http://openweathermap.org/img/wn/${iconCode}@2x.png`" alt="Weather Icon" />
      <p>Temperature: {{ temperature }}°C</p>
      <p>Weather: {{ description }}</p>
    </div>
    <div v-else>
      <p>No data to display. Please search for a city.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    city: string;
    temperature: number;
    description: string;
    iconCode: string;
  }>();
  </script>
  