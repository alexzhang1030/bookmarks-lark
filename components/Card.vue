<script setup lang="ts">
import { Card, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

defineProps<{
  title: string
  desc: string
  link: string
}>()

function goTo(link: string) {
  window.open(link, '_blank')
}
</script>

<template>
  <Card
    class="cursor-pointer hover:translate-y-[-2px] transition-transform shadow-md" @click="() => {
      goTo(link)
    }"
  >
    <CardHeader>
      <CardTitle class="truncate">
        {{ title }}
      </CardTitle>
      <CardDescription class="truncate">
        {{ desc }}
      </CardDescription>
    </CardHeader>
  </Card>
</template>
