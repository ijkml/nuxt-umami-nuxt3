import matcher from '@ijkml/minimatch';

const excludeList = [
  '/private',
  '/dashboard',
  '/dashboard/*',
];

export default defineNuxtRouteMiddleware((to) => {
  const { $umami } = useNuxtApp();

  const excluded = excludeList.map(item => matcher.match(item, to.href));
  if (excluded.includes(true)) {
    return;
  }

  $umami.trackView(to.href);
});
