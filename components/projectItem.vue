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
  <div class="my-2">
    <!-- <Icon name="ph:dot-fill" class="link-icon" /> -->
    <Icon name="i-mdi-progress-wrench" class="link-icon" v-if="active"/>
    <Icon name="i-material-symbols-archive-outline-sharp" class="link-icon" v-else/>
    <a :href="props.link" class="ml-1">{{ props.name }}</a>:
    <span class="mx-1">
      {{ props.description }}
    </span>
    <badge v-for="tool in props.tools ?? []" :id="tool"/>
  </div>
</template>