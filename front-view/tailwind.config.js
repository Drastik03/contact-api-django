/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-black": "#04020F",
        "black-gray": "#0C0A11",
        "gray-text": "#8F8F8F",
        "Bright-Red": "hsl(12, 88%, 59%)",
        "Dark-Blue": "hsl(228, 39%, 23%)",
        "Dark-Grayish-Blue": "hsl(227, 12%, 61%)",
        "Very-Dark-Blue": "hsl(233, 12%, 13%)",
        "Very-Pale-Red": "hsl(13, 100%, 96%)",
        "Vary-Light-Gray": "hsl(0, 0%, 98%)",
      },
      backgroundImage: {
        icon: "url('media/5.png')",
      },
    },
  },
  plugins: [],
};
