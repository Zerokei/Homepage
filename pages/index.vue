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
              <div class="pb-1 md:text-3xl text-2xl text-zinc-100 font-medium">
                Chritch/克瑞奇
              </div>
            </div>
          </div>
          <div class="block-body space-y-2">
            <div class="mb-4">
              Hello, I'm Chritch, a senior at Zhejiang University. I identify as a Christian and am currently exploring
              DeFi security within blockchain.
              In my free time, I enjoy watching movies, reading books, and delving into the realms of religion and
              philosophy.
            </div>
            <div>
              <Icon name="ph:dot-fill" class="link-icon" />
              <span class="mr-1"> Projects: </span>
              <a href="https://obsidian.zerokei.top">
                <Icon name="uil:notes" class="link-icon" />Notebook
              </a>
              <span class="mx-1"> / </span>
              <a href="#projects">
                <Icon name="uil:elipsis-double-v-alt" class="link-icon" />More
              </a>
            </div>
            <div>
              <Icon name="ph:dot-fill" class="link-icon" />
              <span class="mr-1"> Contact Me: </span>
              <a href="mailto:chritch-7@outlook.com">
                <Icon name="uil:envelope" class="link-icon" />Mail
              </a>
              <span class="mx-1"> / </span>
              <a href="https://github.com/zerokei">
                <Icon name="uil:github" class="link-icon" />Github
              </a>
              <span class="mx-1"> / </span>
              <a href="https://web.okjike.com/u/ad2fa9a3-0588-41f8-a9d6-a5ac1e0fdc1f">
                <Icon name="uil:lightbulb-alt" class="link-icon" />Jike
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" class="bg-sky-500 py-14">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            Projects
            <div class="opacity-90 text-sm font-normal flex flex-row">
              <div>
                <Icon name="i-mdi-progress-wrench" class="link-icon" />
                Active
              </div>
              <span class="mx-2"> / </span>
              <div>
                <Icon name="i-material-symbols-archive-outline-sharp" class="link-icon" />
                Archeved
              </div>
            </div>
          </div>
          <div class="block-body">
            <ProjectItem name="Notebook" link="https://obsidian.zerokei.top"
              description="The notes I create using Obsidian and publish with Obsidian Digital Garden Plugin."
              :active="true" :tools="['Obsidian', 'Markdown']" />
            <ProjectItem name="ObsidianSnippets" link="https://github.com/Zerokei/ObsidianSnippets"
              description="My Obsidian CSS Snippets." :active="true" :tools="['CSS3']" />
            <ProjectItem name="ZeroSlides" link="https://github.com/Zerokei/ZeroSlides"
              description="A slide template powered by slidev." :active="true" :tools="['Vue']" />
            <ProjectItem name="texTemplate" link="https://github.com/Zerokei/texTemplate"
              description="My Latex Templates." :active="true" :tools="['Latex']" />
            <ProjectItem name="ZeroCPU" link="https://github.com/Zerokei/ZeroCPU"
              description="A RISC-V architecture CPU with support for a five-stage pipeline and cache."
              :tools="['Scala', 'Verilog']" />
            <ProjectItem name="DepGuard" link="https://github.com/Zerokei/DepGuard"
              description="A tool for exploring npm modules and dependencies." :tools="['React']" />
            <ProjectItem name="Light" link="https://github.com/Zerokei/Light"
              description="A photovoltaic hybrid energy storage simulation system." :tools="['Python']" />
            <div class="mt-10 opacity-70 font-light">
              Check out the <a class="font-medium" href="https://github.com/Zerokei">
                <Icon name="uil:github" class="link-icon" />Github Repo
              </a> for more details.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="recommandation" class="bg-amber-500 py-14">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            Recommandation
          </div>
          <div class="block-body">
            <div>
              <Icon name="ph:dot-fill" class="link-icon" />
              Movies:
              <a href="https://www.douban.com/doulist/157494227/">
                <Icon name="uil:heart" class="link-icon" />TOP10
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
  @apply hover:text-zinc-200 hover:font-normal;
  @apply hover:decoration-zinc-200;
  @apply hover:underline hover:decoration-1 hover:underline-offset-2;
}

.link-icon {
  @apply text-zinc-100 text-lg mb-1 mr-1;
}

.block-wrap {
  @apply flex flex-col justify-center w-full h-full;
}

.block-title {
  font-family: 'Merriweather';
  @apply flex flex-row justify-between items-end;
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