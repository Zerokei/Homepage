<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
// const name = ref(user.savedName)

// const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

const { t } = useI18n()
</script>

<template>
  <div m20>
    <div text-6xl>
      <div i-carbon-content-delivery-network inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" />
    </p>
    <p text-xl opacity-75>
      {{ t('intro.desc') }}
    </p>

    <div py-4 />

    <nav flex="~ gap-4" mt-6 animate-fade-in justify-center text-2xl>
      <a icon-btn rel="noreferrer" href="https://github.com/Zerokei" target="_blank" title="Github">
        <div i-carbon-logo-github />
      </a>
      <a icon-btn rel="noreferrer" href="https://web.okjike.com/u/ad2fa9a3-0588-41f8-a9d6-a5ac1e0fdc1f" target="_blank" title="Jike">
        <div i-carbon-chat-bot />
      </a>
      <a icon-btn rel="noreferrer" href="mailto:chritch-7@outlook.com" target="_blank" title="Email">
        <div i-carbon-email />
      </a>
      <RouterLink icon-btn to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>
      <RouterLink icon-btn to="/project" :title="t('button.project')">
        <div i-carbon-cics-program />
      </RouterLink>
    </nav>

    <nav flex="~ gap-4" mt-6 animate-fade-in justify-center text-2xl>
      <a icon-btn rel="noreferrer" href="https://obsidian.zerokei.top" target="_blank" title="Obsidian Notes">
        <div i-simple-icons-obsidian />
      </a>
      <a icon-btn rel="noreferrer" href="https://notes.zerokei.top" target="_blank" title="Notebook">
        <div i-carbon-document />
      </a>
    </nav>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
