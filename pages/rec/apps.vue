<script setup lang="ts">
const macItems = [
  {
    name: 'Obsidian',
    link: 'https://obsidian.md/',
    color: '#8b6bd9',
    icon: 'i-logos-obsidian-icon',
  },
  {
    name: 'Notion',
    link: 'https://www.notion.so/',
    color: '#000000',
    icon: 'i-logos-notion-icon',
  },
  {
    name: 'VSCode',
    link: 'https://code.visualstudio.com/',
    color: '#007ACC',
    icon: 'i-logos-visual-studio-code',
  },
  {
    name: 'TickTick',
    link: 'https://www.ticktick.com/',
    color: '#f4b40d',
    icon: 'TicktickIcon',
  },
  {
    name: 'Arc Browser',
    link: 'https://arc.net/',
    color: '#ef6065',
    icon: 'i-logos-arc',
  },
  {
    name: 'Spotify',
    link: 'https://www.spotify.com/',
    color: '#1DB954',
    icon: 'i-logos-spotify-icon',
  },
  {
    name: 'RayCast',
    link: 'https://raycast.com/',
    color: '#712b25',
    icon: 'RaycastIcon',
  },
  {
    name: 'Zotero',
    link: 'https://zotero.org/',
    color: '#da514f',
    icon: 'ZoteroIcon',
  },
  {
    name: 'WPS Office',
    link: 'https://www.wps.com/',
    color: '#ee4922',
    icon: 'WpsIcon',
  },
  {
    name: 'Flomo',
    link: 'https://flomoapp.com/',
    color: '#30d07a',
    icon: 'FlomoIcon',
  },
]
</script>

<template>
  <div class="bg-card">
    <div class="flex flex-col full-height h-screen text-white">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            APPs
          </div>
          <div class="block-subtitle">
            MacOS
          </div>
          <div class="block-body space-x-2">
            <a
              v-for="item in macItems"
              :key="item.name"
              class="bg-card rounded-lg px-1 py-2 outline outline-primary/60"
              :href="item.link"
              :title="item.name"
            >
              <Icon :name="item.icon" class="text-3xl" :color="item.color" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
