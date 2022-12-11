import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {},
  },
  presets: [
    presetUno({
      dark: 'media',
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
