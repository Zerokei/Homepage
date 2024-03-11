<script setup lang="ts">
const props = defineProps({
  id: String
})
const tagName: string = props.id as string;

interface Elements {
  color: string
}

const tagArray: { [key: string]: Elements } = {
  // TODO 为一些特殊标签添加 tag
  'SaaS': { color: '#e11316'},
  'doc': { color: '#00599c'},
  'lib': { color: '#4b4b4b'},
  'blockchain': { color: '#62baf8'},
  'drawing': { color: '#ef616d'},
  'frontend': { color: '#ebb714'},
}
</script>

<template>
  <span :style="{ 'background-color': tagArray[tagName].color }" class="flex flex-row inline-flex px-2 rounded-md text-xs mr-1 py-0.5" >
    {{ id }}
  </span>
</template>