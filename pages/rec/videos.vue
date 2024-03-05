<template>
  <div class="block-title">
    Recommandation - Videos
  </div>
  <div class="block-body">
    <div class="block-body-item" v-for="item in items">
      <Icon name="ph:dot-fill" class="link-icon" />
      <div class="text-zinc-100 font-mixed"> 
        {{ item.title }}
      </div>
      <Iconlink :link="item.link" :text="item.author" :icon="item.icon" /> 
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'sub-rec-page'
})

const items = [
  {
    title: '《我被MIT哈佛CMU录取了！计算机博士申请季纪实》',
    link: 'https://www.bilibili.com/video/BV1bo4y1q7Nn',
    author: 'WhynotTV',
    icon: 'i-simple-icons-bilibili'
  },
  {
    title: '《教会历史与欧洲历史》',
    link: 'https://www.youtube.com/watch?v=vrqrL0WceU8&list=PLfChJ-aSv3VD-f-sQH1p9vEPjwx8zYH6e',
    author: 'Sally Shi',
    icon: 'i-simple-icons-youtube'
  }
]
</script>