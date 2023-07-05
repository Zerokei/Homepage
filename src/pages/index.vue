<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
function go() {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div h-full flex select-none text-center all:transition-400>
    <div ma>
      <div text-6xl>
        <div i-carbon-content-delivery-network inline-block />
      </div>
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" />
      </p>
      <p>
        <em text-xl opacity-75>{{ t('intro.desc') }}</em>
      </p>

      <div py-4 />

      <nav flex="~ gap-4" mt-6 justify-center text-2xl>
        <a icon-btn rel="noreferrer" href="https://obsidian.zerokei.top" target="_blank" title="Obsidian">
          <div i-simple-icons-obsidian />
        </a>
        <a icon-btn rel="noreferrer" href="https://github.com/Zerokei" target="_blank" title="Github">
          <div i-carbon-logo-github />
        </a>
        <a icon-btn rel="noreferrer" href="https://notes.zerokei.top" target="_blank" title="Github">
          <div i-carbon-document />
        </a>
      </nav>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
