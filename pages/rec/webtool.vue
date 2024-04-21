<script setup lang="ts">
import webtools from '~/assets/data/webtools.json'

function navigateTo(url: string) {
  window.location.href = url
}
</script>

<template>
  <div class="bg-primary text-primary font-normal px-4 py-4">
    <h1 class="text-4xl justify-center py-4">
      WebTools
    </h1>
    <div class="grid gird-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2">
      <div
        v-for="tool in webtools"
        :key="tool.name"
      >
        <div class="block rounded-lg text-md border overflow-hidden sm:p-3.5 p-2.5 hover:border-sky-400" @click="navigateTo(tool.link)">
          <div class="flex mb-3">
            <div class="flex-none text-lg font-bold">
              <Icon :name="tool.icon" class="text-lg" />
              {{ tool.name }}
            </div>
            <div class="grow" />
            <div class="flex-none">
              <WebtoolTag v-for="tag in tool.tags" :id="tag" :key="tag" />
            </div>
          </div>
          <div class="font-normal text-sm opacity-70">
            {{ tool.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
