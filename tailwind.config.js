import colors from 'tailwindcss/colors'
module.exports = {
    theme: {
      extend: {
        colors:{
          primary: colors.blue
        }
      }
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }