<template>
  <div class="mb-2 space-x-2">
    <!-- <select 
      v-model="selectedTag" 
      class="bg-amber-600/50 rounded-md py-1 px-1 mr-2 text-sm text-center font-mixed" 
      @change="addTagToList(selectedTag)"
      >
      <option value="select">select</option>
      <option v-for="tag in tagList" :key="tag">{{ tag }}</option>
    </select> -->
    <button @click="clearTagsList" class="outline-dashed outline-2 outline-offset-2 outline-amber-600 rounded-sm text-sm px-3 font-mixed bg-amber-200 text-amber-600 hover:outline"> Clear </button>
    <WebtoolTag v-for="tag in selectedTagsList" :id="tag" :on-click="() => removeTagFromList(tag)"/>
  </div>
  <!-- TODO 增加滚动的动态展示动画 -->
  <ul v-auto-animate class="h-[300px] w-full overflow-auto space-y-1.5">
    <li class="block-body-item" v-for="(item, index) in getWebTools">
      <span class="font-mixed text-sm bg-amber-600/30 rounded-lg text-center min-w-7"> {{ index+1 }} </span>
      <div class="text-zinc-100 py-0.5 flex-row space-x-1"> 
        <Iconlink :link="item.link" :text="item.name" :icon="item.icon" /> 
        {{ item.description }}
        <WebtoolTag v-for="tag in item.tags" :id="tag" :on-click="() => addTagToList(tag)"/>
      </div>
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
::-webkit-scrollbar-track {
  background-color: transparent; /* 设置滚动条轨道透明 */
}
::-webkit-scrollbar-thumb {
  background-color: transparent; /* 设置滚动条滑块透明 */
}
</style>