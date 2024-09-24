/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

        colors: {
        'NavbarColor': '#160C6D',
        'Overlay': '#6B62C5',
        'common_color1' : '#1BBF00'
      },
      backgroundImage: {
        'Count_img': "url('./src/assets/images 01.png')",
        'Banner_img': "url('./src/assets/banner.jpg')",
        'Count_img_2': "url('./src/assets/Rectangle 46.png')",
        
      }
    },
  },
  plugins: [],
}

