<script setup lang="ts">
const props = defineProps({
  id: String
})
const toolName: string = props.id as string;

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
  'Vue': { icon: 'i-simple-icons-vuedotjs', color: '#4a9f70'},
  'React': { icon: 'i-teenyicons-react-outline', color: '#4ec3e3' },
  'Verilog': { icon: 'i-file-icons-verilog', color: '#625f86' },
  'C++': { icon: 'i-simple-icons-cplusplus', color: '#00599c' },
  'Java': { icon: 'i-simple-icons-java', color: '#c01818' },
  'Latex': { icon: 'i-simple-icons-latex', color: '#317a7c' },
}
</script>

<template>
  <span :style="{ 'background-color': toolArray[toolName].color }" class="flex flex-row inline-flex px-2 rounded-md text-xs mr-1 py-0.5" >
    <Icon :name="toolArray[toolName].icon" class="my-1 mr-1"/>
    <span
      :style="{
        'color': '#FFFFFF',
        'font-family': 'Verdana',
        'text-shadow': '#020202 0px 1.4px 0px',
      }"
      class="mt-0.5"
    >
      {{ toolName }}
    </span>
  </span>
</template>