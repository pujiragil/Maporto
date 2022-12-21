/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "light": "#E9EBEC",
        "dark": "#0C151D",
        "primary": {
          "one": "#0C151D",
          "two": "#575757",
          "three": "#3D3D3D",
          "four": "#19191B"
        },
        "secondary": {
          "one": "#F1F2F4",
          "two": "#A3ABB2",
          "three": "#3D3D3D"
        },
        "orange": {
          "dark": "#FFE071",
          "light": "#FBD144"
        },
        "switch": {
          "dark": "#171F26",
          "light": "#FFFFFF"
        }
      }
    },
  },
  plugins: [],
}
