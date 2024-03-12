<template>
  <div class="mb-2 space-x-1.5">
    <button @click="clearTagsList" class="outline-dashed outline-2 outline-offset-2 outline-amber-600 rounded-sm text-sm px-3 mr-3 mb-3 font-mixed bg-amber-200 text-amber-600 hover:outline"> Clear </button>
    <WebtoolTag v-for="tag in selectedTagsList" :id="tag" :on-click="() => removeTagFromList(tag)"/>
  </div>
  <ul class="h-[300px] overflow-auto space-y-0.5">
    <li class="flex flex-nowrap space-x-1.5 items-center overflow-x-scroll" v-for="(item, index) in getWebTools" v-motion-fade-visible>
      <span class="font-mixed text-sm bg-amber-600/30 rounded-lg text-center min-w-7"> {{ index+1 }} </span>
      <Iconlink :link="item.link" :text="item.name" :icon="item.icon" /> 
      <div class="whitespace-nowrap"> {{ item.description }} </div>
      <WebtoolTag v-for="tag in item.tags" :id="tag" :on-click="() => addTagToList(tag)"/>
    </li>
  </ul>
</template>

<script setup lang="ts">

import webtools from '~/assets/data/webtools.json'

const selectedTag = ref("select")
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
  if (!selectedTagsList.value.includes(tag)) {
    selectedTagsList.value.push(tag)
  }
}

function clearTagsList() {
  selectedTagsList.value = []
}

function removeTagFromList(tag: string) {
  selectedTagsList.value = selectedTagsList.value.filter(item => item !== tag)
  selectedTag.value = "select"
}

</script>

<style>
::-webkit-scrollbar {
  width: 0; /* 设置滚动条宽度为零 */
}
</style>