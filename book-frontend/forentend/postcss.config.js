module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  }

  module.exports = {
    theme: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  };