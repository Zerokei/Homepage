<template>
  <div class="block-title">
    ToolBox
  </div>
  <div class="block-body">
    <div class="block-body-item" v-for="item in items">
      <Icon name="ph:dot-fill" class="link-icon" />
      <div class="text-zinc-100 py-0.5"> 
        <Iconlink :link="item.link" :text="item.name" :icon="item.icon" /> 
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'sub-rec-page'
})
// TODO 添加 Tag 筛选与显示
const items = [
  {
    name: 'Excalidraw',
    link: 'https://excalidraw.com/',
    icon: 'i-simple-icons-excalidraw'
  },
  {
    name: 'Overleaf',
    link: 'https://www.overleaf.com/',
    icon: 'i-simple-icons-overleaf'
  },
  {
    name: 'Canva',
    link: 'https://www.canva.com/',
    icon: 'i-simple-icons-canva'
  },
  {
    name: 'Triangle Patterns Generator',
    link: 'https://sinqi.tools/zh/triangle',
    icon: 'i-fluent-draw-image-20-regular'
  }
]
</script>