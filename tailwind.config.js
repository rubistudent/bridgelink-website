/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — pulled straight from the Bridgelink logo & company profile.
        indigo: {
          DEFAULT: '#241F6B',
          deep: '#171347',
          soft: '#332C8C',
        },
        teal: {
          DEFAULT: '#167A72',
          soft: '#1E958A',
        },
        coral: {
          DEFAULT: '#E8562E',
          soft: '#F17A4E',
        },
        cream: {
          DEFAULT: '#F7F4EC',
          dim: '#EFEADC',
        },
        ink: {
          DEFAULT: '#1B1830',
          soft: '#514C74',
        },
      },
      fontFamily: {
        // display = headings, body = paragraphs, mono = labels/eyebrows
        display: ['Fraunces', 'serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        blob: '44% 56% 62% 38% / 46% 40% 60% 54%',
      },
    },
  },
  plugins: [],
}
