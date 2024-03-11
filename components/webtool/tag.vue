<script setup lang="ts">
import tags from '~/public/data/tags.json'
const props = defineProps({
  id: String
})
const matchedTag = tags.find(tag => tag.name === props.id)

</script>

<template>
  <span v-if="matchedTag":style="{ 'background-color': matchedTag.color }" class="flex flex-row inline-flex px-2 rounded-md text-xs mr-1 py-0.5" >
    {{ id }}
  </span>
</template>