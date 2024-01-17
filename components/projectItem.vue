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
  <div>
    <!-- <Icon name="ph:dot-fill" class="link-icon" /> -->
    <Icon name="i-mdi-progress-wrench" class="indicator" v-if="active"/>
    <Icon name="i-material-symbols-archive-outline-sharp" class="indicator" v-else/>
    <a :href="props.link">{{ props.name }}</a>:
    <span class="mr-2"> {{ props.description }} </span>
    <Badge v-for="tool in props.tools ?? []" class="inline" :id="tool"/>
  </div>
</template>

<style>

.indicator {
  @apply text-lg mr-1 mb-1;
}

</style>