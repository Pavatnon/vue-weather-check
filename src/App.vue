<script setup lang="ts">
import { ref, reactive } from 'vue';
import SearchBar from './components/SearchBar.vue';
import WeatherCard from './components/WeatherCard.vue';
import type { WeatherData } from '../Type/MainType'

const weatherData = ref<WeatherData | null>(null)
const getWeatherData = (data: WeatherData) => {
  if (!data) { return }
  weatherData.value = data
}

</script>
<template>
  <h1>Weather App</h1>
  <SearchBar @on:updateData="getWeatherData" />
  <div v-if="weatherData">
    <WeatherCard :city="weatherData.name" :temperature="weatherData.main.temp"
      :description="weatherData.weather[0].description" :iconCode="weatherData.weather[0].icon" />
  </div>
  <div v-else>
    <p>Please search for a city to view its weather!</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
