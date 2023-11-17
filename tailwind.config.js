// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
