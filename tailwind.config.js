/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "instagram-image": "url(/img/instagram.png)",
        "youtube-image": "url(/img/youtube.png)",
        "facebook-image": "url(/img/facebook.png)",
      }
    },
  },
  plugins: [],
}

