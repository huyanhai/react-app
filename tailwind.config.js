const colors = require('tailwindcss/colors');
const IS_PROD = process.env.NODE_ENV !== 'development';
const twBaseName = 'payment';
module.exports = {
  mode: IS_PROD ? '' : 'jit',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        [`${twBaseName}-base`]: ['12px', { lineHeight: 0 }],
        [`${twBaseName}-12`]: ['12px', { lineHeight: '16px' }],
        [`${twBaseName}-14`]: ['14px', { lineHeight: '18px' }],
        [`${twBaseName}-16`]: ['16px', { lineHeight: '20px' }],
        [`${twBaseName}-18`]: ['18px', { lineHeight: '22px' }],
        [`${twBaseName}-20`]: ['20px', { lineHeight: '24px' }],
        [`${twBaseName}-22`]: ['22px', { lineHeight: '26px' }],
        [`${twBaseName}-24`]: ['24px', { lineHeight: '28px' }],
        [`${twBaseName}-26`]: ['26px', { lineHeight: '30px' }],
        [`${twBaseName}-28`]: ['28px', { lineHeight: '32px' }],
      },
      padding: {
        [`${twBaseName}-16`]: '16px',
      },
      margin: {
        [`${twBaseName}-10`]: '10px',
        [`${twBaseName}-12`]: '12px',
        [`${twBaseName}-14`]: '14px',
        [`${twBaseName}-16`]: '16px',
        [`${twBaseName}-18`]: '18px',
        [`${twBaseName}-20`]: '20px',
        [`${twBaseName}-22`]: '22px',
        [`${twBaseName}-26`]: '26px',
        [`${twBaseName}-28`]: '28px',
        [`${twBaseName}-30`]: '30px',
        [`${twBaseName}-32`]: '32px',
        [`${twBaseName}-34`]: '34px',
      },
      width: {
        [`${twBaseName}-100`]: '100px',
      },
      minWidth: {
        [`${twBaseName}-1/5`]: '20%',
        [`${twBaseName}-1/4`]: '25%',
        [`${twBaseName}-1/2`]: '50%',
        [`${twBaseName}-3/4`]: '75%',
      },
      height: {
        [`${twBaseName}-40`]: '40px',
        [`${twBaseName}-48`]: '48px',
        [`${twBaseName}-56`]: '56px',
        [`${twBaseName}-64`]: '64px',
      },
      lineHeight: {
        [`${twBaseName}-0`]: '0px',
        [`${twBaseName}-48`]: '48px',
        [`${twBaseName}-56`]: '56px',
      },
      inset: {
        [`${twBaseName}-48`]: '48px',
      },
    },
  },
  variants: {
    extend: {},
  },
  prefix: 'tw-',
  plugins: [],
};
