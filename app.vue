<script setup lang="ts">
import {useAsyncData} from "#app";

const { $api } = useNuxtApp();

const { data: posts } = useAsyncData(
  'posts',
  () => $api.postsList(),
  {
    server: false,
  }
);

watchEffect(() => console.log('posts', posts.value));
watchEffect(async () => console.log('posts api', await $api.postsList()));
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <template v-for="post in posts">
      <pre>{{ JSON.stringify(post, null, 2) }}</pre>
    </template>
  </div>
</template>
