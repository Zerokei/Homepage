<script setup lang="ts">
import webtools from '~/assets/data/webtools.json'

const selectedTag = ref('select')
const selectedTagsList: Ref<string[]> = ref([])

const getWebTools = computed(() => {
  if (selectedTagsList.value.length === 0) {
    return webtools
  }
  else {
    return webtools.filter((item) => {
      return selectedTagsList.value.every(
        tag => item.tags.includes(tag),
      )
    })
  }
})

function addTagToList(tag: string) {
  if (!selectedTagsList.value.includes(tag))
    selectedTagsList.value.push(tag)
}

function clearTagsList() {
  selectedTagsList.value = []
}

function removeTagFromList(tag: string) {
  selectedTagsList.value = selectedTagsList.value.filter(item => item !== tag)
  selectedTag.value = 'select'
}
</script>

<template>
  <div class="mb-2 space-x-1.5">
    <button class="outline-dotted outline-offset-2 outline-primary rounded-sm text-sm px-3 mr-3 mb-3 font-mixed bg-card text-foreground hover:outline" @click="clearTagsList">
      Clear
    </button>
    <WebtoolTag v-for="tag in selectedTagsList" :id="tag" :key="tag" :on-click="() => removeTagFromList(tag)" />
  </div>
  <ul class="h-[300px] overflow-auto space-y-0.5">
    <li
      v-for="(item, index) in getWebTools"
      :key="index"
      v-motion-fade-visible
      class="flex flex-nowrap space-x-1.5 items-center overflow-x-scroll"
    >
      <span class="font-mixed text-sm outline-primary/50 outline bg-card text-foreground rounded-lg text-center min-w-7 mx-2"> {{ index + 1 }} </span>
      <Iconlink :link="item.link" :text="item.name" :icon="item.icon" class="text-foreground hover:no-underline" />
      <div class="whitespace-nowrap text-foreground/70">
        {{ item.description }}
      </div>
      <WebtoolTag
        v-for="tag in item.tags"
        :id="tag"
        :key="tag"
        :on-click="() => addTagToList(tag)"
      />
    </li>
  </ul>
</template>

<style>
::-webkit-scrollbar {
  width: 0; /* 设置滚动条宽度为零 */
}
</style>
