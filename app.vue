<script setup lang="ts">
import { useAsyncData } from "#app";

const { $api } = useNuxtApp();

const { data: weather } = useAsyncData(
  'posts',
  () => $api.weatherList({
      lang: 'ru',
      lat: 55.7522,
      lon: 37.6156,
      units: 'metric',
    appid: process.env.API_KEY as string,
  }),
  {
    server: false,
  }
);

watchEffect(() => console.log('weather', weather.value));
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <pre>{{ JSON.stringify(weather, null, 2) }}</pre>
  </div>
</template>
