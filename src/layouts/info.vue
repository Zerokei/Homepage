<template>
  <main
    px-4 py-10
    text="center gray-700 dark:gray-200"
  >
    <RouterView />
    <TheFooter absolute bottom-5 left-0 right-0 text-center fw300 op80 />
  </main>
</template>

<style>
.content-box {
  /* 默认的页边距值 */
  margin-left: 10rem;
  margin-right: 10rem;
}

@media screen and (max-width: 600px) {
  .content-box {
    /* 较小页面宽度时的页边距值 */
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

@media screen and (min-width: 1600px) {
  .content-box {
    /* 较大页面宽度时的页边距值 */
    margin-left: 25rem;
    margin-right: 25rem;
  }
}
</style>
