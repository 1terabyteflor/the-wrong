import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        arial: 'Arial'
      }, 
      colors: {
        'aqua': '#83B5BE',
        'a': '#E0E8EC'
      }
    }
  }
}
export default config
