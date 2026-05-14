/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest:     '#2D5016',
        leaf:       '#4A7C59',
        sage:       '#8BAE8A',
        cream:      '#F8F5F0',
        earth:      '#6B5B3E',
        sky:        '#E8F4EA',
        ink:        '#1A1A1A',
        'ink-muted':'#555555',
        stone:      '#D4CFC9',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
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
