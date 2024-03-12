<script setup lang="ts">
const props = defineProps({
  text: String,
  link: String,
  icon: {
    type: String,
    default: ''
  },
})
</script>
<template>
  <a class="whitespace-nowrap" :href="props.link">
    <Icon :name="props.icon" class="text-lg mb-1 mr-1" />
    <span>{{ props.text }}</span>
  </a>
</template>