<script setup lang="ts">
import tags from '~/public/data/tags.json'
const props = defineProps({
  id: String,
  onClick: {
    type: Function,
    default: () => {
      return Function
    }
  }
})
const matchedTag = computed(() => tags.find(tag => tag.name === props.id))

</script>

<template>
  <span v-if="matchedTag"
    :style="{ 'background-color': matchedTag.color }" 
    class="inline-flex px-2 py-0.5 rounded-md text-xs mr-1" 
    @click="onClick()"
  >
    {{ id }}
  </span>
</template>