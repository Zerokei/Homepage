<template>
  <div class="block-title">
    Recommandation - Videos
  </div>
  <div class="block-body">
    <div class="block-body-item" v-for="item in items">
      <Icon name="ph:dot-fill" class="link-icon" />
      <div class="text-primary font-mixed"> 
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
  },
  {
    title: '《基督与彼拉多，再思基督信仰的公共性》',
    link: 'https://reformedsg.org/2018%e5%b9%b4-%e7%a5%9e%e5%ad%a6%e8%af%be%e7%a8%8b/',
    author: 'Agape Reformed Evangelical Church',
    icon: 'i-simple-icons-youtube'
  },
  {
    title: '《变者，不变者：历代基督论与当代信仰生活》',
    link: 'https://reformedsg.org/2019%e5%b9%b4-%e7%a5%9e%e5%ad%a6%e8%af%be%e7%a8%8b/',
    author: 'Agape Reformed Evangelical Church',
    icon: 'i-simple-icons-youtube'
  }
]
</script>