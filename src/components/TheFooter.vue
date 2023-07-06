<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div bottom-5 left-0 right-0 text-center fw300>
    <nav flex="~ gap-4" mt-6 justify-center text-xl op60>
      <RouterLink icon-btn to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>

      <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a icon-btn :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <a icon-btn rel="noreferrer" href="https://github.com/Zerokei/Homepage" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </nav>

    <div py-2 />
    <div text-sm op30 font="mono">
      <p> Copyright © 2023 @Chritch </p>
      <a href="https://beian.miit.gov.cn/#/Integrated/index"> 浙ICP备2021029841号-1 </a>
    </div>
  </div>
</template>
