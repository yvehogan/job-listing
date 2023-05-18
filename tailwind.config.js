/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5dadae',
        secondary: '#eff9f9',
        textColor: '#30253d',
        lightColor: '#7a8380',
        bgColor: '#91abaa',
        borderColor: '#cdd0cf'
      }
    }
  },
  plugins: []
};