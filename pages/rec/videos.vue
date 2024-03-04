<template>
  <div class="flex flex-col">
    <div class="bg-amber-500 h-screen">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            Recommandation - Videos
          </div>
          <div class="block-body">
            <div class="block-body-item">
              <Icon name="ph:dot-fill" class="link-icon" />
              <div class="video-title font-mixed"> 
                《我被mit哈佛cmu录取了！计算机博士申请季纪实》
              </div>
              <Iconlink link="https://www.bilibili.com/video/BV1bo4y1q7Nn" text="WhynotTV" icon="i-simple-icons-bilibili" /> 
            </div>
            <div class="block-body-item">
              <Icon name="ph:dot-fill" class="link-icon" />
              <div class="video-title font-mixed">
                《教会历史与欧洲历史》
              </div>
              <Iconlink link="https://www.youtube.com/watch?v=vrqrL0WceU8&list=PLfChJ-aSv3VD-f-sQH1p9vEPjwx8zYH6e" text="Sally Shi" icon="i-simple-icons-youtube" />
            </div>
          </div>
          <div class="block-bottom">
            <Iconlink
            link="/#recommandation"
            text="Back"
            icon="i-uil-arrow-down-left"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.video-title {
  @apply text-zinc-100 font-normal font-medium;
}

</style>