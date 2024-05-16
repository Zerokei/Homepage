<template>
  <div class="flex flex-col full-height">
    <div class="bg-background h-screen">
      <div class="block-wrap">
        <div class="block-content">
          <slot />
          <div class="block-bottom">
            <Iconlink
              link="/#recommandation"
              text="Back"
              icon="i-uil-arrow-down-left"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
