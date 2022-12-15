import { matcher } from 'glob-url';

const excludeList = [
  '/private',
  '/dashboard',
  '/dashboard/*',
];

export default defineNuxtRouteMiddleware((to) => {
  const { $umami } = useNuxtApp();

  const excluded = excludeList.map(item => matcher.match(item, to.fullPath));
  if (excluded.includes(true)) {
    return;
  }

  $umami.trackView(to.fullPath);
});
