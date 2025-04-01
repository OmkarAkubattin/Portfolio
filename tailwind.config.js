// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}" // Add file types you are using
  ],
  theme: {
    extend: {
      fontFamily: {
        myfont: ['MyFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
