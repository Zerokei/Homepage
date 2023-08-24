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
  <div mt-10>
    <div py-4 text-8xl>
      <div i-carbon-content-delivery-network inline-block />
      <p text-5xl opacity-75 class="title">
        {{ t('intro.desc') }}
      </p>
    </div>

    <div class="content" justify-center py-20>
      <div class="left" animate-fade-in>
        <img src="stitch.png">
      </div>

      <div class="right" m-4 animate-fade-in text-left>
        <nav>
          Hi, I'm Chritch|克瑞奇.
        </nav>
        <nav>
          - Learn More:
          <RouterLink icon-btn to="/about" :title="t('button.about')">
            About
          </RouterLink>
          /
          <a icon-btn rel="noreferrer" href="https://web.okjike.com/u/ad2fa9a3-0588-41f8-a9d6-a5ac1e0fdc1f" target="_blank" title="Jike">
            Jike
          </a>
          /
          <RouterLink icon-btn to="/project" :title="t('button.project')">
            Project
          </RouterLink>
        </nav>
        <nav>
          - Contact with Me:
          <a icon-btn rel="noreferrer" href="https://github.com/Zerokei" target="_blank" title="Github">
            Github
          </a>
          /
          <a icon-btn rel="noreferrer" href="mailto:chritch-7@outlook.com" target="_blank" title="Email">
            Email
          </a>
        </nav>
        <nav>
          - Notebooks:
          <a icon-btn rel="noreferrer" href="https://obsidian.zerokei.top" target="_blank" title="Obsidian Notes">
            Obsidian
          </a>
          /
          <a icon-btn rel="noreferrer" href="https://notes.zerokei.top" target="_blank" title="Notebook">
            Mkdocs
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
p.title {
  font-family: 'Dancing Script', cursive;
  font-weight: 700;
  color: #111111;
}
.content {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: max-content;
  margin: auto
}
.left {
  width: 50%; /* 设置栏的宽度 */
  padding: 20px; /* 可以根据需要设置内边距 */
}
.right {
  width: 50%; /* 设置栏的宽度 */
  padding: 20px; /* 可以根据需要设置内边距 */
}
</style>
