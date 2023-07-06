<script setup lang="ts">
const { toolName } = defineModels<{
  toolName: string
}>()
interface Elements {
  icon: string
  color: string
}

const toolArray: { [key: string]: Elements } = {
  'Obsidian': { icon: 'i-simple-icons-obsidian', color: 'blueviolet' },
  'Markdown': { icon: 'i-simple-icons-markdown', color: '#4b4b4b' },
  'CSS3': { icon: 'i-simple-icons-css3', color: '#254bdd' },
  'Bash': { icon: 'i-simple-icons-gnubash', color: '#56a931' },
  'Docker': { icon: 'i-simple-icons-docker', color: '#1396c3' },
  'Python': { icon: 'i-simple-icons-python', color: '#3776ab' },
  'Scala': { icon: 'i-simple-icons-scala', color: '#c02300' },
  'React': { icon: 'i-simple-icons-react', color: '#4ec3e3' },
  'Verilog': { icon: 'i-simple-icons-v', color: '#625f86' },
  'C++': { icon: 'i-simple-icons-cplusplus', color: '#00599c' },
  'Java': { icon: 'i-simple-icons-java', color: '#c01818' },
}
// const color = toolArray[toolName].icon
</script>

<template>
  <div :style="{ 'background-color': toolArray[toolName].color }" flex-inline items-center b-rounded-1 p-0.8 px-1.2>
    <div :class="toolArray[toolName].icon" :style="{ color: '#FFFFFF' }" text-sm />
    <div px-0.5 />
    <text
      text-sm
      :style="{
        'color': '#FFFFFF',
        'font-family': 'Verdana',
        'text-shadow': '#020202 0px 1.4px 0px',
      }"
    >
      {{ toolName }}
    </text>
  </div>
</template>
