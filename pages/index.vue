<template>
  <div class="flex flex-col">
    <div id="main" class="bg-primary h-screen">
      <div class="block-wrap">
        <div class="block-content">
          <div class="flex flex-row mb-5">
            <div class="w-20 mr-5">
              <img src="~/assets/img/zerokei-logo.png" class="shadow-lg rounded-full">
            </div>
            <div class="flex flex-col font-mixed justify-between">
              <div class="pt-2 text-xl text-primary font-normal">
                Zerokei
              </div>
              <div class="pb-1 md:text-3xl text-2xl text-primary font-medium">
                Chritch/克瑞奇
              </div>
            </div>
          </div>
          <div class="block-body">
            <div class="mb-4 tracking-wide">
              Hello, I'm Chritch, a senior at Zhejiang University. I identify as a Christian and am currently exploring
              DeFi security within blockchain.
              In my free time, I enjoy watching movies, reading books, and delving into the realms of religion and
              philosophy.
            </div>
            <div class="block-body-list">
              <div class="block-body-item">
                <Icon name="ph:dot-fill" class="link-icon" />
                <div> Projects: </div>
                <Iconlink text="Notebook" link="https://obsidian.zerokei.top" icon="i-uil-notes" />
                <div> / </div>
                <Iconlink text="More" link="#projects" icon="i-uil-elipsis-double-v-alt" />
              </div>
              <div class="block-body-item">
                <Icon name="ph:dot-fill" class="link-icon" />
                <div> Contact Me: </div>
                <Iconlink text="Mail" link="mailto:chritch-7@outlook.com" icon="i-uil-envelope" />
                <div> / </div>
                <Iconlink text="Github" link="https://github.com/zerokei" icon="i-uil-github" />
                <div> / </div>
                <Iconlink
                  text="Jike" link="https://web.okjike.com/u/ad2fa9a3-0588-41f8-a9d6-a5ac1e0fdc1f"
                  icon="i-uil-lightbulb-alt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" class="bg-secondary py-14">
      <div class="block-wrap">
        <div class=" block-content">
          <div class="flex">
            <div class="block-title">
              Projects
            </div>
            <div class="flex-grow" />
            <div class="opacity-90 text-sm flex flex-row space-x-2 content-end">
              <Icontext text="Active" icon="i-mdi-progress-wrench" />
              <div> / </div>
              <Icontext text="Archived" icon="i-material-symbols-archive-outline-sharp" />
            </div>
          </div>
          <div class="block-body">
            <div class="block-body-list">
              <ProjectItem
                name="Notebook" link="https://obsidian.zerokei.top"
                description="The notes I create using Obsidian and publish with Obsidian Digital Garden Plugin."
                :active="true" :tools="['Obsidian', 'Markdown']"
              />
              <ProjectItem
                name="ObsidianSnippets" link="https://github.com/Zerokei/ObsidianSnippets"
                description="My Obsidian CSS Snippets." :active="true" :tools="['CSS3']"
              />
              <ProjectItem
                name="ZeroSlides" link="https://github.com/Zerokei/ZeroSlides"
                description="A slide template powered by slidev." :active="true" :tools="['Vue']"
              />
              <ProjectItem
                name="texTemplate" link="https://github.com/Zerokei/texTemplate"
                description="My Latex Templates." :active="true" :tools="['Latex']"
              />
              <ProjectItem
                name="ZeroCPU" link="https://github.com/Zerokei/ZeroCPU"
                description="A RISC-V architecture CPU with support for a five-stage pipeline and cache."
                :tools="['Scala', 'Verilog']"
              />
              <ProjectItem
                name="DepGuard" link="https://github.com/Zerokei/DepGuard"
                description="A tool for exploring npm modules and dependencies." :tools="['React']"
              />
              <ProjectItem
                name="Light" link="https://github.com/Zerokei/Light"
                description="A photovoltaic hybrid energy storage simulation system." :tools="['Python']"
              />
            </div>
            <div class="mt-10 opacity-70 font-light">
              Check out the
              <Iconlink link="https://github.com/Zerokei" icon="i-uil-github" text="Github Repo" />
              for more details.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="recommandation" class="bg-primary py-14">
      <div class="block-wrap">
        <div class="block-content">
          <div class="block-title">
            Recommandation
          </div>
          <div class="block-body">
            <div class="block-body-list">
              <div class="block-body-item">
                <Icon name="ph:dot-fill" class="link-icon" />
                <Iconlink link="https://www.douban.com/doulist/157494227/" text="TOP10 Movies & Teleplays" icon="i-uil-heart" />
              </div>
              <div class="block-body-item">
                <Icon name="ph:dot-fill" class="link-icon" />
                <Iconlink link="/rec/videos" text="Recommended Videos" icon="i-ic-baseline-slow-motion-video" />
              </div>
              <div class="block-body-item">
                <Icon name="ph:dot-fill" class="link-icon" />
                <Iconlink link="/rec/toolbox" text="My ToolBox" icon="i-ph-toolbox-light" />
              </div>
              <!-- TODO RSS Resource -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TODO Skills -->
  </div>
</template>
