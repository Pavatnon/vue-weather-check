<script setup lang="ts">
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import WeatherCard from './components/WeatherCard.vue';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string; // เพิ่มฟิลด์ icon
  }[];
  wind: {
    speed: number;
  };
}

const weatherData = ref<WeatherData | null>(null);

async function fetchWeather(city: string) {
  const API_KEY = '78949573d339c75ccea3bddb5dc8817f';
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    weatherData.value = await response.json(); 
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherData.value = null; 
    alert('City not found or an error occurred!');
  }
}
</script>


<template>
  <div>
    <h1>Weather App</h1>
    <SearchBar @searchCity="fetchWeather" />
    <div v-if="weatherData">
      <WeatherCard
        :city="weatherData.name"
        :temperature="weatherData.main.temp"
        :description="weatherData.weather[0].description"
        :iconCode="weatherData.weather[0].icon"
      />
    </div>
    <div v-else>
      <p>Please search for a city to view its weather!</p>
    </div>
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


