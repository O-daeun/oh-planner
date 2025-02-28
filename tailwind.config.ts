import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
        supermagic: ['Supermagic', 'sans-serif'],
      },
      colors: {
        'var-green-main': '#0D4715',
        'var-green-100': '#41644A',
        'var-orange-main': '#E9762B',
        'var-background': '#F1F0E9',
      },
    },
  },
} satisfies Config;
