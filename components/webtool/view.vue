<template>
  <div class="mb-2 space-x-1">
    <select 
      v-model="selectedTag" 
      class="bg-amber-600 rounded-md py-1 px-1 mr-2 text-sm text-center font-mixed" 
      @change="addTagToList(selectedTag)"
      >
      <option value="default">default</option>
      <option v-for="tag in tagList" :key="tag">{{ tag }}</option>
    </select>
    <WebtoolTag v-for="tag in selectedTagsList" :id="tag" :on-click="() => removeTagFromList(tag)"/>
  </div>
  <!-- TODO 增加滚动浏览 -->
  <div class="block-body-item" v-for="(item, index) in getWebTools">
    <span class="font-mixed text-sm bg-amber-600 rounded-lg px-1"> {{ index+1 }} </span>
    <div class="text-zinc-100 py-0.5 flex-row space-x-1"> 
      <Iconlink :link="item.link" :text="item.name" :icon="item.icon" /> 
      {{ item.description }}
      <WebtoolTag v-for="tag in item.tags" :id="tag" :on-click="() => addTagToList(tag)"/>
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
  if (selectedTagsList.value.length === 0) {
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

function addTagToList(tag: string) {
  if (tag === "default") {
    selectedTagsList.value = []
  }
  else if (!selectedTagsList.value.includes(tag)) {
    selectedTagsList.value.push(tag)
  }
}

function removeTagFromList(tag: string) {
  selectedTagsList.value = selectedTagsList.value.filter(item => item !== tag)
}

</script>