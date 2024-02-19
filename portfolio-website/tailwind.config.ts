import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      lineHeight:{
        "85":"85px",
        "75":"75px",
        "0":"0px"
      },
      screens:{
        "xs":"375px",
        "sm": "640px",
        "md": "768px",
        "lg": "960px",
        "xl": "1200px"
      },
      maxWidth: {
        "screen-2.5-xl": "1500px"
      },
      colors: {
        "primary": "#121212",
        "secondary": "#181818",
        "Primary": "#ADB7BE",
        "itriy": "#18191E",
        "trio": "#33353F",
        "placeholder": "#9CA2A9",
      },
      width: {
        "400": "400px",
        "250": "250px",
        "53": "215px"
      },
      height: {
        "400": "400px",
        "250": "250",
      }
    },
  },
  plugins: [],
}
export default config
