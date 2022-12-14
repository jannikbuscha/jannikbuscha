<script setup lang="ts">
const { cover } = useAppConfig()
</script>

<template>
  <div>
    <Html lang="en" />
    <Meta property="og:image" :content="cover" />
    <Meta name="twitter:card" content="summary_large_image" />
    <AppLoadingBar />
    <AppNavbar />
    <slot />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-white dark:bg-black dark:text-gray-100;
}
</style>
