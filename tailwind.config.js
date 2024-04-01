/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'polar-bear': "url('./assets/polarbear.jpg')",
        'habitat': "url('./assets/habitat.jpg')",
        'diet': "url('https://www.arcticwwf.org/_next/image/?url=https%3A%2F%2Fapiwwfarcticse.cdn.triggerfish.cloud%2Fuploads%2F2022%2F05%2F11101055%2FPolar-bear-diet-1.jpg&w=1920&q=75')"
      },
      boxShadow: {
        '5xl': '12px 35px 50px 15px rgba(2, 6, 23, 0.4)',
    },
  },
  plugins: [],
}}

