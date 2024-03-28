<script setup lang="ts">
import { Icon } from '@iconify/vue'

const colorMode = useColorMode()
</script>

<template>
  <div
    class="inline-flex items-center justify-center text-lg cursor-pointer hover:active-bg p-2"
    @click="() => {
      colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
    }"
  >
    <Icon icon="radix-icons:moon" class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Icon icon="radix-icons:sun" class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    <span class="sr-only">Toggle theme</span>
  </div>
</template>
