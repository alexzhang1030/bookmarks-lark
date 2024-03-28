<script setup lang="ts">
const { data } = useFetch('/api/list')
</script>

<template>
  <div class="py-4 grid grid-cols-2 gap-4">
    <Card v-for="item in data" :key="item.id" v-bind="item" />
  </div>
</template>
