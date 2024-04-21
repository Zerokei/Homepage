<script setup lang="ts">
const props = defineProps({
  name: String,
  link: String,
  active: Boolean,
  description: String,
  tools: Array<string>,
})
</script>

<template>
  <div />
  <div>
    <!-- <Icon name="ph:dot-fill" class="link-icon" /> -->
    <Icon v-if="active" name="i-mdi-progress-wrench" class="indicator" />
    <Icon v-else name="i-material-symbols-archive-outline-sharp" class="indicator" />
    <a :href="props.link">{{ props.name }}</a>:
    <span class="mr-2"> {{ props.description }} </span>
    <Badge v-for="tool in props.tools ?? []" :id="tool" :key="tool" class="inline" />
  </div>
</template>

<style>
.indicator {
  @apply text-lg mr-1 mb-1;
}
</style>
