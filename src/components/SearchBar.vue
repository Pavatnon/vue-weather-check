  
<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import type { WeatherData } from '../Type/MainType'
import axios from 'axios'
const API_KEY = '78949573d339c75ccea3bddb5dc8817f';

const emits = defineEmits<{
  (e:'on:updateData', value:WeatherData): void
}>()

const city = ref<string>('');
const weatherData = ref<WeatherData | null>(null);

const fetchWeather = async() => {
  try {
    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${API_KEY}&units=metric`)

    if(res?.status === 200){
      weatherData.value = res.data
      if(weatherData.value){
        emits('on:updateData',  weatherData.value)
      }
    }else{
      throw new Error('City not found')
    }
  } catch (error) {
    alert(error)
  }
}
</script>
<template>
  <div class="input-container">
    <input type="text" v-model="city" placeholder="Enter city name" />
    <button @click="fetchWeather">Search</button>
  </div>
</template>
<style scoped>
.input-container{
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}
</style>
