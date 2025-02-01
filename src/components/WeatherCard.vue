<script setup lang="ts">
import {computed} from 'vue'
import type { CardData } from '../Type/MainType'

const props = defineProps<CardData>()
const cityData = computed<any>(()=> props.city)
const temperatureData = computed<any>(()=> props.temperature)
const descriptionData = computed<any>(()=> props.description)
const iconCodeaDta =  computed<any>(()=> props.iconCode)

</script>
<template>
  <div v-if="cityData">
    <h2>{{ cityData }}</h2>
    <img :src="`http://openweathermap.org/img/wn/${iconCodeaDta}@2x.png`" alt="Weather Icon" />
    <p>Temperature: {{ temperatureData }}°C</p>
    <p>Weather: {{ descriptionData }}</p>
  </div>
  <div v-else>
    <p>No data to display. Please search for a city.</p>
  </div>
</template>
  

  