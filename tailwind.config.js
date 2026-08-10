/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        text: '#28282e',
        muted: '#949ea9',
        line: '#dee4ea',
        dark: '#28282e',
      },
      fontFamily: {
        sans: ['MarkPro', 'Inter', 'system-ui', 'sans-serif'],
        display: ['MarkPro', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['MarkPro', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1680px',
      },
    },
  },
  plugins: [],
}

