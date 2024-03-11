<template>
  <div class="mb-2 space-x-1">
    <select 
      v-model="selectedTag" 
      class="bg-amber-600 rounded-md py-1 px-1 mr-2 text-sm text-center font-mixed" 
      @change="addTagToList"
      >
      <option value="default">default</option>
      <option v-for="tag in tagList" :key="tag">{{ tag }}</option>
    </select>
    <!-- TODO 点击上方的 Tag 则删除 Tag -->
    <WebtoolTag v-for="tag in selectedTagsList" :id="tag"/>
  </div>
  <!-- TODO 点击列表里的 Tag 则增加 Tag -->
  <div class="block-body-item" v-for="item in getWebTools">
    <Icon name="ph:dot-fill" class="link-icon" />
    <div class="text-zinc-100 py-0.5 flex-row space-x-1"> 
      <Iconlink :link="item.link" :text="item.name" :icon="item.icon" /> 
      {{ item.description }}
      <WebtoolTag v-for="tag in item.tags" :id="tag"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import webtools from '~/public/data/webtools.json'
import tags from '~/public/data/tags.json'

const tagList = [...new Set(tags.map(tag => tag.name))];
const selectedTag = ref("default")
const selectedTagsList: Ref<string[]> = ref([])

const getWebTools = computed(() => {
  if (selectedTag.value === "default") {
    return webtools
  }
  else {
    return webtools.filter(item => {
      return selectedTagsList.value.every(
        tag => item.tags.includes(tag)
      )
    })
  }
})

function addTagToList() {
  if (selectedTag.value === "default") {
    selectedTagsList.value = []
  }
  else if (!selectedTagsList.value.includes(selectedTag.value)) {
    selectedTagsList.value.push(selectedTag.value)
  }
}

</script>