<template>
  <div>
    <Navigation />
    <NuxtLayout>
      <div class="demo-page-root">
        <div class="z-2 relative">
          <NuxtPage />
        </div>
        <div class="left-gradient" />
        <div class="right-gradient" />
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
:root {
  font-size: 16px;
  font-weight: 400;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color-scheme: light dark;

  @apply bg-zinc-1 text-zinc-9 dark:(bg-dark-9 text-zinc-2);
}

.left-gradient {
  @apply absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r to-transparent
    from-green-300 dark:from-green-800 z-1;
}

.right-gradient {
  @apply absolute inset-y-0 right-0 w-1/5 bg-gradient-to-r
    from-transparent to-cyan-300 dark:to-cyan-800 z-1;
}

.demo-page-root {
  @apply flex p-16 w-full items-center relative justify-center min-h-screen;
}

.demo-page-root .page-container {
  @apply w-full text-center space-y-6;
}

.page-container h1 {
  @apply text-3xl font-medium max-w-50ch font-mono;
}

.page-container p:not(.label) {
  @apply italic max-w-prose mx-auto;
}

.page-container .label {
  @apply text-sm uppercase font-mono;
}
</style>
