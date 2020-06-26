module.exports = {
  purge: {
    content: ['./public/*.html', './src/**/*.svelte'],
    options: {
      whitelist: [
        'md:w-16',
        'md:w-28',
        'md:w-36',
        'md:w-56',
        'md:h-36',
        'md:h-56',
        'md:p-5',
        'md:p-8',
        'md:border-t-9',
        'md:border-b-9',
        'md:border-t-12',
        'md:border-b-12',
        'bg-rock',
        'bg-paper',
        'bg-scissors',
        'border-rock',
        'border-paper',
        'border-scissors',
      ],
    },
  },
  theme: {
    extend: {
      backgroundColor: {
        rock: '#dd405d',
        paper: '#5671f5',
        scissors: '#eca922',
      },
      borderColor: {
        grey: '#606e85',
        rock: '#dc2e4e',
        paper: '#4865f4',
        scissors: '#ec9e0e',
      },
      textColor: {
        dark: '#3b4363',
        'dark-blue': '#2a46c0',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.125rem',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '9': '9px',
        '12': '12px',
      },
      height: {
        '28': '7rem',
        '36': '9rem',
      },
      width: {
        '14': '3.5rem',
        '28': '7rem',
        '36': '9rem',
      },
      margin: {
        '18': '4.5rem',
        '28': '7rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
