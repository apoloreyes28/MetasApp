/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // modificamos la configuracion
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        principal: '64px'
      },
    },
  },
  plugins: [require('tailwind-neumorphism')],
}
