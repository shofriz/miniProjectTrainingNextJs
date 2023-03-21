module.exports = {
    mode: 'jit',
    purge: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {backgroundImage: {
        'my_bg_image' : "url('../public/dad-joke.jpg')",
      }},
    },
    variants: {},
    plugins: [],
  }