module.exports = {
  purge: {
    content: ['./public/*.html', './src/**/*.svelte'],
    options: {
      whitelist: [
        'w-16',
        'w-28',
        'w-36',
        'w-56',
        'h-36',
        'h-56',
        'p-5',
        'p-8',
        'border-t-9',
        'border-b-9',
        'border-t-12',
        'border-b-12',
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
        '9': '9px',
        '12': '12px',
      },
      height: {
        '28': '7rem',
        '36': '9rem',
      },
      width: {
        '28': '7rem',
        '36': '9rem',
      },
      margin: {
        '18': '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
