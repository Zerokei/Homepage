<script setup lang="ts">
import tags from '~/assets/data/tags.json'

const props = defineProps({
  id: String,
  onClick: {
    type: Function,
    default: () => {
      return Function
    },
  },
})
const matchedTag = computed(() => tags.find(tag => tag.name === props.id))

function getColor(color: string, opacity: number) {
  color = color.replace('#', '')
  const r = Number.parseInt(color.substring(0, 2), 16)
  const g = Number.parseInt(color.substring(2, 4), 16)
  const b = Number.parseInt(color.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}
</script>

<template>
  <span
    v-if="matchedTag"
    :style="{
      'background-color': getColor(matchedTag.color, 30),
      'color': getColor(matchedTag.color, 100),
    }"
    class="inline-flex px-2 py-0.5 rounded-md text-xs mr-1 hover:outline"
    @click="onClick()"
  >
    {{ id }}
  </span>
</template>
