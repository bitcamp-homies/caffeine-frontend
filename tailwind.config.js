/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      // 'sans': ['GmarketSansMedium', 'system-ui'],
      'sans': ['Noto Sans KR', 'system-ui'],
    },
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.50)',
      },
      fontFamily: {
        'gMarketLight' : 'GmarketSansLight',
        'notoSansKR' : 'Noto Sans KR',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    lineClamp: ['text-bold'],
  }
}
