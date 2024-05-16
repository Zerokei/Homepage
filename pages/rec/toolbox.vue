<script setup lang="ts">
import webtools from '~/assets/data/webtools.json'

const selectedButton = useState('selected-button')
const buttonData = [
  { ref: 'defaudltButton', label: 'Pinned', icon: 'i-tabler-pinned', target: ['pinned'] },
  { ref: 'serviceButton', label: 'Service', icon: 'i-material-symbols-linked-services-outline', target: ['SaaS', 'PaaS'] },
  { ref: 'libraryButton', label: 'Library', icon: 'i-tabler-library', target: ['lib'] },
  { ref: 'documentButton', label: 'Document', icon: 'i-solar-document-text-linear', target: ['doc'] },
  { ref: 'databaseButton', label: 'Database', icon: 'i-tabler-database', target: ['database'] },
  { ref: 'researchButton', label: 'Research', icon: 'i-ph-graduation-cap', target: ['research'] },
]

function hasCommonElement(tags: string[], selectedTags: string[]): boolean {
  return selectedTags.some(tag => tags.includes(tag))
}

const selectedTools = computed(() => {
  for (const button of buttonData) {
    if (button.label === selectedButton.value) {
      return webtools.filter(
        tool => hasCommonElement(tool.tags, button.target),
      )
    }
  }
  return webtools
})

const buttons: Record<string, Ref<Element | ComponentPublicInstance | null>> = {}
buttonData.forEach((button) => {
  buttons[button.ref] = ref<Element | ComponentPublicInstance | null>(null)
})

onMounted(() => {
  changeFocus('Pinned')
})

function changeFocus(label: string) {
  buttonData.forEach((button) => {
    // 判断是否存在 label
    if (button.label === label)
      (buttons[button.ref]?.value as Element)?.classList?.add('focus-button')
    else if (button.label === selectedButton.value)
      (buttons[button.ref]?.value as Element)?.classList?.remove('focus-button')
  })
  selectedButton.value = label
}
</script>

<template>
  <div class="grid lg:grid-cols-5 h-screen max-h-screen">
    <!-- NOTE 侧边栏 -->
    <div class="hidden lg:block">
      <div class="flex flex-col py-4 px-4 space-y-4">
        <h2 class="mb-2 text-2xl font-semibold tracking-tight">
          Categories
        </h2>
        <div class="space-y-1">
          <button
            v-for="button in buttonData"
            :key="button.label"
            :ref="el => buttons[button.ref].value = el"
            class="sidebar-button"
            @click="changeFocus(button.label)"
          >
            <Icon :name="button.icon" />
            <span class="align-middle">{{ button.label }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-3 lg:col-span-4 lg:border-l">
      <div
        class="
          max-h-screen px-12 py-4
          flex flex-col items-center
          text-foreground font-normal
        "
      >
        <div class="flex-1 text-4xl py-4">
          {{ selectedButton }}
        </div>
        <div class="flex-auto flex flex-wrap justify-center overflow-y-auto overflow-x-hidden">
          <div
            v-for="tool in selectedTools"
            :key="tool.name"
            v-motion-pop-visible
            class="
              h-40 w-128
              rounded-sm border border-gray-200
              m-3 p-5
              flex flex-col
            "
          >
            <div class="flex flex-col font-mixed mt-2 space-y-2">
              <div class="text-2xl font-semibold leading-none tracking-tight">
                <Icon :name="tool.icon" />
                {{ tool.name }}
              </div>
              <div class="text-sm text-muted-foreground">
                {{ tool.description }}
              </div>
            </div>
            <div class="grow" />
            <div class="flex">
              <div class="flex-none">
                <WebtoolTag v-for="tag in tool.tags" :id="tag" :key="tag" />
              </div>
              <div class="grow" />
              <div class="flex-none">
                <Iconlink :link="tool.link" icon="i-material-symbols-attach-file" text="Link" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-button {
  @apply w-full text-xl text-left space-x-2 px-2 py-1 rounded-md ;
  @apply hover:dark:bg-gray-800 hover:bg-gray-100;
  @apply align-middle;
}
.focus-button {
  @apply bg-gray-200 dark:bg-gray-700;
}
</style>
