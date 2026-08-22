/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest:     '#3D6B4F',
        leaf:       '#3D6B4F',
        sage:       '#7A8B72',
        cream:      '#FAF7F2',
        earth:      '#C4A96A',
        sky:        '#EEF0E9',
        ink:        '#2D3B2D',
        'ink-muted':'#5C6B5C',
        stone:      '#DCD3C4',
        deep:       '#1A2B1F',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        green: {
          css: {
            '--tw-prose-body':        theme('colors.ink'),
            '--tw-prose-headings':    theme('colors.forest'),
            '--tw-prose-links':       theme('colors.leaf'),
            '--tw-prose-bold':        theme('colors.forest'),
            '--tw-prose-quotes':      theme('colors.earth'),
            '--tw-prose-quote-borders': theme('colors.sage'),
            '--tw-prose-hr':          theme('colors.stone'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
