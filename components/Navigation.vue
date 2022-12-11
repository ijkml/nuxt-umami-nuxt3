<script setup lang="ts">
interface NavLink {
  text: string
  link: string
}

const publicLinks: NavLink[] = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Company', link: '/company' },
  { text: 'Contact', link: '/contact' },
];

const privateLinks: NavLink[] = [
  { text: 'Private', link: '/private' },
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'User', link: '/dashboard/user' },
  { text: 'Finance', link: '/dashboard/finance' },
];

const navLinks = [
  { id: 'public-nav', links: publicLinks },
  { id: 'private-nav', links: privateLinks },
];
</script>

<template>
  <div class="nav-container">
    <template v-for="nav in navLinks" :key="nav.id">
      <nav :id="nav.id">
        <NuxtLink v-for="pl in nav.links" :key="pl.text" class="nav-links" exact-active-class="active" :to="pl.link">
          {{ pl.text }}
        </NuxtLink>
      </nav>
      <div class="divider" />
    </template>
  </div>
</template>

<style scoped>
.nav-container {
  @apply py-4 px-6 md:px-12 border-b border-black/20 bg-transparent w-full z-16
    dark:(text-white border-white/20) flex justify-between fixed top-0 left-0 backdrop-filter backdrop-blur-5px;
}

nav {
  @apply flex justify-around gap-4 lg:gap-8;
}

.nav-links {
  @apply transition-all duration-250 underline underline-dashed
    opacity-80 decoration-offset-13 underline-transparent;
}

.nav-links:where(:focus-visible, :hover, .active) {
  @apply decoration-offset-6 opacity-100 underline-current;
}

.nav-links.active {
  @apply text-cyan-8 dark:text-cyan-5;
}

.nav-links:focus {
  outline: none !important;
}

.divider {
  @apply border-r border-zinc;
}

.divider:last-of-type {
  @apply hidden;
}
</style>
