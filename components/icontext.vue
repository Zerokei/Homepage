<script setup lang="ts">
const props = defineProps({
  text: String,
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div>
    <Icon :name="props.icon" class="text-lg mb-1 mr-1" />
    <span>{{ props.text }}</span>
  </div>
</template>
