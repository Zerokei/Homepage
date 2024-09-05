<script setup lang="ts">
definePageMeta({
  layout: 'sub-rec-page',
})

const items = [
  {
    title: '《我被MIT哈佛CMU录取了！计算机博士申请季纪实》',
    link: 'https://www.bilibili.com/video/BV1bo4y1q7Nn',
    author: 'WhynotTV',
    icon: 'i-simple-icons-bilibili',
  },
  {
    title: '《教会历史与欧洲历史》',
    link: 'https://www.youtube.com/watch?v=vrqrL0WceU8&list=PLfChJ-aSv3VD-f-sQH1p9vEPjwx8zYH6e',
    author: 'Sally Shi',
    icon: 'i-simple-icons-youtube',
  },
  {
    title: '《基督与彼拉多，再思基督信仰的公共性》',
    link: 'https://reformedsg.org/2018%e5%b9%b4-%e7%a5%9e%e5%ad%a6%e8%af%be%e7%a8%8b/',
    author: 'Agape Reformed Evangelical Church',
    icon: 'i-simple-icons-youtube',
  },
  {
    title: '《变者，不变者：历代基督论与当代信仰生活》',
    link: 'https://reformedsg.org/2019%e5%b9%b4-%e7%a5%9e%e5%ad%a6%e8%af%be%e7%a8%8b/',
    author: 'Agape Reformed Evangelical Church',
    icon: 'i-simple-icons-youtube',
  },
  {
    title: '《唯独圣经》',
    link: 'https://reformedsg.org/2023%e5%b9%b4-%e7%a5%9e%e5%ad%a6%e8%af%be%e7%a8%8b/',
    author: 'Agape Reformed Evangelical Church',
    icon: 'i-simple-icons-youtube',
    date: '24-05-23',
  },
  {
    title: '《「GPT 与神学」当我们谈论知识时，我们在谈论什么？》',
    link: 'https://www.bilibili.com/video/BV1Wh41137oS/?vd_source=e0afe58994f51ab20371783da410a683',
    author: '情节严重社',
    icon: 'i-simple-icons-bilibili',
    date: '24-05-25',
  },
  {
    title: '《为什么赌博的人，都是人不人鬼不鬼的活着，对其他一切都不感兴趣》',
    link: 'https://www.bilibili.com/video/BV1Qf421q7Q1/?vd_source=e0afe58994f51ab20371783da410a683',
    author: '摩的司机徐师傅',
    icon: 'i-simple-icons-bilibili',
    date: '24-08-24',
  },
  {
    title: '《颠覆绝大部分人的认知？欧洲历史上真实的女巫与猎巫究竟是怎样的？》',
    link: 'https://www.bilibili.com/video/BV1CZ4y117KR/',
    author: '卢格杜努姆的奥古斯丁',
    icon: 'i-simple-icons-bilibili',
    date: '24-08-25',
  },
  {
    title: '《完蛋了！性慾找上門》',
    link: 'https://www.youtube.com/watch?v=j8Ypnc8jC8c',
    author: 'Pastor Peter',
    icon: 'i-simple-icons-youtube',
    date: '24-08-31',
  },
  {
    title: '《【以日为鉴】我们也会有失去的一代吗？回顾日本大学生失业潮》',
    link: 'https://www.bilibili.com/video/BV1iS421d7nF',
    author: '分析师boden',
    icon: 'i-simple-icons-bilibili',
    date: '24-09-05',
  },
]
</script>

<template>
  <div class="block-title">
    Recommandation - Videos
  </div>
  <div class="block-body">
    <div v-for="item in items" :key="item.title" class="block-body-item">
      <Icon name="ph:dot-fill" class="link-icon" />
      <div class="text-foreground font-mixed">
        {{ item.title }}
      </div>
      <Iconlink :link="item.link" :text="item.author" :icon="item.icon" />
    </div>
  </div>
</template>
