<template>
  <div class="block-title">
    ToolBox
  </div>
  <div class="block-subtitle">
    Web
  </div>
  <div class="block-body">
    <div class="block-body-item" v-for="item in items">
      <Icon name="ph:dot-fill" class="link-icon" />
      <div class="text-zinc-100 py-0.5"> 
        <Iconlink :link="item.link" :text="item.name" :icon="item.icon" /> 
      </div>
    </div>
  </div>
  <div class="block-subtitle">
    MacOS
  </div>
  <div class="block-body space-x-1">
    <a v-for="item in macItems" 
      class="bg-white rounded-lg px-1 py-1" 
      :href="item.link"
      :title="item.name"
    >
      <Icon :name="item.icon" class="text-lg" :color="item.color"/>
    </a>
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

const macItems = [
  {
    name: 'Obsidian',
    link: 'https://obsidian.md/',
    color: '#8b6bd9',
    icon: 'i-logos-obsidian-icon'
  },
  {
    name: 'Notion',
    link: 'https://www.notion.so/',
    color: '#000000',
    icon: 'i-logos-notion-icon'
  },
  {
    name: 'VSCode',
    link: 'https://code.visualstudio.com/',
    color: '#007ACC',
    icon: 'i-logos-visual-studio-code'
  },
  {
    name: 'TickTick',
    link: 'https://www.ticktick.com/',
    color: '#f4b40d',
    icon: 'TicktickIcon'
  },
  {
    name: 'Arc Browser',
    link: 'https://arc.net/',
    color: '#ef6065',
    icon: 'i-logos-arc'
  },
  {
    name: 'Spotify',
    link: 'https://www.spotify.com/',
    color: '#1DB954',
    icon: 'i-logos-spotify-icon'
  },
  {
    name: 'RayCast',
    link: 'https://raycast.com/',
    color: '#712b25',
    icon: 'RaycastIcon'
  },
  {
    name: 'Zotero',
    link: 'https://zotero.org/',
    color: '#da514f',
    icon: 'ZoteroIcon'
  },
  {
    name: 'WPS Office',
    link: 'https://www.wps.com/',
    color: '#ee4922',
    icon: 'WpsIcon'
  },
  {
    name: 'Flomo',
    link: 'https://flomoapp.com/',
    color: '#30d07a',
    icon: 'FlomoIcon'
  }
]
</script>