<template>
  <div class="flex bg-zinc-700 py-5 h-screen w-screen justify-center">
    <div class="flex flex-row justify-center">
      <div class="content-block">
        <div class="flex flex-row mb-5">
          <div class="w-20 mr-5">
            <img src="~/assets/img/zerokei-logo.png" class="shadow-lg rounded-full"/>
          </div>
          <div class="flex flex-col font-mixed justify-between">
            <div class="pt-2 text-xl text-zinc-300">
              Zerokei
            </div>
            <div class="pb-1 text-3xl text-zinc-100">
              Chritch/克瑞奇
            </div>
          </div>
        </div>
        <div class="font-body">
          <div class="mb-2">
            Hello, I'm Chritch, a senior at Zhejiang University. I identify as a Christian and am currently exploring DeFi security within blockchain.
          </div>
          <div>
            Projects: 
            <a href="https://obsidian.zerokei.top">
              <Icon name="uil:notes" class="link-icon"/>
              Notebook
            </a>
          </div>
          <div>
            Contact Me: 
            <a href="mailto:chritch-7@outlook.com">
              <Icon name="uil:envelope" class="link-icon"/>
              Mail
            </a>
            /
            <a href="https://github.com/zerokei">
              <Icon name="uil:github" class="link-icon"/>
              Github
            </a>
            /
            <a href="https://web.okjike.com/u/ad2fa9a3-0588-41f8-a9d6-a5ac1e0fdc1f">
              <Icon name="uil:lightbulb-alt" class="link-icon"/>
              Jike
            </a>
          </div>
        </div>
      </div>
    </div>

    <div>

    </div>
  </div>
</template>

<style>

.font-mixed {
  font-family: 'JetBrainsMono', 'LXGWBright';
  font-weight: bolder;
}

.font-body {
  @apply text-zinc-200 font-thin;
  font-family: 'Merriweather';
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

.content-block {
  @apply flex flex-col self-center w-10/12;
  @media (min-width: 768px) {
    width: 48rem;
  }
}

</style>