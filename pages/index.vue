<template>
  <div class="flex flex-col">
    <div id="main" class="bg-zinc-700 h-screen">
      <div class="block-wrap">
        <div class="block-content">
          <div class="flex flex-row mb-5">
            <div class="w-20 mr-5">
              <img src="~/assets/img/zerokei-logo.png" class="shadow-lg rounded-full" />
            </div>
            <div class="flex flex-col font-mixed justify-between">
              <div class="pt-2 text-xl text-zinc-300 font-normal">
                Zerokei
              </div>
              <div class="pb-1 text-3xl text-zinc-100 font-medium">
                Chritch/克瑞奇
              </div>
            </div>
          </div>
          <div class="block-body">
            <div class="mb-2">
              Hello, I'm Chritch, a senior at Zhejiang University. I identify as a Christian and am currently exploring
              DeFi security within blockchain.
              In my free time, I enjoy watching movies, reading books, and delving into the realms of religion and
              philosophy.
            </div>
            <div>
              <Icon name="uil:angle-right-b" class="link-icon" />
              Projects:
              <a href="https://obsidian.zerokei.top">
                <Icon name="uil:notes" class="link-icon" />
                Notebook
              </a>
              /
              <a href="#projects">
                <Icon name="uil:elipsis-double-v-alt" class="link-icon" />
                More
              </a>
            </div>
            <div>
              <Icon name="uil:angle-right-b" class="link-icon" />
              Contact Me:
              <a href="mailto:chritch-7@outlook.com">
                <Icon name="uil:envelope" class="link-icon" />
                Mail
              </a>
              /
              <a href="https://github.com/zerokei">
                <Icon name="uil:github" class="link-icon" />
                Github
              </a>
              /
              <a href="https://web.okjike.com/u/ad2fa9a3-0588-41f8-a9d6-a5ac1e0fdc1f">
                <Icon name="uil:lightbulb-alt" class="link-icon" />
                Jike
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" class="bg-sky-500 h-[60vh]">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            Projects
          </div>
          <div class="block-body">
            TBD.
          </div>
        </div>
      </div>
    </div>
    <div id="recommandation" class="bg-amber-500 h-[60vh]">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            Recommandation
          </div>
          <div class="block-body">
            <div>
              <Icon name="uil:angle-right-b" class="link-icon" />
              Movies:
              <a href="https://www.douban.com/doulist/157494227/">
                <Icon name="uil:heart" class="link-icon" />
                TOP10
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.font-mixed {
  font-family: 'JetBrainsMono', 'LXGWBright';
}

a {
  @apply text-zinc-100 font-normal;
  @apply hover:text-zinc-300 hover:font-normal;
  @apply hover:decoration-slate-100 hover:decoration-dashed;
  @apply hover:underline hover:decoration-1 hover:underline-offset-2;
}

.link-icon {
  @apply text-zinc-100 text-lg mb-1;
}

.block-wrap {
  @apply flex flex-col justify-center w-full h-full;
}

.block-title {
  font-family: 'Merriweather';
  @apply text-zinc-100 text-4xl font-semibold;
  @apply mb-10;
}

.block-body {
  @apply text-zinc-100 font-thin;
  font-family: 'Merriweather';
}

.block-content {
  @apply flex flex-col self-center w-10/12;

  @media (min-width: 768px) {
    width: 48rem;
  }
}
</style>