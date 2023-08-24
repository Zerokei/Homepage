<route lang="yaml">
meta:
  layout: info
</route>

<script setup lang="ts">
defineOptions({
  name: 'ProjectPage',
})
interface ProjectInfos {
  url: string
  description: string
  tools: string[]
}

const ingProjects: { [key: string]: ProjectInfos } = {
  'Obsidian Notebook': {
    url: 'https://obsidian.zerokei.top/',
    description: 'The notes I create using Obsidian and publish with Obsidian Digital Garden Plugin.',
    tools: ['Obsidian', 'Markdown'],
  },
  'Obsidian Snippets': {
    url: 'https://github.com/Zerokei/ObsidianSnippets',
    description: 'Obsidian CSS Snippets.',
    tools: ['CSS3'],
  },
  'ZeroSetup': {
    url: 'https://github.com/Zerokei/ZeroSetup',
    description: ' Ubuntu and docker startup settings.',
    tools: ['Bash', 'Docker'],
  },
  'AskGPT': {
    url: 'https://github.com/Zerokei/AskGPT',
    description: 'Use ChatGPT API with command line.',
    tools: ['Python'],
  },
}

const achievedProjects: { [key: string]: ProjectInfos } = {
  'ZeroCPU': {
    url: 'https://github.com/Zerokei/ZeroCPU',
    description: 'A RISC-V architecture CPU with support for a five-stage pipeline and cache.',
    tools: ['Scala', 'Verilog'],
  },
  'DepGuard': {
    url: 'https://github.com/Zerokei/DepGuard',
    description: 'A tool for exploring npm modules and dependencies.',
    tools: ['React'],
  },
  'NaiveEditor': {
    url: 'https://github.com/Zerokei/NaiveEditor',
    description: 'A naive text editor.',
    tools: ['Bash'],
  },
  'Light': {
    url: 'https://github.com/Zerokei/Light',
    description: 'A photovoltaic hybrid energy storage simulation system.',
    tools: ['Python'],
  },
  'Notes': {
    url: 'https://github.com/Zerokei/Notes',
    description: 'My class notes and computer science wiki deployed with mkdocs.',
    tools: ['Markdown'],
  },
  'Simple Meshware': {
    url: 'https://github.com/Zerokei/Simple-Meshware',
    description: 'My Simple Meshware designed in OOP class.',
    tools: ['C++'],
  },
  'KeiShell': {
    url: 'https://github.com/Zerokei/KeiShell',
    description: 'A simple shell designed with Java language.',
    tools: ['Java'],
  },
  'MiniSQL': {
    url: 'https://github.com/Zerokei/MiniSQL',
    description: 'A simple database system.',
    tools: ['C++'],
  },
  'Libaray Management System': {
    url: 'https://github.com/Zerokei/Library_Management_System',
    description: 'A simple library management system.',
    tools: ['Python'],
  },
}
</script>

<template>
  <div class="content-box">
    <div prose-sm m-auto text-left prose>
      <div class="text-center">
        <div i-carbon-cics-program class="m-auto text-4xl -mb-6" />
        <h3>
          Project
        </h3>
      </div>
    </div>
    <div py-4 />
    <p class="project-title">
      🛠️ Maintained Projects
    </p>
    <div v-for="(project, key) in ingProjects" :key="key">
      <div class="project-list" space-x-1.2>
        <a :href="`${project.url}`" class="project-name"> {{ key }} </a>: {{ project.description }}
        <TheBadge v-for="tool in project.tools" :key="tool" :tool-name="tool" />
      </div>
    </div>

    <div py-5 />

    <p class="project-title">
      🗃️ Formal Projects
    </p>
    <div v-for="(project, key) in achievedProjects" :key="key">
      <div class="project-list" space-x-1.2>
        <a :href="`${project.url}`" class="project-name"> {{ key }} </a>: {{ project.description }}
        <TheBadge v-for="tool in project.tools" :key="tool" :tool-name="tool" />
      </div>
    </div>

    <div py-5 />

    <div :style="{ 'font-family': 'Roboto' }" text-left text-xl>
      Check out the <a text-amber href="https://github.com/Zerokei?tab=repositories">GitHub Repo</a> for more details.
    </div>
  </div>
</template>

<style>
.project-title {
  font-weight: 700;
  padding-bottom: 0.5rem;
  text-align: left;
  font-size: 1.25rem;
  line-height: 1.7rem;
}

.project-list {
  font-family: 'Segoe UI';
  font-size: 1rem;
  display: list-item;
  list-style-type: disc;
  text-align: left;
  list-style-position: inside;
  line-height: 2rem;
  list-style-type: circle;
}

.project-name {
  font-family: 'Segoe UI';
  font-weight: 500;
}
</style>
